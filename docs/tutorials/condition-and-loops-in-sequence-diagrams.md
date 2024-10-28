---
sidebar_position: 4
title: 'Advanced Uses of Sequence Diagrams: Conditions and Loops'
sidebar_label: 'Advanced: Conditions and Loops'
pagination_label: 'Advanced: Conditions and Loops'
description: 'Advanced Uses of Sequence Diagrams: Conditions and Loops'
keywords:
  - elements in sequence diagram
  - sequence diagram guide
  - participant
  - life lines
  - UML
  - ZenUML Example
#slug: /quick-start
---

![](../../static/img/docs/tutorials/04-condition-loops.jpeg)

## Advanced Uses of Sequence Diagrams: Conditions and Loops

Welcome back to our series on UML Sequence Diagrams! In our previous posts, we've walked through the basics of sequence diagrams and how they can help us visualize the interactions between objects in our system. Today, we're going to kick it up a notch and explore how to represent conditional logic (like if-else statements) and loops (for, while) in sequence diagrams. We'll also dive into the intriguing world of combined fragments such as `alt`, `opt`, `loop`, and `break`.

### Conditionals in Sequence Diagrams

When coding, conditional logic is instrumental in controlling the flow of execution. The same need to represent decision-making processes arises in sequence diagrams. But how do we illustrate an "if this, then that" scenario in a sequence diagram?

Enter the `alt` fragment. The `alt` fragment is used to represent alternative paths; it's the UML equivalent of an if-else statement. Here's how you use it:

- Draw a rectangle called a combined fragment and label it with `alt`.
- Divide the rectangle into sections for each alternative path.
- Each section represents a branch of execution, and you annotate it with a guard condition.

The guard condition is a boolean expression that shows when the branch should be taken. Only when the condition is true does the sequence of events within that partition occur.

In ZenUML, you can create conditional interactions using exact same way you do in your program languages.

```zenuml title=condition if
if (x) {
  A.m1()
} else if (y) {
  A.m2()
} else {
  A.m3()
}
```

And yes, we have try/catch/finally to make it even more programming like.

```zenuml title=try catch finally
try { A -> B}
catch {
    new Error
}
finally {
    A.close()
}
```

### Loops in Sequence Diagrams

Loops are another fundamental building block in programming. We use them to repeat actions until a certain condition is met. In sequence diagrams, this is where the `loop` fragment comes into play.

To depict a loop:

- You'll use a `loop` combined fragment.
- Label it with the loop condition.
- Inside the loop fragment, show the interactions that repeat.

The loop condition is checked before each iteration, and the sequence of interactions within the loop is repeated as long as the condition holds true.

In ZenUML, you can use either `while` or `for` or `forEach` to create a looping logic for your interactions.

```title=Example Code
while(condition) {}
for(enumerator) {}
forEach(enumerator) {}
```

```zenuml title=Loop
loop("Every minute") {
  Alice->Bob: Great!
}
```

### Other Useful Fragments

- The `opt` fragment is perfect for optional behavior that happens only if a certain condition is true (think of it as an if without an else).
- The `par` fragment is used to represent parallel processing activities. When you have two or more processes that can occur independently and simultaneously, you would use the par fragment to denote that these processes are concurrent.
- The `break` fragment allows you to show a premature exit from a loop or sequence based on a condition.

```zenuml title=opt and par
opt {
  A.method
}

par {
  A.method1
  B.method2
}
```

At this moment, ZenUML does not support `break`. Let us know if you want to request this.

### Conclusion

By leveraging these combined fragments, we can accurately model complex control flows in our sequence diagrams, which brings us much closer to the real-world logic our systems will execute.

Stay tuned for our next article, happy diagramming!
