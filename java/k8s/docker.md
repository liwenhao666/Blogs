## docker镜像制作
[docker镜像打包](https://blog.csdn.net/lusyoe/article/details/54926937 ':target=_block domain driver desgin')        
[远程端口配置](https://blog.csdn.net/qq_21187515/article/details/90268345 ':target=_block domain driver desgin')      
[docker命令](https://www.runoob.com/docker/docker-run-command.html ':target=_block domain driver desgin')      
[K8S 简介](https://blog.csdn.net/metheir/article/details/84452582 ':target=_block domain driver desgin') 

> 具体构建参照如下
##  远程端口设置脚本
?> 参照 assets/img/java/docker_cert.sh

```text
#创建 Docker TLS 证书
#!/bin/bash
#相关配置信息
SERVER="10.4.1.21"
PASSWORD="password"
COUNTRY="CN"
STATE="广州省"
CITY="广州市"
ORGANIZATION="casic"
ORGANIZATIONAL_UNIT="Dev"
EMAIL="472853529@qq.com"
###开始生成文件###
echo "开始生成文件"
#切换到生产密钥的目录
cd /etc/docker
#生成ca私钥(使用aes256加密)
openssl genrsa -aes256 -passout pass:$PASSWORD  -out ca-key.pem 2048
#生成ca证书，填写配置信息
openssl req -new -x509 -passin "pass:$PASSWORD" -days 3650 -key ca-key.pem -sha256 -out ca.pem -subj "/C=$COUNTRY/ST=$STATE/L=$CITY/O=$ORGANIZATION/OU=$ORGANIZATIONAL_UNIT/CN=$SERVER/emailAddress=$EMAIL"
#生成server证书私钥文件
openssl genrsa -out server-key.pem 2048
#生成server证书请求文件
openssl req -subj "/CN=$SERVER" -new -key server-key.pem -out server.csr
#使用CA证书及CA密钥以及上面的server证书请求文件进行签发，生成server自签证书
openssl x509 -req -days 3650 -in server.csr -CA ca.pem -CAkey ca-key.pem -passin "pass:$PASSWORD" -CAcreateserial  -out server-cert.pem
#生成client证书RSA私钥文件
openssl genrsa -out key.pem 2048
#生成client证书请求文件
openssl req -subj '/CN=client' -new -key key.pem -out client.csr
sh -c 'echo "extendedKeyUsage=clientAuth" > extfile.cnf'
#生成client自签证书（根据上面的client私钥文件、client证书请求文件生成）
openssl x509 -req -days 3650 -in client.csr -CA ca.pem -CAkey ca-key.pem  -passin "pass:$PASSWORD" -CAcreateserial -out cert.pem  -extfile extfile.cnf
#更改密钥权限
chmod 0400 ca-key.pem key.pem server-key.pem
chmod 0444 ca.pem server-cert.pem cert.pem
#删除无用文件
rm client.csr server.csr
echo "生成文件完成"
###生成结束###

```
## 配置docker支持TLS证书
```text
vi /usr/lib/systemd/system/docker.service
--tlsverify \
--tlscacert=/etc/docker/ca.pem \
--tlscert=/etc/docker/server-cert.pem \
--tlskey=/etc/docker/server-key.pem \
-H tcp://0.0.0.0:2376 \
-H unix:///var/run/docker.sock \

netstat -tunlp #查看状态
```
 <figure class="thumbnails">
     <img src="assets/img/java/docker/docker_service.png" alt="Screenshot of content" title="装饰器模式">
 </figure>
 
## 复制证书,

?> 复制如下证书到文件夹 D:\workspace\cert
```text
ca.pem CA证书
cert.pem 客户端证书
key.pem 客户端证书私钥
```
## 配置环境变量
?> 
DOCKER_CERT_PATH D:\workspace\cert            
DOCKER_HOST tcp://10.4.1.21:2376

?> 配置maven插件
```xml
 <plugin>
 <groupId>com.spotify</groupId>
 <artifactId>dockerfile-maven-plugin</artifactId>
 <version>1.4.9</version>
 <executions>
     <execution>
         <id>tag-latest</id>
         <phase>deploy</phase>
         <goals>
             <goal>build</goal>
             <goal>tag</goal>
             <goal>push</goal>
         </goals>
         <configuration>
             <tag>latest</tag>
         </configuration>
     </execution>
     <execution>
         <id>tag-version</id>
         <phase>deploy</phase>
         <goals>
             <goal>build</goal>
             <goal>tag</goal>
             <goal>push</goal>
         </goals>
         <configuration>
             <tag>${project.version}</tag>
         </configuration>
     </execution>
 </executions>
 <configuration>
     <username>admin</username>
     <!--在容器镜像服务控制台"设置Registry登录密码"-->
     <password>*****</password>
     <!--registry.cn-hangzhou.aliyuncs.com/namespace/repositoryname-->
     <repository>localhost:8083/repository/casic-docker</repository>
     <tag>latest</tag>
     <buildArgs>
         <JAR_FILE>${project.build.finalName}.jar</JAR_FILE>
     </buildArgs>
 </configuration>
</plugin>
```
## docker容器配置私仓
### 配置私仓
```text
vim  /usr/lib/systemd/system/docker.service
ExecStart=/usr/bin/dockerd --insecure-registry http://192.168.76.131:4430
```
### 重启docker服务
```text
systemctl   daemon-reload &&  systemctl   restart docker.service 
```

### 执行mvn命令
```text
dockerfile:build
dockerfile:push
```

## dockerfile编写

[编写参照](https://www.cnblogs.com/lujiaojiao/p/11288409.html ':target=_block domain driver desgin') 

```text
FROM openjdk:8-jdk-alpine
VOLUME /usr/local/casic-web-2.0.0
ADD target/casic-web-2.0.0.tar.gz /usr/local/
RUN chmod -R 777 /usr/local
WORKDIR /usr/local/casic-web-2.0.0
EXPOSE 11307
#ENTRYPOINT ["ls","-lh"]
ENTRYPOINT ["/bin/sh","-c","/usr/local/casic-web-2.0.0/start.sh"]
```



