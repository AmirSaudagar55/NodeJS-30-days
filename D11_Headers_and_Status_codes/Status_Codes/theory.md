Http response Status Codes :
-Tells if the request is successfully completed or not

100 - 199 : Informational response
200 - 299 : Successfull response
300 - 399 : Redirectional messages  ---> used while payment redirection
400 - 499 : Client error response
500 - 599 : Server error response

The status codes listed below are defined by RFC 9110(Formal document - Request for comments from IETF(Internet Engineering Task Force))


Common status code used:
200 - OK - Request succeeded.
201 - Created - Request succeeded and resulted in creation of new resource
400 - Bad Request - Server cannot process the request since there is mistake in request syntax
401 - Unauthorized - Client is not authorized for request
403 - Forbidden - Client does not has access right to the content
404 - Not Found - Cannot find the requested resource
408 - Request time out - Server shut down this unused connection
500 - Internal Server error

we can set status codes using
res.status(201).send("User created successfully")