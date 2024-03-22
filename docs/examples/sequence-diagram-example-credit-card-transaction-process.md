---
sidebar_position: 4
title: 'Navigating the Network - The Journey of a Credit Card Transaction'
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: Learn how credit card transactions are securely processed through a network involving issuing banks, credit card networks, and merchants. Understand the steps from purchase to settlement for optimized payment processing.
keywords:
  - Credit Card Processing
  - Payment Networks
  - Secure Transactions
  - Merchant Acquiring Bank
  - Issuing Bank
  - POS Systems
  - Credit Card Networks
  - Transaction Settlement
  - Authorization Response
  - Interchange Fees
---

## Overview of how the credit card payment network processes a transaction

Credit card transactions are processed through a complex network that involves multiple parties and steps to ensure secure and accurate processing. Here's an overview of how the credit card payment network processes a transaction:

1. **Cardholder Makes a Purchase**: The process begins when a cardholder swipes, inserts (chip card), taps (contactless), or enters their credit card details (for online purchases) at a merchant's point-of-sale (POS) system or online checkout.

2. **Merchant's POS System**: The POS system captures the credit card information and the amount of the transaction. This data is encrypted and sent to the merchant's acquiring bank or payment processor.

3. **Acquiring Bank/Payment Processor**: The acquiring bank or processor forwards the transaction details to the credit card network (such as Visa, MasterCard, American Express, or Discover).

4. **Credit Card Network**: The credit card network routes the transaction information to the cardholder's issuing bank for authorization.

5. **Issuing Bank**: The issuing bank receives the authorization request and verifies several factors, such as the cardholder's account status, credit limit, and whether the transaction is legitimate. It then approves or declines the transaction.

6. **Authorization Response**: The issuing bank sends the authorization response (approval or decline) back through the credit card network to the merchant's acquiring bank or processor.

7. **Merchant Notification**: The acquiring bank or processor forwards the authorization response to the merchant's POS system.

8. **Transaction Approval**: If approved, the transaction is completed; the cardholder receives a receipt, and the merchant provides the goods or services. The POS system stores the approved transactions as a batch for later settlement.

9. **Batch Settlement**: At the end of the business day, the merchant sends the batch of approved transactions through their acquiring bank or processor to the credit card network for settlement.

10. **Interchange**: During settlement, the credit card network manages the interchange process, where funds are transferred from the issuing bank to the acquiring bank. The issuing bank charges the cardholder's account for the purchase amount.

11. **Merchant Payment**: After deducting interchange fees and any other applicable fees, the acquiring bank deposits the net transaction amount into the merchant's account. This typically occurs within a few days of the original transaction.

12. **Cardholder Billing**: The cardholder is billed for the transaction when they receive their credit card statement. They must then pay their credit card bill according to the terms of their card agreement.

Throughout this process, security measures such as encryption, tokenization, and fraud monitoring systems are used to protect against unauthorized transactions and data breaches. The speed at which these steps occur makes it seem instantaneous to the customer and merchant, but behind the scenes, a highly coordinated system is at work to ensure the smooth processing of credit card transactions.

# The Code

The above diagram is generated from the following code:

```zenuml title=The Journey of a Credit Card Transaction
@Cardholder "Cardholder"
@POS "POS"
@AcquiringBank "AcquiringBank"
@CreditCardNetwork "CreditCardNetwork"
@IssuingBank "IssuingBank"
@Merchant "Merchant"

// Cardholder Makes a Purchase
"Cardholder" -> "POS": Swipes/Inserts/Taps/Enters Card Details

// Merchant's POS System
"POS" -> "AcquiringBank": Encrypts and Sends Transaction Data

// Acquiring Bank/Payment Processor
"AcquiringBank" -> "CreditCardNetwork": Forwards Transaction Details

// Credit Card Network
"CreditCardNetwork" -> "IssuingBank": RoutesAuthorization

// Issuing Bank
@return "IssuingBank" -> "CreditCardNetwork": Authorization Response

// Merchant Notification
@return "CreditCardNetwork" -> "AcquiringBank": Authorization Response

@return "AcquiringBank" -> "POS": Authorization Response

// Transaction Approval
if(Approved) {
  "POS" -> "Cardholder": Provides Receipt
  "POS" -> "Merchant": Stores Approved Transactions
}

// Batch Settlement
"Merchant" -> "AcquiringBank": Sends Batch of Transactions
"AcquiringBank" -> "CreditCardNetwork": For Settlement

// Interchange
"CreditCardNetwork" -> "IssuingBank": Manages Interchange
@return "IssuingBank" -> "CreditCardNetwork": Transfer Funds

// Merchant Payment
@return "CreditCardNetwork" -> "AcquiringBank": Transfer Funds Minus Fees
"AcquiringBank" -> "Merchant": Deposits Net Amount

// Cardholder Billing
"IssuingBank" -> "Cardholder": Bills for Transaction
```
