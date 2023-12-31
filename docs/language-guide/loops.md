---
sidebar_position: 5
title: Loops
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: ZenUML Syntax - Loops
keywords:
  - Unified Modeling Language
  - while for foreach
  - syntax loop
  - loop notation uml
#slug: /quick-start
---

# Loops

## Loop Definition

The loop operand is designed to execute repetitively for a specified number of iterations, as denoted by the following notation:

```
while(condition) {}
for(enumerator) {}
forEach(enumerator) {}
```

See the example below:

```zenuml title=Loops
loop("Every minute") {
  Alice->Bob: Great!
}
```
