---
title: Software Components
date: "2019-04-06T22:12:03.284Z"
time: "4"
---


![](https://cdn-images-1.medium.com/max/1600/0*bnfIs_NW1Xz3P9r3)
<span class="figcaption_hack">Photo by
[Fancycrave](https://unsplash.com/@fancycrave?utm_source=medium&utm_medium=referral)
on [Unsplash](https://unsplash.com?utm_source=medium&utm_medium=referral)</span>

Components are the units of deployment, they are the smallest entity that can be
deployed as part of the system, In Java, they are Jar files, In Ruby, they are
gems files.

Components can be linked together into a single executable or they can be
independently deployed as separate plugins, regardless of how they have
eventually deployed well-designed components always retain the ability to be
independently deployed and developed.

*****

We will discuss a little how we can design a cohesive software component, we
will discuss **principles of components cohesion** which [uncle
bob](https://en.wikipedia.org/wiki/Robert_C._Martin) defined them in details in
his book [clean
architecture](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882).

* REP: Reuse-Release Equivalence principle.
* CCP: Common Closure Principle.
* CRP: Common Reuse Principle.

#### REP: Reuse-Release Equivalence Principle

> the granule of reuse is the granule of release.

To reuse a software component you can't do so unless that component tracked
through a release process and is given a release number because without a
release number there would be no way to ensure that all the reused components
that you're using are compatible with each other.

This principle means that the classes and modules that are formed into a
component must belong t a cohesive group. a software component can not consist
of random classes and modules there’s must be some overarching theme of purpose.


#### CCP: Common Closure Principle

> gather into component those classes that change for the same reason and at the
> same time separate into different components those classes that change at a
different time and for different reasons.

The CCP is the component form for the
[SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle), while the
[SRP](https://en.wikipedia.org/wiki/Single_responsibility_principle) tells us to
separate methods into different classes if they change for different reasons,
the CCP tells us to separate classes into different components if they change
for different reasons.

#### CRP: Common Reuse Principle

> Don’t force users of a component to depend on things they don’t need.

The CRP is a generic version of the
[ISP](https://en.wikipedia.org/wiki/Interface_segregation_principle), while the
[ISP](https://en.wikipedia.org/wiki/Interface_segregation_principle) advised us
not to depend on classes that have methods we don’t need the CRP advice us not
to use components that have classes we don’t need.

#### CONCLUSION

Finally, that was a very simple introduction to how to develop a cohesive
component, helping you to take the decision of which classes belong in which
components.

