
# Proof of concept for a JWT token based secure REST API using Spring and a Js Client

This is an example project build followinginstructions found in  https://auth0.com/blog/implementing-jwt-authentication-on-spring-boot/.

The project was then modified and Java Script client was added. The java Script client shows how to access 
the REST API using token security by means of asynchronous calls using axios.

### Installing

To run the example first clone the repository, then:

1. Clean and install using maven

```
$ mvn clean install
```

2. Run using Spring boot

```
$ mvn spring-boot:run
```

3. Access your browser at http://localhost:8080/publicsite/index.html

