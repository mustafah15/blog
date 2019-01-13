---
title: Notes on building microservices!
date: "2018-08-01T22:12:03.284Z"
---

# Notes on building microservices | part one

![](https://cdn-images-1.medium.com/max/1440/1*3JKJYR37PS9JMy1gGIi0fw.jpeg)

The idea of separating application into a smaller parts is nothing new, there
are other programming paradigms which address this same concept However, recent
technology advances coupled with an increasing expectation of integrated
“digital experiences” have given rise to a new breed of development tools and
techniques used to meet the needs of modern business applications.

### What Are Microservices?

**A small autonomous services that works together**

that not detailed definition let’s discuss it more

**Small** and focused on doing one thing well, when it comes to how small is
small enough the smaller the service the more you maximize the benefits and the
down sides of microservices, in a monolithic codebase it can be difficult to
know where a change needs to be made because the codebase getting larger
overtime, so we keep trying to ensuere code quality by creating abstraction or
modules the drive to have related code grouped together is an important concept
this comes to single responsibility principles, that’s why we focus our services
boundaries on business boundaries making it obvious where code lives for a given
piece of functionality where the service focused on an explicit boundaries.

**Autonomous, **it means that the microservice is a separated entity that might
be deployed as an isolated service on platform or it might has it’s own
operation system process.

### **Key benefits from Microservices architecture**

* **Technology Heterogeneity**: with system composed of multiple service we can
decide to use different technologies inside each one.
* **Resilience**: if one of system component failed you can isolate it and your
system should operate normally.
* **Scaling**: with a large monolithic app you must scale everything as one piece
on the other hand with a small services you can just scale that small service
that needs a scaling.
* **Ease of deployment**: with microservices you can change to an single service
and deploy it independently of the rest of the system this means faster
deployment, lower risk than deployment in a monolithic app which means a
one-line change requires the whole system to be deployed in order to release the
change.
* **Organizational alignment: **microservices helps you to have better align our
architecture to your organization, by minimizing the number of people working on
any one codebase to hit the sweet spot of team size and productivity.
* **Optimizing for replaceability: **with our individual services being small in
size the cost to replace them with a better implementation is much easier to
mange.

This blog is my notes on chapter 1 from [Building microservices book for sam
newman](http://shop.oreilly.com/product/0636920033158.do) and it’s a part of my
blog series discuss microservice architecture.
