---
sidebar_position: 1
title: Modeling vs Drawing
description: What is difference between Modeling and Drawing, why ZenUML is the best tool for modeling?
keywords:
  - software architecture
  - SDLC
  - code to diagram
  - modeling
  - visualization
---

## Modeling vs Drawing

Many users are confusing the difference between diagramming or drawing tools such as Microsoft Visio and modeling tools such as ZenUML or Rational Software Architect. First, you need to understand that **a diagram is not a model**.

A model or software model is a description of an aspect of a software system such as structure, behavior, requirement, etc. A software model can be represented in textual or visual form.

A diagram is a visual geometric symbolic representation of a software model. A software model can be represented in one or more diagrams with different aspects. For example, sequence diagrams (a type of interaction diagram) focus on the interaction between objects. Diagrams consist of view elements, which are visual representations of a model element.

ZenUML is a language to describe your model. It is good at modeling interaction in a timeline. Let’s have a look at the following piece of ZenUML. Note that the diagram at the right is generated from the model on the left automatically with ZenUML code-to-diagram capability.

```zenuml title=RESTFul Service
// This is a model for the flow of a RESTFul Service
@Starter(Client)
// The client calls the `GetBook` API on the controller
BookController.GetBook(id) {
  // The controller in turn then calls the `Find` API on
  // BookService
  BookService.Find(id)
}
```

Upon completion, not only will you obtain the **visual** diagram displayed on the **right**, but, more critically, you'll also acquire the underlying **model** situated on the **left**.
