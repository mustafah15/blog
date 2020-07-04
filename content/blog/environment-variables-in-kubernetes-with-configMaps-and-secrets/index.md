---
title: Environment Variables in Kubernetes with configMaps and secrets
date: "2020-07-04T22:12:03.284Z"
time: "5"
---

![kubelogo.png](kubelogo.png)

Inside a Kubernetes cluster in some cases you will need to manage environment variables across the cluster to define an external state of a deployed services, in this post we will discuss how to do so with configMaps and secrets.

## configMap

According to the Kubernetes, documentation [configMap](https://kubernetes.io/docs/concepts/configuration/configmap/) is an Object used to store **non-confidential** data in key-value pairs. 

Your Deployments can consume configMaps in three different ways 

First we need to write a configMap file like this to reference it in our deployment configs 

```yaml
#database-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: database-config
data:
  DATABASE_URL: "https://mydatabase.com:3306"
  DATABASE_PASSWORD: "password"
```

1- **Consuming configMap as Env variables**

This is not ideal because you have to write 4 lines of YAML for each env variable to every container which need that key and end up with a lot of duplicated lines which is a huge downside.

```yaml
#example-depl.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
      - name: example
        image: mustafah15/example
        env:
          - name: DATABASE_URL
            valueFrom:
              configMapKeyRef:
                name: database-config
                key: DATABASE_URL #key inside the configMap file
          - name: DATABASE_PASSWORD
            valueFrom:
              configMapKeyRef:
                name: database-config
                key: DATABASE_PASSWORD #key inside the configMap file
```

2- U**sing envFrom Instead**

This approach will pick all the env variables from the config map file and will put them inside your container which much easier than the first approach.

```yaml
#example-depl.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
      - name: example
        image: mustafah15/example
        envFrom:
        - configMapRef:
            name: database-config
```

3- **Mounting ConfigMaps as Volumes**

this will lead to have different files in the directory you specified at the config each file name will be the env var name and the value of the file will be the value of the var itself

let's create another config map to make it represented as one file with some values inside it as a string

```yaml
#database-config.yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: database-config-v2
data:
  database.properties: |
    DATABASE_URL=https://mydatabase.com:3306
    DATABASE_PASSWORD=password
```

```yaml
#example-depl.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  replicas: 1
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
      - name: example
        image: mustafah15/example
        volumeMounts:
        - name: database-config-volume
          mountPath: /etc/any/dir/config
      volumes:
      - name: database-config-volume
        configMap:
          name: database-config-v2
```

## Secret

Secrets let you store and manage **sensitive** information like password, or api tokens, however you should keep in your mind that secrets values is not encrypted it's just encoded in **base64** format, so consider it a vert basic step of protection that you probably need to add more protection in top of it.

here's an example how to use secrets:

```yaml
#api-credentials.yaml
apiVersion: v1
kind: Secret
metadata:
  name: api-credentials
stringData:
  accessKey: "1235812211231"
  secretKey: "topSecret"
```

and you can bind it into your deployment like this 

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: example-deployment
spec:
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
      - name: example
        image: mustafah15/example
        env:
          - name: ACCESS_KEY
            valueFrom:
              secretKeyRef:
                name: api-credentials
                key: accessKey
```

eventually think of the secrets as special kind of configMaps that are slightly harder to look at.