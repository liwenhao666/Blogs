## 设计模式简介 <!-- {docsify-ignore-all} -->

[设计模式](https://www.runoob.com/design-pattern/design-pattern-tutorial.html ':crossorgin')  
- 每日一种设计模式

?> &emsp;&emsp;设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的**一段时间的试验和错误**总结出来的!     
&emsp;&emsp;设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结。
- **为什么要使用设计模式**

?>  使用设计模式是为了**重用代码、让代码更容易被他人理解、保证代码可靠性**。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使**代码编制真正工程化**，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式**可以完美地解决很多问题**，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

### 设计模式类型

?> 根据设计模式的参考书 Design Patterns - Elements of Reusable Object-Oriented Software（中文译名：设计模式 - 可复用的面向对象软件元素） 中所提到的，总共有 23 种设计模式。这些模式可以分为三大类：创建型模式（Creational Patterns）、结构型模式（Structural Patterns）、行为型模式（Behavioral Patterns）。当然，我们还会讨论另一类设计模式：J2EE 设计模式。
#### 创建型模式

?> 这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活。

```mermaid
        graph LR;
        创建型模式-->工厂模式Factory-Pattern
        创建型模式-->抽象工厂模式Abstract-Factory-Pattern
        创建型模式-->单例模式Singleton-Pattern
        创建型模式-->建造者模式Builder-Pattern
        创建型模式-->原型模式Prototype-Pattern
```
#### 结构型模式

#### 行为型模式