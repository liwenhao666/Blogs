### 简介
!> &emsp;&emsp; 一个产品，在最开始的时候，由于业务简单，一般是直接在一个工程里开发。这种方式，在产品起步阶段，是没有问题的，也能够有效的保证开发效率。但随着业务的不断发展，代码量不断增多，开发团队不断壮大。代码的重用和管理越来越复杂。
因此 组件的开发和治理将会至关重要。
    
### 1. 私服构建
-  此处使用nexus3搭建，相对比较简单,自行百度即可,此处后续再做更新,安装包网盘中搜索

### 2. 项目搭建

-  参见 [vue-components](https://gitee.com/lwh6008/vue-components ':target=_block github排行榜')

### 3. 组件发布
- 初次登陆
````text
npm login --registry http://localhost:8081/repository/casic-npm/
````
- 发布组件
````text
npm publish --registry http://localhost:8081/repository/casic-npm/
````
