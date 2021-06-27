## 简介 <!-- {docsify-ignore} -->
!> &emsp;&emsp;把这六个原则的首字母联合起来（两个 L 算做一个）就是 SOLID （solid，稳定的），其代表的含义就是这六个原则结合使用的好处：建立稳定、灵活、健壮的设计。下面我们来分别看一下这六大设计原则

[原文借鉴](https://www.jianshu.com/p/3268264ae581 ':target=_block github排行榜')    
## 单一职责原则
- 单一职责原则 (Single Responsibility Principle)   

!> &emsp;&emsp;一个类应该只有一个发生变化的原因,There should never be more than one reason for a class to change.
       
?> &emsp;&emsp;单一职责原则简称 SRP ，顾名思义，就是一个类只负责一个职责。那这个原则有什么用呢，它让类的职责更单一。这样的话，每个类只需要负责自己的那部分，类的复杂度就会降低。如果职责划分得很清楚，那么代码维护起来也更加容易。试想如果所有的功能都放在了一个类中，那么这个类就会变得非常臃肿，而且一旦出现bug，要在所有代码中去寻找；更改某一个地方，可能要改变整个代码的结构，想想都非常可怕。当然一般时候，没有人会去这么写的。
当然，这个原则不仅仅适用于类，对于接口和方法也适用，即一个接口/方法，只负责一件事，这样的话，接口就会变得简单，方法中的代码也会更少，易读，便于维护。
事实上，由于一些其他的因素影响，类的单一职责在项目中是很难保证的。通常，接口和方法的单一职责更容易实现     

## 开闭原则
- 开闭原则 ( Open Closed Principle）     

!> 软件中的对象（类，模块，函数等等）应该对于扩展是开放的，但是对于修改是封闭的”，这意味着一个实体是允许在不改变它的源代码的前提下变更它的行为。Software entities like classes, modules and functions should be open for extension but closed for modification  

?>  &emsp;&emsp;当软件需要变化时，尽量通过扩展软件实体的行为来实现变化，而不是通过修改已有的代码来实现。
    用抽象构建架构，用实现扩展细节。因为抽象灵活性好，适应性广，只要抽象的合理，可以基本保证架构的稳定。而软件中易变的细节，我们用从抽象派生的实现类来进行扩展，当软件需要发生变化时，我们只需要根据需求重新派生一个实现类来扩展就可以了，当然前提是抽象要合理，要对需求的变更有前瞻性和预见性。
## 里氏替换原则

- 里氏替换原则（Liskov Substitution Principle）

!> 里氏替换原则的意思是，所有基类在的地方，都可以换成子类，程序还可以正常运行。这个原则是与面向对象语言的继承特性密切相关的

## 迪米特法则
- 迪米特法则（Law of Demeter）

!> 如果两个软件实体无须直接通信，那么就不应当发生直接的相互调用，可以通过第三方转发该调用。其目的是降低类之间的耦合度，提高模块的相对独立性。

## 接口隔离原则

- 接口隔离原则（Interface Segregation Principle）

!> 客户端不应该依赖它不需要的接口。

?> 接口隔离原则和单一职责都是为了提高类的内聚性、降低它们之间的耦合性，体现了封装的思想，但两者是不同的

> 1. 单一职责原则注重的是职责，而接口隔离原则注重的是对接口依赖的隔离。

> 2. 单一职责原则主要是约束类，它针对的是程序中的实现和细节；接口隔离原则主要约束接口，主要针对抽象和程序整体框架的构建.

## 依赖倒置原则
- 依赖倒置原则（Dependence Inversion Principle）

?> 1. 上层模块不应该依赖底层模块，它们都应该依赖于抽象。High level modules should not depend upon low level modules. Both should depend upon abstractions.   
2. 抽象不应该依赖于细节，细节应该依赖于抽象。 Abstractions should not depend upon details. Details should depend upon abstractions.
