---
sidebar_position: 6
title: Condition Alt
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: ZenUML Syntax - Condition Alt
keywords:
  - Unified Modeling Language
  - Condition Syntax
  - If Else Condition
  - UML diagram
#slug: /quick-start
---

# Condition Atl

## Condition Definition

The alt operand symbolizes a selection between different behaviors, where only one path is taken at any instance. This conditional logic is represented by the following constructs:

```
if (condition1) {
  ...
} else if (condition2) {
  ...
} else {
  ...
}
```

See the example below:

```zenuml title=Atl
if (x) {
  A.m1()
} else if (y) {
  A.m2()
} else {
  A.m3()
}
```
