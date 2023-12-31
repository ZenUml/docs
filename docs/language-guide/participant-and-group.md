---
sidebar_position: 1
title: Participant and Group
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: ZenUML Syntax - Participant and Group
keywords:
  - zenuml
  - uml diagram
  - participant
  - diagram as code
#slug: /quick-start
---

# Participant

## Participant Definition

Participants are the message senders. The participants can be defined implicitly as in the example.

```zenuml title=Participant Definition
A
B
```

## Manipulate Participant Order

Participants are presented according to the sequence of their introduction within the diagram's source code. However, there may be instances where a different arrangement is preferred over the one initially depicted by their first mention. To accommodate this, one can explicitly define the order of appearance for the participants by adhering to the steps outlined below:

```zenuml title=Participant Order
B
A
A.method()
A->B: Event
```

## Participant Group

We can group the participants with **group** keyword.

```zenuml title=Participant
group GroupName {
  A
  B
}
C
```
