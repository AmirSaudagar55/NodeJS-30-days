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
