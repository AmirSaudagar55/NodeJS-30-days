# HTTP Headers

HTTP headers are additional information passed with requests and responses. They provide metadata about the body of the message and are structured as key-value pairs.

## Categories of HTTP Headers

### 1. Request Headers
Request headers contain information about the resource to be fetched or the client requesting the resource.
![Http Request Message Format](https://github.com/AmirSaudagar55/NodeJS-30-days/blob/7caeb84a2c1c09dff81a979575f17818af8f30dd/D11_Headers_and_Status_codes/Headers/Http_Request_Message_Format.png)
Example:
```json
{
  "accept-encoding": "gzip, deflate, br",
  "accept": "*/*",
  "user-agent": "Thunder Client (https://www.thunderclient.com)",
  "host": "localhost:8000",
  "connection": "close"
}
```

### 2. Response Headers
Response headers contain information about the resource being sent or the server sending the response.
![Http Response Message Format](https://github.com/AmirSaudagar55/NodeJS-30-days/blob/7caeb84a2c1c09dff81a979575f17818af8f30dd/D11_Headers_and_Status_codes/Headers/Http_Response_Message_Structure.png)
Example:
```
x-powered-by: Express
content-type: application/json; charset=utf-8
date: Tue, 18 Jun 2024 15:28:47 GMT
connection: close
content-length: 0
```

### 3. Representational Headers
Representational headers provide metadata about the resource present in the message body.

### 4. Fetch Metadata Request Headers
Fetch Metadata request headers are used for security purposes. They implement resource isolation policies and are prefixed with `sec-`. These headers cannot be modified programmatically.

## Setting Custom Headers
To set a custom header, use the `setHeader(headerName, headerValue)` method. Custom headers should be prefixed with `X-` to indicate they are custom.

Example:
```javascript
//setHeader('X-Custom-Header', 'customValue');

const express = require('express')
const app = express()

app.get("/", (req, res)=>{
    console.log(req.headers)
    res.setHeader("X-MyName", "Amir Saudagar") //Custom header
    res.send("Home Page")
})


app.listen(8000, ()=>{
    console.log("Server is listening on the port 8000")
})
```

![Custom Header in Response header](https://github.com/AmirSaudagar55/NodeJS-30-days/blob/adcbe938ee6c413420215f2973118f685947b821/D11_Headers_and_Status_codes/Headers/custom_header.jpg)