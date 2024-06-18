
# Middleware Functions in Express

Middleware functions are functions that have access to the request object, response object, and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by the `next` variable.

Middleware functions can perform the following tasks:
1. Execute any code
2. Make changes to the request and response objects
3. End the request-response cycle
4. Call the next middleware function in the stack

## Types of Middleware

1. Application-level middleware
2. Router-level middleware
3. Error-handling middleware
4. Built-in middleware
5. Third-party middleware

### 1. Application-Level Middleware

- These middleware are applied **globally**.
- These middleware are bound to the instance of the app object using the `app.use()` or `app.METHOD()` function.

#### Examples

**Middleware applied to all routes:**
```javascript
app.use((req, res, next) => {
  console.log("I am applied to all routes");
  next();
});
```

**Middleware mounted on a specific route:**
```javascript
app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});
```

**Middleware mounted on a specific route using `app.METHOD()`:**

_Example 1:_
```javascript
function midd_on_get_user_id(req, res, next) {
  console.log("Applied on /user/:id");
  next();
}

app.get('/user/:id', midd_on_get_user_id, (req, res) => {
  // const user = find the user
  res.send(\`user is \${user}\`);
});
```

_Example 2:_
```javascript
app.get('/user/:id', (req, res, next) => {
  res.send('USER');
});
```

### 2. Router-Level Middleware

- These middleware are bound to an instance of `express.Router()`.

#### Example

```javascript
const express = require('express');
const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log('Request URL:', req.originalUrl);
  next();
});

router.get('/:id', (req, res, next) => {
  if (req.params.id === '0') next('route');
  else next();
}, (req, res) => {
  res.render('regular');
});

router.get('/:id', (req, res) => {
  res.send('Special Case');
});

app.use('/user', router);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

### 3. Error-Handling Middleware

- Error-handling middleware is defined with four arguments: (err, req, res, next).

#### Example

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

### 4. Built-In Middleware

- Express provides some built-in middleware functions to handle common tasks.

#### Examples

**Serving static files:**
```javascript
app.use(express.static('public'));
```

**Parsing JSON payloads:**
```javascript
app.use(express.json());
```

**Parsing URL-encoded payloads:**
```javascript
app.use(express.urlencoded({ extended: true }));
```

### 5. Third-Party Middleware

- These middleware functions are created by the community to provide additional functionality and are installed via npm.

#### Example

**Using `cookie-parser`:**
```javascript
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Cookies: ' + JSON.stringify(req.cookies));
});
```

By understanding these types of middleware and their usage, you can structure your Express applications more effectively, ensuring that middleware is applied appropriately and efficiently.
