---
title: 'Journey with ZenUML: Crafting Intuitive Sequence Diagrams'
description: What is ZENUML's advantage on creating UML diagrams from decent codes, compare with PlantUML
slug: zenuml-makes-sequence-diagrams-easier-and-faster
authors: [xiaopeng]
tags: [UML Diagrams, ZenUML Comparison, PlantUML, Modeling, Syntax]
#image: https://i.imgur.com/mErPwqL.png
hide_table_of_contents: false
---

![](../../static/img/blog/2024/2024-01-01-06.jpeg)

# Journey with ZenUML: Crafting Intuitive Sequence Diagrams

Hello friends! Peng Xiao here, and I'm thrilled to share a project that's very close to my heart: [ZenUML](https://zenuml.com/). It's a [textual UML tool](https://modeling-languages.com/uml-tools/#textual) that's all about transforming simple markup text into clear and concise sequence diagrams. I'm proud to present it to you, and if you're curious about integrating it with your projects, stay tuned till the end!

<!-- truncate -->

![](../../static/img/blog/2024/2024-01-01-01.png)

## Why I Created ZenUML

So, you might wonder, "Why build another tool when there's [PlantUML](https://modeling-languages.com/interview-plantuml/)?" I've even faced suggestions to [throw in the towel](https://www.reddit.com/r/programming/comments/77d6jg/try_catch_in_sequence_diagram/doky2e3/) on this project. But here's the thing - ZenUML excels in simplicity and readability, especially when dealing with complex nested logic. Let's dive into the nuances of DSL, feedback mechanisms, and outputs to see how ZenUML stands out.

[Watch Video Of PlantUML Demo](../../static/img/blog/2024/2024-01-01-02-plantuml-cropped.m4v)

![ZenUML](../../static/img/blog/2024/2024-01-01-03-zenuml.gif)

## ZenUML's DSL: A Breath of Fresh Air

Back in 2006, when I started using sequence diagrams extensively, I went through a myriad of tools before stumbling upon a revelation. I needed a tool that lets me avoid the drag-and-drop hassle but also remains legible. PlantUML's DSL didn't cut it for me when things got complex. That's why I introduced curly braces `{}` in ZenUML - a familiar syntax for most developers.

Take a peek at how ZenUML makes a RESTful API implementation look:

![](../../static/img/blog/2024/2024-01-01-04.png)

For a full language reference, please go to [https://app.zenuml.com/help.html](https://app.zenuml.com/help.html).

### Comparing DSLs: PlantUML vs. ZenUML

I've prepared a side-by-side feature comparison for those who are accustomed to PlantUML. Note that ZenUML is currently focused only on sequence diagrams.

![](../../static/img/blog/2024/2024-01-01-05.01.png)
![](../../static/img/blog/2024/2024-01-01-05.02.png)
![](../../static/img/blog/2024/2024-01-01-05.03.png)
![](../../static/img/blog/2024/2024-01-01-05.04.png)

While PlantUML has its unique 'activate/deactivate' functionality, ZenUML stays ahead with its readability and opinionated approach, insisting on a valid model rather than just any drawing.

Here's a quick code comparison:

> PlantUML

```
@startuml
participant User
User -> A: MethodA
activate A
A -> B: MethodB
activate B
B -> C: MethodC
activate C
deactivate C
deactivate B
deactivate A
@enduml
```

> ZenUML

```
A.methodA() {
  B.methodB() {
   C.methodC()
  }
}
```

## Output: The ZenUML Difference

ZenUML takes an innovative approach to rendering diagrams, setting it apart from conventional tools. Here's how:

1. **Styling Freedom**: With ZenUML, diagrams are presented as HTML DOM elements, giving you the creative freedom to apply custom styles. You can change colors, borders, fonts, and even implement handwritten styles to make your diagrams uniquely yours.

2. **Image Conversion**: Even though the output is in HTML, you can still generate images from your diagrams. This functionality is seamlessly supported within the [ZenUML Chrome Extension](https://chrome.google.com/webstore/detail/web-sequence/kcpganeflmhffnlofpdmcjklmdpbbmef).

3. **Searchable Content**: Since the output is text-based, searching through participant names and messages within the diagrams is a breeze. Plus, if you embed these diagrams into other documents, they become fully indexable, enhancing accessibility and integration.

## Instantaneous Feedback: Real-Time Visualization

ZenUML revolutionizes the way you see changes to your sequence diagrams:

- **No Waiting**: Forget about clicking a 'Submit' or 'Refresh' button. ZenUML updates your diagram instantly with each keystroke. It's all about efficiency and speed, with no backend server calls delaying your progress.
- **Live Preview**: As you type your DSL in ZenUML, you see the diagram take shape in real-time. This immediate feedback loop allows for a fluid and intuitive design experience.
- **Optimized Rendering**: Powered by [VueJs](https://vuejs.org/), ZenUML smartly updates only what's new or changed. Unlike tools that re-render the entire diagram with every edit, ZenUML focuses on the alterations, ensuring a distraction-free environment.

## A Stroll Down Memory Lane: ZenUML's Origins

Let's take a moment to rewind the clock and share a bit of the story behind ZenUML. It all started in 2010, amidst the creative buzz of the first HTML5/CSS/JS competition at ThoughtWorks China. That's where the first lines of code for ZenUML were written, originally as a canvas-based tool.

Fast-forward to today, and you can see how those humble beginnings have blossomed. ZenUML has grown up, and the source code for this labor of love is now openly shared on GitHub. Check out the [website's repository](https://zenuml.github.io/) and the [Chrome Extension's repository](https://github.com/ZenUml/web-sequence) to see how far we've come. Your thoughts and contributions are not just welcome—they're eagerly awaited!

Come join me on this journey of continuous improvement and innovation. Together, let's make sequence diagrams something to get excited about!

## Bring ZenUML into Your Workflow

Are you ready to give your projects a boost with intuitive sequence diagrams? Integrating ZenUML into your web applications is a walk in the park, and I've got just the tools to help you get started!

Dive right in with our handy [demo project on GitHub](https://github.com/ZenUml/demo) and experience the simplicity and power of ZenUML first-hand. And don't worry—if you hit a bump along the way or just want to chat about possibilities, my inbox is always open. Drop me a line at eagle.xiao(at)gmail.com, and let's talk about elevating your project together.

With ZenUML, you're not just getting a tool; you're unlocking a more efficient, stylish, and engaging way to communicate complex ideas. So why wait? Let's make your workflows shine with ZenUML!
