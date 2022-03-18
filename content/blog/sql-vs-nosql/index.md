---
title: SQL VS NOSQL In Nutshell
date: '2019-11-03T22:12:03.284Z'
time: '4'
tags: ['lorem', 'ipsum']
---

Both of them differ in the way they were build, the kind of information they store, and the storage method they use.

Relational databases are structured and have predefined schemas like phone books that store phone numbers and addresses. Non-relational databases are unstructured, distributed and have a dynamic schemas like file folders that hold everything from a person's address and phone number to their facebook likes and online shopping preferences.

### SQL

Relational databases store data in rows and columns. Each row contains all the information about one entity and each column contains all the separate data points.

### NoSQL

the most common type of NoSQL

- **key value stores**: where data is stored in an array of key value pairs
- **Document Databases:** in these data bases, data is stored in documents instead of rows and columns in a table and these documents are grouped together in collections. Each document can have an entirely different structure. for example mongodb and couchdb
- **Wide-Column Databases:** instead of tables in regular databases we have column families, which are containers for rows. unlike relational databases, we don't need to know all the columns in the front and each row doesn't have to have the same number of columns. columnar databases are best suited for analyzing large datasets for example Cassandra and Hbase.
- **Graph Databases:** these databases are used to store data whose relation are the best represented in a graph. where data saved in graph structure with nodes properties, and lines, for example Neo4j and infiiniteGraph

### High Level Differences Between SQL and NoSQL

- **Storage**
  - SQL stores data in tabes where each row represents an entity and each column represent a data point about that entity
  - NoSQL databases have different data storage models. the main ones are key value document graph and columnar
- **Schema**
  - In SQL each record conforms to a fixed schema, meaning the column must be decided and chosen before data entry and each row must have data for each column. the schema can be altered later but it involves modifying the whole database and going offline.
  - In NoSQL schemas are dynamic columns can be added on the fly and each row doesn't have to contain data for each column
- **Querying**
  - sql databases uses SQL for defining and manipulating the data which is very powerful
  - NoSql queries are focused on a collection of documents. different databases have different syntax querying.
- **Scalability**
  - In most common situations, sql are vertically scalable by increasing the horsepower of the hardware, which can get very expensive, also it possible to scale a relational database across multiple servers but this is a challenging and time-consuming process.
  - on the other hand, nosql databases are horizontally scalable meaning we can add more servers easily in our nosql database infrastructure to handle a lot of traffic. any cheap commodity hardware or cloud instances can host nosql database thus making it a lot more cost effective than the vertical scaling a lot of nosql tech also distribute data across servers automatically.
- **Reliability**
  - vast majority of relational databases are ACID compliant. so when it comes to data reliability and safe guarantee of performing transactions, sql database are still the better bet.
  - most of nosql solutions sacrifices acid compliance for performance and scalability.

### **Reasons to use SQL databases**

1. we need to ensure **ACID (Atomicity, Consistency, Isolation, Durability)** compliance. acid compliance reduces anomalies and protect the integrity of your database by describing how transactions interact with the database. generally nosql database sacrifice acid compliance for scalability and processing speed but form many e-commerce and financial applications an ACID compliant remains the preferred option.

2. your data is structured and unchanging. if your business is not experiencing massive growth that would require more servers and if you’re only working with data that is consistent, then there's no reason to use a system designed to support a variate of data types and high traffic volumes.

when all the other components of our application are fast and seamless, nosql databases prevent data from being the bottleneck. big data is contributing to a large success for nosql databases mainly because it handles data differently than the traditional relational databases. A few popular examples of no sql databases are mongodb couchdb cassandra.

### **Reasons to use NOSQL databases**

1. storing large volumes of data that often have little to no structure. a nosql database sets no limits on the type of data we can store together and allows us to add new types as the need changes. with document-based databases, you can store data in one place without having to define what types of data those are in advance.

2. making the most of cloud computing and storage. cloud based storage is and excellent cost saving solutions but requires data to be easily speared across multiple servers to scale up. using commodity hardware on-site or in the cloud saves you the hassle of additional software and nosql databases like cassendra are designed to be across multiple data centers out of the box, without a lot of headaches.

3. Rapid development. nosql is extremely useful for rapid development as it dosen't need to be prepped a head of time. if you’re working on quick iterations of your system which require making require frequent updates to the data structure without a lot of downtime between versions, a relational database will slow you down.
