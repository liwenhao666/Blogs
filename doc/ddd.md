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
<figure class="thumbnails">
    <img src="assets/img/ddd/compare.jpg"  alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/ddd/domain.jpg"  alt="Screenshot of coverpage" title="Cover page">
</figure>

## 战略设计

?> 战略设计主要从高层俯视(上帝视角)我们的软件系统，就如同玩即时战略游戏般，可以一览地图全貌，以此来决定我们是要进攻还是防守哪个方向，同样，在软件中我们也可以以此来划分领域，确定权重方向。
### 1. 统一语言
?> &emsp;&emsp;提炼领域知识，怎么个提炼法，千万条罗马路，各有各的看家本领。像事件风暴方法，用例分析方法，用户故事，甚至是开大会，各种讨论会等，最终目的都是提炼出领域知识，而提炼过程中，达成描述上的一致性，
**<font color=red>包括系统目标、系统范围及系统所具有的功能。</font>**        
&emsp;&emsp;这不是领域驱动设计所独有的，但却是软件开发中所必须的，为领域专家、业务分析人员、编码人员和测试人员等团队所有成员交流时构建统一频道。
<figure class="thumbnails">
    <img src="assets/img/ddd/talk.jpg"  alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/ddd/bug.jpg"  alt="Screenshot of coverpage" title="Cover page">
</figure>

### 2. 领域拆分

?> &emsp;&emsp;对于领域这个概念，习惯性会想到制药领域、环境领域、金融领域等这些概念，而领域本身所描述的是范围，是如同现实世界般的复杂，无边际。<font color=red>借助分治法，将问题逐级细分来降低业务和技术复杂度</font>，将这复杂的世界划分出清晰的边界来，反过来控制着划分后不那么复杂的世界，也既领域拆分出细化后的子领域。

- 子域拆分

!> **1. 核心域:** 其所体现的是核心服务，是代表着产品的核心竞争力。     
**2. 支撑域：** 其所体现的是支撑服务，没它不行，但又达不到核心的价值，围绕着产品内部所需要，但又不能单独变更为第三方服务，即它不是一个通用的服务。       
**3. 通用域：** 其所体现的中间件服务或第三方服务。本身可以通过现有的解决方案集成来完成的服务。

?> &emsp;&emsp;在实际解决问题时，我们也习惯将问题拆分，而怎么拆，基于什么原则拆，可能会依据相关性，权重，甚至分类原则等，对于系统而言，会从架构方面考虑，基础设施考虑等，在领域驱动设计中，更偏向基于业务拆分，降低业务复杂度，也分离技术实现的复杂度，依照业务拆分后的子领域，本身存在权重上的差异，依照重要性和功能划分为三类，投资占比也就有所不同。

<figure class="thumbnails">
    <img src="assets/img/ddd/domain-division.jpg" style="width: 160px;height: 580px;" alt="Screenshot of content" title="Content">
    <img src="assets/img/ddd/domain-div-sub.jpg" style="width: 160px;height: 580px;" alt="Screenshot of content" title="Content">
</figure>

### 3. 界限上下文

?> &emsp;&emsp;深入到一个子域中，又是一片小天地，在这天地中，却又还是存在着因语义与语境上的差异，让一些概念在这子域中显得额外尴尬。在一个领域 / 子域中，我们会创建一个概念上的领域边界，在这个边界中，任何领域对象都只表示特定于该边界内部的确切含义。这样边界便称为限界上下文。

&emsp;&emsp;其本质上是限界+上下文，引用到张逸老师的一句话！

!> **上下文（Context）其实是动态的业务流程被边界（Bounded）静态切分的产物。**

对于子域与上下文间的关系，看到很多书籍或是文章中所描述的都不一样，这块的争论也没有一个最终答案，个人更倾向于子域中划分上下文，从拆分角度来讲，这样理解更加简单。

- **上下文识别**

&emsp;&emsp;对于上下文的识别，没有可遵循的标准可走，从不同的角度切入将会识别到不同的上下文，可从张逸老师的领域驱动设计实践中窥之一二，以业务复杂度、管理复杂度和技术复杂度出发，面对这三个角度去依次分析，从业务视角、工作视角、应用视角去识别，进而识别出准确的上下文，通过不断的分析斟酌考虑，逐渐识别出符合当前预期的上下文，如在实际操作环节发觉当前上下文的设计显得不那么合理，还可再进行变动、拆分上下文。
<figure class="thumbnails">
    <img src="assets/img/ddd/domain.jpg"  alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/ddd/level.jpg"  alt="Screenshot of coverpage" title="Cover page">
</figure>
但需注意的一个是，我们识别上下文的目的是什么，是为了控制上下文，准确的说是为了控制上下文的边界、大小，是为了保住我们所守护的上下文不会因过度成长变大而奔溃，亦或因上下文过度缩减而失去价值，保证上下文内一切的稳定，上下文与上下文间交互的可用性，也或者是当我们退出上下文时，交付出来的上下文是非常可观的，而不是一个烂摊子。

- **上下文映射**

&emsp;&emsp;规划了这么多限界上下文，该如何穿针引线将这些上下文串起来便是一个问题了，用例场景的完整实现往往是由多个上下文的协作完成的，怎么去组织这些上下文，领域驱动设计提到的几种方式及软件工程中常用模式

?>  1. 合作关系：一荣俱荣，一损俱损。      
2. 共享内核：上下文间共享领域实体。        
3. 客户方-供应方：下游客户依赖于上游供应方。       
4. 遵奉者：下游客户顺应上游供应方。        
5. 各行其道：没有关系的关系，相互隔离。      
6. 防腐层：在下游上下文与上游间增加一道屏障，以此来隔绝与上游的直接交互保护下游。     
7. 开放主机服务：在上游与下游上下文间增加一道协议，以此来规范下游对上游的集成。      
8. 已发布语言：发布方上下文发布一份包含丰富文档的信息交换语言，消费方上下文翻译并使用。      

这些模式其本质是为了<font color=red>协作</font>，为了满足用例场景下对多个限界上下文的调用，通过<font color=red>上下文映射图</font>，可以清楚知晓运行逻辑。为了实现上下文映射，简单讲就是如何将两个上下文连贯起来，常借助的方式是<font color=red>诸如 RPC、HTTP、消息队列</font>等，依照上下文间映射类型，挑选一件趁手的工具

### 分层

<figure class="thumbnails">
    <img src="assets/img/ddd/level.jpg" style="width: 160px;height: 580px;" alt="Screenshot of content" title="Content">
</figure>

- User Interface 

?> 为用户界面层，向用户展示信息和传入用户命令。这里指的用户不单单只使用用户界面的人，也可能是外部系统，诸如用例中的参与者。

- Application  

?> 为应用层，用来协调应用的活动，不包含业务逻辑，通过编排领域模型，包括领域对象及领域服务，使它们互相协作。不保留业务对象的状态，但它保有应用任务的进度状态

- Domain 

?> 为领域层，负责表达业务概念，业务状态信息以及业务规则。尽管保存业务状态的技术细节是由基础设施层实现的，但是反映业务情况的状态是由本层控制并且使用的。领域层是业务软件的核心，领域模型位于这一层。

- Infrastructure 

?> 为基础实施层，提供公共的基础设施组件，如持久化机制、消息管道的读取写入、文件服务的读取写入、调用邮件服务、对外部系统的调用等等

## 战术设计
