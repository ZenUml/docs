---
sidebar_position: 2
title: Sequence Diagram - Business Process Improvement
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: Reengineering product launch processes through cross-functional collaboration, clear criteria, decoupling components, and workflow automation can reduce time-to-market by 40-60%
keywords:
  - Sequence diagrams
  - Business Process Model
  - Business Process reengineering
  - Sequence Diagram Example
  - Cross-functional collaboration
  - Decoupled components
  - Parallel reviews
  - Workflow automation
---

# Sequence Diagram - Business Process Improvement

## Product Launch Process Description

The new product launch approval process involves four participants with different business roles: the Product Manager, the Marketing Manager, the Finance Manager, and the Legal Counsel. The goal of this process is to ensure that a new product is thoroughly vetted and approved before it is launched in the market.

This business process modelled using sequence diagram as below:

```zenuml title=Product Launch Process
"Product"

new "Marketing"()


Product -> Marketing.Review(newProposal){
  Marketing -> Product:RequestAmendment
  Product -> Marketing:Review(updatedProposal)
  return Approval
}

new Finance()

Product -> Finance.Review(newProposal){
  Finance -> Product:RequestAmendment
  Product -> Finance:Review(updatedProposal)
  return Approval
}

new Legal()

Product -> Legal.Review(newProposal){
  Legal -> Product:RequestAmendment
  Product -> Legal:Review(updatedProposal)
  return Approval
}
```

## Product Launch Process After process re-engineering

To improve the new product launch approval process, companies need to **reengineer their processes** to make them more efficient and effective. This requires the support functions teams to **re-define the approval criteria** and **key information required** from the product teams.

```zenuml title=Product Launch Process Enhanced
Product.DecoupleProduct(newProposal)

par{
  Product -> Marketing:Review(newProposal.Marketing)
  Product -> Finance:Review(newProposal.Finance)
  Product -> Legal:Review(newProposal.Legal)

  Marketing -> Product:Finalize(newProposal.Marketing)
  Finance -> Product:Finalize(newProposal.Finance)
  Legal -> Product:Finalize(newProposal.Legal)
}

Product.FinalizeProduct(Marketing, Finance, Legal)
```

## Find more details

> Try ZenUML now!

[![ZenUML: The Best Diagram Plugin for Confluence](../../static/img/og-image.png)](https://app.zenuml.com)

> Find our more on [Real Life Case: Business Process Reengineering Using Sequence Diagram](/blog/2024/02/18/2024/example-process-reengineering-using-sequence-diagram)

> Zenuml detailed feature roadmap available [here](/roadmap).
