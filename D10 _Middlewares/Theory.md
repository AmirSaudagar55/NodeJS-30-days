# Middleware Functions in Express

Middleware functions are the functions that have access to request, response object and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by the `next` variable.

![Middleware Architecture](https://github.com/AmirSaudagar55/NodeJS-30-days/blob/7348d71d0f71ef72cd945423fd8f8e8f559fd3cf/D10%20_Middlewares/middleware.drawio.png)

Middleware functions can perform the following tasks:
1. Execute any code
2. Make changes to the request and response objects
3. End the request-response cycle
4. Call the next middleware function in the stack

## Types of Middlewares

1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware

### 1. Application-Level Middleware

- These middleware are applied **globally**.
- These middleware are bound to the instance of the app object using the `app.use()` or `app.METHOD()` function.

#### Example

**Middleware applied to all routes:**
```javascript
app.use((req, res, next) => {
  console.log("I am applied to all routes");
  next();
});
```


**Middleware mounted on specific route**
```javascript
    app.use('/user/:id', (req, res, next) => {
        console.log('Request Type:', req.method)
        next()
    })
```
    
**Middleware mounted on spectific route using app.METHOD()**
```javascript
    //Example 1

    function midd_on_get_user_id (req, res, next){
        console.log("Applied on /user/:id ")
        next()
    }

    app.get('/user/:id', midd_on_get_user_id, ()=>{
        // const user = find the user
        res.send(`user is ${user}`)
    })
```

    
    
```javascript
    //Example 2
    app.get('/user/:id', (req, res, next)=>{
        res.send('USER')
    })
```

### 2. Router-level middleware
- Generally, these are applied to specific routes.
- These are bind to instance of router object using router.METHOD() and router.use() 
- Works in same way as application level



```javascript
const express = require('express')
const app = express()
const router = express.Router()
function middleware (req, res, next) {
    console.log("!!! Middleware !!!")
    //----code block----
    next()
}
router.use(middleware)

router.get("/:id", (req, res)=>{            //app.get(":/id", middleware, (req, res)=>{})   ---> this will be not a good practice if there are more such routes 
    res.end('User')
})

router.get("/delete/:id", (req, res)=>{
    res.end('Deleted successfully')
})

app.get("/about",(req, res)=>{
    res.end("About us")
})

app.use("/user", router)

app.listen(8000, ()=>{
  console.log("Server is listening on port 8000")
})
```

```javascript
const express = require('express')

const router = express.Router()
const app = express()

function middleware (req, res, next){
    console.log("!!! Middleware !!!")
    next()
}

router.use(middleware)

router.get("/about", (req, res)=>{
    //code block
    res.end("About us")
})
router.post("/user/:id", (req, res)=>{
    //code block
    res.end("Created User")
})
router.delete("/user/:id", (req, res)=>{
    //code block
    res.end("Deleted User")
})

app.get("/contact", (req, res)=>{               //Will not call middleware()
    res.end("Contact page from app")
})


app.use("/",router)    //All routes defined using router instance will call middleware()

app.listen(8000, ()=>{
    console.log("Listening on port 8000")
})
```

### 3. Error-Handling Middleware
- Takes 4 arguments (err, req, res, next)
- Always added to end of middleware stack
-Errors can accessed using err.stack

![Middleware Architecture](https://github.com/AmirSaudagar55/NodeJS-30-days/blob/7348d71d0f71ef72cd945423fd8f8e8f559fd3cf/D10%20_Middlewares/Error_handler_middleware.jpg)
example:
```javascript
const express = require('express');
const app = express();

const fruits = ['apple', 'orange'];


app.use((req, res, next) => {
  console.log("!!! Middleware !!!");

  try {
      throw new Error("Self error");  // Throw an instance of Error
  } catch (error) {
      next(error);
  }
})


app.get("/contact", (req, res) => {
    res.end("Contact page from app");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.log(`error : ${err.message}`); // Log the error message
    console.log(`stack : ${err.stack}`);  // Log the stack trace
    res.status(500).send('Something broke!');
});

app.listen(8000, () => {
    console.log("Listening on port 8000");
});

```

### 4. Built-in Middleware 
- express.static : Serves static assests such as html files, images, etc.
- express.json : Parses incoming requests with JSON payloads
- express.urlendcoded : Parses the requests with url-encoded payloads

### 5. Third-Party Middleware
- E.g Cookie-parser



Some other points:
If we have same global middlware using app and route then app's middleware will execute.
If we have same route handler using app and router then first app's will execute and then router's execute.