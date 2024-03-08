---
sidebar_position: 3
title: TCP Handshake in Sequence Diagram
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: A example of how to use sequence diagram to present tcp handshake.
keywords:
  - sequence diagram example
  - TCP Handshake
  - Software architecture
  - Process Modeling
---

## Step 1: SYN (Synchronize)

The first step of the TCP handshake is the SYN (Synchronize) packet. It is initiated by the client and serves as a request to establish a connection with the server. The client sets the SYN flag in the TCP header, indicating its intention to synchronize sequence numbers and initiate communication.

During this step, the client selects an initial sequence number (ISN) and includes it in the SYN packet. The ISN is a randomly generated number that helps prevent sequence number prediction attacks. The client also includes other TCP header fields, such as source and destination ports, window size, and other control flags.

## Step 2: SYN-ACK (Synchronize-Acknowledge)

Upon receiving the SYN packet from the client, the server responds with a SYN-ACK (Synchronize-Acknowledge) packet. This packet acknowledges the client's request to establish a connection and also includes the server's own initial sequence number (ISN).

In the SYN-ACK packet, the server sets the SYN and ACK flags in the TCP header, indicating that it has received the client's SYN packet and is ready to synchronize sequence numbers. The server also includes other TCP header fields, such as source and destination ports, window size, and control flags.

## Step 3: ACK (Acknowledge)

The final step of the TCP handshake is the ACK (Acknowledge) packet. Upon receiving the SYN-ACK packet from the server, the client sends an ACK packet to acknowledge the server's response. The ACK packet confirms the successful establishment of the connection and indicates that both devices are ready to exchange data.

In the ACK packet, the client sets the ACK flag in the TCP header and includes the next sequence number it expects to receive from the server. This sequence number is one greater than the ISN sent in the SYN packet.

## The Code

The above diagram is generated from the following code:

```zenuml title=TCP Handshake
// Define participants
@Client "Client"
@Server "Server"

// Step 1
"Client" -> "Server".SYN(){
  // Step 2
  @return "Server"->"Client": SYN-ACK
}

// Step 3
"Client" -> "Server": ACK
```
