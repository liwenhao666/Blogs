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

?> 对于领域这个概念，习惯性会想到制药领域、环境领域、金融领域等这些概念，而领域本身所描述的是范围，是如同现实世界般的复杂，无边际。借助分治法，将问题逐级细分来降低业务和技术复杂度，将这复杂的世界划分出清晰的边界来，反过来控制着划分后不那么复杂的世界，也既领域拆分出细化后的子领域。

- 子域拆分

?> 在实际解决问题时，我们也习惯将问题拆分，而怎么拆，基于什么原则拆，可能会依据相关性，权重，甚至分类原则等，对于系统而言，会从架构方面考虑，基础设施考虑等，在领域驱动设计中，更偏向基于业务拆分，降低业务复杂度，也分离技术实现的复杂度，依照业务拆分后的子领域，本身存在权重上的差异，依照重要性和功能划分为三类，投资占比也就有所不同。

<figure class="thumbnails">
    <img src="assets/img/ddd/domain-division.jpg" style="width: 160px;height: 580px;" alt="Screenshot of content" title="Content">
    <img src="assets/img/ddd/domain-div-sub.jpg" style="width: 160px;height: 580px;" alt="Screenshot of content" title="Content">
</figure>

### 3. 界限上下文

?> 深入到一个子域中，又是一片小天地，在这天地中，却又还是存在着因语义与语境上的差异，让一些概念在这子域中显得额外尴尬。在一个领域 / 子域中，我们会创建一个概念上的领域边界，在这个边界中，任何领域对象都只表示特定于该边界内部的确切含义。这样边界便称为限界上下文。

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
