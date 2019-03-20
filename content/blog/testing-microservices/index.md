---
title: Testing Microservices
date: "2019-03-20T22:12:03.284Z"
time: "7"
---

### Testing Microservices

A microservice architecture involves many moving parts with different guarantees
and failure modes, testing these systems is more challenging than testing
traditional monolithic application. an effective test strategy needs to account
for testing individual services in isolation and the verification of overall
system behaviour.

### What are microservices?

![](https://cdn-images-1.medium.com/max/1600/0*35CIX00OXWaVH57g.png)

There are two basic software development styles, first and most common style is
monolithic Application, it is called monolith because it consists of a single
application contained in a single process.

The microservices architectural style in the other hand involves developing
single applications that can work together with a suite of small autonomous
services, each running in its individual process and communicating using
lightweight mechanisms such as HTTP resource API. These services can be written
in different programming language and different data storage technologies, and
each of them can be deployed and scaled independently.

### Why do we test?

Do we ?! To code with confident like that, We need to write tests that verify
our code is running in a proper way, writing tests make code maintenance much
easier because you have what assure that your maintenance for one part won’t
affect other parts in a wrong way, also writing tests can provide us feedback
about the system if it is working properly in a fast, accurate way while you can
do this in a manual way, it will never be as accurate, fast as the automated
test cases.

Writing tests can give you detailed feedback about our code, automated coverage
report can tell us if the code is tested enough or not and which cases you
forget to test it.

### Different type of testing strategies

In microservice architecture, your system is built as suites of collaborating
services.

To verify that services work together in a harmony we had to write different
types of test strategies starting from basic unit tests that exercises the
smallest piece of testable software in the application to determine whether it
behaves as expected, to the End to End testing which verifies that a system
meets the external requirements and achieve its goals.

![](https://cdn-images-1.medium.com/max/1600/0*L7uyy4tWZ_LK9LIC.png)

the test pyramid helps us to identify different types of tests and when to use
each of them.

We use those different test strategies except the last one the exploratory,
which basically an automated regression testing that runs across the whole
system, but we hope to reach this level soon.

let’s go bottom up throw those strategies one by one.

Our Microservices usually contains different smaller modules (Repositories,
Service layer, Resources, Gateway, ORM. etc)

each module should have it’s independent **unit tests** that are verifying that
module working in a proper way independently.

### But why unit tests are not enough?

In microservice case unit tests alone is not enough because in our opinion it
doesn’t cover the whole system behaviours, as we said by unit tests we provide
good coverage of each core module of the microservice independently but there’s
no coverage for those modules when the work together as a system or as a
service, To verify that each module correctly interacts with its collaborators,
more testing is required.

### Integration testing

Integration testing is a testing strategy that we need to verify the interaction
between various microservice components and detect interface defects.

Integration testing collects modules together and tests them as a subsystem to
verify that they collaborate as they intended to achieve some larger piece of
interactions.

Also, it verifies that the communication paths between the system to check how
the subsystem interact with its peers.

In our microservices, we must write integration tests to verify those
interactions between layers of integration code and the external component that
we integrate with.

### Mocking vs Integration testing

In order for our microservices to do their job they need to communicate with
other services, so to test a microservice in isolation we need to mock other
dependencies so that the only thing under the test is the unit that we are
testing and when the test fails we can easily determine the issue.

Mocking is effective with unit tests, With that said, if integration tests are
not done properly, it will do more harm than good. Imagine if one of our
dependencies changed its API, our service test cases will still pass while they
should fail as they use the mock instead of making the real call, and another
downside is that you have to maintain these mocks as other services change.

### Component testing

First let’s define the component boundaries, in our opinion a component is any
well-encapsulated, coherent and independently replaceable part of a larger
system.

Component testing can provide us with a lot of benefits, by limiting all service
modules to be tested as one single component to avoid any complex behaviour that
service may have while connecting to another service.

Also isolating your modules as a single component with test doubles will define
the component behaviours and define tests for that behaviour together using
component tests.

### End-to-End tests

End-to-end tests run against your entire system to verify that all your system
parts are working together as expected, so when they pass you feel confident
that your code will work in production as expected because they test the entire
process and the user flow.

As end-to-end test scope increases the feedback cycle time increases as well
because tests take a longer time to run, and when a test fails it is hard to
determine which part is broken and here comes the role of other lower level
types of testing.

### Conclusion

High-level tests provide verification that the system works as expected and all
parts are connected together in a proper way, while low-level tests provide a
way to verify that each piece of code is doing its job correctly, and when it
doesn’t you will know accurately the reason.

The combination of different type of test strategies leads to more code coverage
that help you to find edge cases that we need to handle in our actual code.

#### This blog is written in collaboration with [Mohamed Ashour](http://www.linkedin.com/in/mohamed77)

