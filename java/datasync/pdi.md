### PDI相关使用说明
> pdi相关使用说明
###  PDI安装
?> 使用网盘下载安装即可

### CART 服务搭建
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

### PDI SPOON发布服务
- **增加carte子服务和启动配置即可**
 
<figure class="thumbnails">
    <img src="assets/img/java/pdi/carte.png" alt="Screenshot of content" title="装饰器模式">
    <img src="assets/img/java/pdi/runconfig.png" alt="Screenshot of content" title="装饰器模式">
</figure>

### API调用
[官方文档](https://help.pentaho.com/Documentation/8.2/Developer_Center/REST_API/Carte/030 ':target=_block domain driver desgin')
 
