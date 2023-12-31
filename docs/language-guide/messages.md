---
sidebar_position: 4
title: Messages
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: ZenUML Syntax - Messages
keywords:
  - Unified Modeling Language
  - uml messages
  - async
  - sync
#slug: /quick-start
---

# Messages

## Message Definition

A message is shown as a line from the sender MessageEnd to the receiver MessageEnd.

> See Unified Modeling Language v2.5.1, section 17.4.4.1.

| Message type    | DSL                                                        | Line and arrowhead (Spec)                                                                       | Visualization                              |
| --------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------ |
| Async           | A->B: Async message                                        | solid line with open arrowhead                                                                  | ![](../../static/img/docs/lang-async.png)  |
| Sync            | A.method()                                                 | filled arrowhead                                                                                | ![](../../static/img/docs/lang-sync.png)   |
| Reply           | ret = A.method <br/>return ret <br/> @return A->B: message | dashed line with either an open or filled arrowhead <br/>\* ZenUML renderer use open arrowhead. | ![](../../static/img/docs/lang-reply.png)  |
| Object creation | new ClassName()                                            | dashed line with an open arrowhead                                                              | ![](../../static/img/docs/lang-create.png) |
