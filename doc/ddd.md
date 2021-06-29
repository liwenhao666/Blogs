[DDD模式](https://www.cnblogs.com/wayfarer/archive/2010/06/30/1768694.html ':target=_block domain driver desgin')

[实战参考](https://www.cnblogs.com/yubaolee/p/Catalogue.html ':target=_block domain driver desgin')     
[一文看懂领域驱动设计](https://zhuanlan.zhihu.com/p/347603268 ':target=_block domain driver desgin')  
[DDD-原则与实践](https://blog.csdn.net/weixin_36027743/article/details/113365974 ':target=_block domain driver desgin')  
[ddd-simple](https://github.com/citerus/dddsample-core ':target=_block domain driver desgin')

[权限设计](http://demo.openauth.me:1803/#/login ':target=_block domain driver desgin')

## 简介    
 
!> DDD模式 即 Domain-Driven Design领域驱动设计。简称DDD    
你想要的大概都在这里了
## 步骤

```mermaid
        graph LR;
        战略设计-->统一语言
        统一语言-->领域拆分
        领域拆分-->子域拆分
        子域拆分-->限界上下文
        限界上下文-->上下文识别映射
        上下文识别映射-->分层架构
```
## 核心
?> &emsp;&emsp;领域驱动设计的关注重心是领域，尤其在面对复杂的领域逻辑时，它总能够帮助我们很好地分析领域。领域驱动设计的基础是领域建模。 
Eric认为需要和领域专家良好地合作，从交谈中发现通用语言，找到领域的关键词。领域建模是迭代的过程，根据逐渐深入的领域知识来精化模型。不过，领域驱动设计并不排斥其他的分析技术，例如分析模式，或者通过测试驱动开发来引导我们找到问题域的领域模型。

## 战略设计
   战略设计主要从高层俯视(上帝视角)我们的软件系统，就如同玩即时战略游戏般，可以一览地图全貌，以此来决定我们是要进攻还是防守哪个方向，同样，在软件中我们也可以以此来划分领域，确定权重方向。
