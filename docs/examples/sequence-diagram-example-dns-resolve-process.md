---
sidebar_position: 5
title: 'Unraveling the DNS Resolution Process: How Your Device Finds the Right IP'
#sidebar_label: Quick Start
#pagination_label: Quick Start
description: Explore the step-by-step process of DNS resolution, including cache checks, local hosts file verification, and querying root DNS servers. Learn how your device locates the IP address it needs to connect to websites efficiently.
keywords:
  - DNS Resolution Process
  - Stub Resolver
  - Local DNS Cache
  - DNS Server Configuration
  - Preferred DNS Server Query
  - Root DNS Server
  - IP Address Retrieval
---

## Overview of DNS resolution process

1. **Start DNS Resolution Process**

   - The process begins with a Stub Resolver.

2. **Local DNS Cache Check**

   - Stub Resolver checks the local DNS client cache.
     - If there's a cache hit, the cached result is used.

3. **Check Local Hosts File (Optional)**

   - Stub Resolver checks the `/etc/hosts` file.
     - If an entry is found, that result is used.

4. **Use Specified DNS Server**

   - Stub Resolver uses the DNS server specified in `/etc/resolv.conf`.

5. **Send Query to Preferred DNS Server**

   - Stub Resolver sends a query to the preferred DNS server.

6. **Query Other Configured DNS Servers (Optional)**

   - If the preferred DNS server does not return a result, other configured DNS servers are queried.

7. **Query Root DNS Server (If Necessary)**

   - If no result is obtained from any configured DNS servers, the preferred DNS server queries the Root DNS Server.

8. **Receive Final IP Address**
   - The Root DNS Server returns the result to the preferred DNS server, which then sends the final IP address to the Stub Resolver.

The optional steps indicate actions that may be skipped depending on whether previous steps have resolved the DNS query.

# The Code

The above diagram is generated from the following code:

```zenuml title:DNS Resolution Process
// Define participants
@Client "Stub Resolver"
@Cache "Local DNS Cache"
@Hosts "/etc/hosts"
@Resolv "/etc/resolv.conf"
@Recursive "Recursive DNS Server"
@Root "Root DNS Server"

// Stub Resolver checks the local DNS client cache
"Stub Resolver" -> "Local DNS Cache": Check cache
opt{
  @return "Local DNS Cache" -> "Stub Resolver": Cache hit
}

// Stub Resolver checks the /etc/hosts file
"Stub Resolver" -> "/etc/hosts": Check /etc/hosts
opt{
  @return "/etc/hosts" -> "Stub Resolver": Entry found
}

// Stub Resolver uses the DNS server specified in /etc/resolv.conf
"Stub Resolver" -> "/etc/resolv.conf": Use specified DNS server
opt{
  // Stub Resolver sends a query to the preferred DNS server
  "Stub Resolver" -> "Recursive DNS Server": Send query to preferred DNS server
  opt{
    // Preferred DNS server asks other configured DNS servers in sequence
    "Recursive DNS Server" -> "Recursive DNS Server": Ask other configured DNS servers
    opt{
      @return "Recursive DNS Server" -> "Recursive DNS Server": No result
    }
    // Preferred DNS server queries the Root DNS Server
    "Recursive DNS Server" -> "Root DNS Server": Query Root DNS Server
    @return "Root DNS Server" -> "Recursive DNS Server": Return result
  }
  @return "Recursive DNS Server" -> "Stub Resolver": Final IP address
}
```
