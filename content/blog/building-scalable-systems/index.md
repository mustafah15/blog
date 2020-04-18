---
title: Building Scalable Systems
date: "2020-04-16T22:12:03.284Z"
time: "12"
---

# Building Scalable Systems

This blog some shattered notes we should consider while studying about how to build scalable distributed system before we dive into let's start with some definitions as they are the main characteristics of any distributed system

## **Definitions**

- **scalability**: a system if it can meet an increase in demand while remaining responsive.
- **consistency**: a system is consistent if all members of the system have the same state.
- **availability**: a system consider available if it remains responsive despite any failures.

## **Understanding Scalability**

### **Performance VS Scalability**

**performance** optimize response time.

improving performance speeds up response time but the total number of requests may not change.

**scalability** optimize the ability to handle the load.

improving scalability increases the ability to handle the load but the performance of each request may not change.

## **Consistency In Distributed Systems**

distributed systems are separated by space there's a limit on information speed, it takes time to transfer the information, the state of the original sender may have changed, This means the receiver of on the information is always dealing with a stale data.

### **Eventual Consistency**

Eventual consistency garnets that in absence of new updates, all access to a specific piece of data will eventually return the most recent value.

Eventual consistent models break down into many different forms

- eventual consistent
- sequential consistent
- casual consistent

### **Strong Consistency**

Strong consistency garnets that an update to a piece of data needs an agreement from all nodes before it becomes visible.

we can apply strong consistency by using a non distributed system as lock to our data that lock has the data only and the whole distributed system read from it.

that comes at a cost, It affects our availability to recline to be elastic as this becomes a point of contention in the system.

### **Effect of contention**

Any two things that content for a single limited resource are in contention, this contention can only have one winner.

other forced to wait for the winner to complete, as the number of things competing for increases the time to free up resources increases and eventually exceed acceptable time.

### **Amdahl's Law**

The low defines the maximum improvements gained by parallel processing.

- Improvements from parallel processing are limited to the code that can be parallelized.
- contention limits parallelization and their fore reduces the improvements.

### **The Effect Of The Coherency Delay**

In distributed systems synchronizing the state of multiple nodes is done using cross talks, Each node in the system will send message to other nodes informing them of any state change.

The time it takes for synchronization to complete is called Coherency Delay.

increasing the number of nodes increases the delay

### **Gunther’s Universal Law**

Gunther’s law builds on Amdahl’s law, in addition of contention if accounts for coherency delay, Coherence delay result in negative returns as the system scale-up, as the cost to coordinate between nodes extends any benefits from scaling up

### **linear scalability**

Both Amdahl's and Gunther's law demonstrate linear scalability is almost unachievable.

linear scalability requires total isolation, reactive systems understand the limitation imposed by these laws and accept them rather than avoiding them.

## **Scalability In Reactive Micro-services**

Reactive systems reduce contention by:

- isolating locks
- avoid blocking operations

They mitigate coherency delay by

- Embracing eventual consistency
- Building in Autonomy

this allows for higher scalability by reducing or eliminating things that prevent scalability

### **Sharding For Strong Consistency**

- sharding partition entities in the domain according to their id, where a group of entities are called a shard, each entity exists in only one shard.
- Because each entity lives in only one location we eliminate the distributed system problem **contention.**
- Routing message to sharded entities, A coordinator ensure traffic for a particular entity is routed to the correct shard

**Contention In Sharded systems**

- sharding doesn't eliminate contention, it isolates it, with a single entity there's a convention.
- the router represents a source of contention as well, but A sharded system minimizes contention by
    - limiting the amount of work the router performs.
    - isolating contention to individual entities.
- scalability is achieved by distributing the shards over more machines
- strong consistency is achieved by isolating operation to a specific entity
- carful choice of the shared key is important to maintain good scalability

Sharding is a CP solution, therefore it sacrifices availability if a shard goes down there is a period of time where it's unavailable, the shard will migrate to another node eventually

**Caching with Shards**

caching is problematic in distributed systems, how do you maintain cache consistency with multiple writers? sharding allows each entity to maintain cache consistency the cache is unique to that entity

### **Conflict free Replicated Data types CRDTs**

CRDTs are specially designed datatypes they are highly available and eventually consistent as a data store in multiple replicas for availability

A replica updates are applied on one replica and then copied asynchronously updates are merged to determine to find state.

CRDTs are a solution for availability, there are two types of CRDTs

→ CVRDT: Convergent Replicated Data Types

copy state between replicate, so it requires a merge operation that understands how to combine two states, so merge operation must be

- communicative: can be applied in any order
- associative: can be grouped by any order
- idempotent: duplicated operations don’t change the result

→ CMRDT: Communicative Replicated Data Types

copy operations between replicas

**The effect of CRDTs**

CRDTs in distributed data is stored in memory

That requires the entire structure fit into the memory, they can be copied to disk as well that speeds up recovery if replica fails but during normal operation all data still in the memory