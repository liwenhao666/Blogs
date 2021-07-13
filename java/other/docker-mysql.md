## docker安装mysql8.0
[Docker安装参照](https://developer.aliyun.com/article/110806 ':target=_block domain driver desgin')

> docker pull mysql:8.0.16
##  docker启动
```text
docker run --restart=unless-stopped -d --name mysql8 -v /lwh/mysql8/conf/my.cnf:/etc/mysql/my.cnf -v /lwh/mysql8/data:/var/lib/mysql -p 3336:3306 -e MYSQL_ROOT_PASSWORD=***

-v /home/casic/tool/mysql8.0.16/mysql-files:/var/lib/mysql-files/ 
```

## CART 服务搭建

- 1. **cd到安装路径**
```text
pdi-ce-9.0.0.0-423\data-integration
```
- 2. **修改配置文件** 
```text
/pwd/carte-config-**.xml
```
- 3. **指定配置文件启动**
```text
carte ./pwd/carte-config-**.xml
```
- 4. **启动完成后**
```text
 http://ip:port/
```
### API调用

 
