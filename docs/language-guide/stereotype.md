---
sidebar_position: 3
title: Participant Stereotypes
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: ZenUML Syntax - Participant Stereotypes
keywords:
  - zenuml
  - uml diagram
  - participant
  - diagram as code
#slug: /quick-start
---

# Stereotypes

## Use Stereotypes

> It is possible to add stereotypes to participants using \<\< and \>\>.

```zenuml title=Stereotypes
<<Callable>> B
<<Service>> A
A.method()
A->B: Event
```
