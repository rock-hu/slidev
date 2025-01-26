---
layout: two-cols-header 
title: sharding  
zoom: 0.6   
disabled: false 
hide: false 
hideInToc: false    
preload: true   
---
# sharding

::left::    
Sharding is a database architecture pattern related to horizontal partitioning — the practice of separating one table’s rows into multiple different tables, known as partitions. Each partition has the same schema and columns, but also entirely different rows. Likewise, the data held in each is unique and independent of the data held in other partitions.

It can be helpful to think of horizontal partitioning in terms of how it relates to vertical partitioning. In a vertically-partitioned table, entire columns are separated out and put into new, distinct tables. The data held within one vertical partition is independent from the data in all the others, and each holds both distinct rows and columns.

- Key Based Sharding  
  also known as hash based sharding, involves using a value taken from newly written data — such as a customer’s ID number, a client application’s IP address, a ZIP code, etc. — and plugging it into a hash function to determine which shard the data should go to. A hash function is a function that takes as input a piece of data (for example, a customer email) and outputs a discrete value, known as a hash value. In the case of sharding, the hash value is a shard ID used to determine which shard the incoming data will be stored on.

- Range Based Sharding  
  involves sharding data based on ranges of a given value. To illustrate, let’s say you have a database that stores information about all the products within a retailer’s catalog.

- Directory Based Sharding  
  one must create and maintain a lookup table that uses a shard key to keep track of which shard holds which data. A lookup table is a table that holds a static set of information about where specific data can be found.

::right::

<img src="/images/sharding.png"  />
