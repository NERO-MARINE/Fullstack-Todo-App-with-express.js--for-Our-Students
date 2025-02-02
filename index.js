const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// use static files
app.use(express.static("public"));

// set view engine
app.set("view engine", "ejs");

// connect to DB
const dbURI = 'mongodb+srv://vellaJohn56:Bambi8990@vellanode.mztbrap.mongodb.net/Todo-nero?retryWrites=true&w=majority&appName=VellaNode';

/* 
mongoose.connect(dbURI)
.then(()=>{
    console.log('connected to db');
})

.catch((err)=>{
   console.error(err)
}) 
*/
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log('Connected to DB');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

connectDB();


app.get("/", (req, res)=>{
    res.render("index", {title : "Home page"});
});

app.get("/login", (req, res)=>{
    res.render("auth/login", {title: "Login page"});
});

app.get("/signup", (req, res)=>{
    res.render("auth/signup", {title: "Signup page"});
});

app.get("/tasks", (req, res)=>{
    res.render("tasks", {title: "All Tasks"});
});

app.listen(port, ()=>{
    console.log(`listening to request at port ${port}`);
});


/* 
>>> This function does not return the database connection immediately.
Instead, it returns a promise, which acts as a placeholder for the connection that will be established in the future.

> mongoose.connect(dbURI)
  .then(() => {
    console.log('connected to db'); // Runs if the promise is fulfilled
  })
  .catch((err) => {
    console.log(err); // Runs if the promise is rejected
  });


>>> How Does Async/Await Work with Promises?
When we use async/await, we are waiting for the promise to resolve before moving forward.

> const connectDB = async () => {
    try {
        await mongoose.connect(dbURI); // Waits until the promise resolves
        console.log('Connected to DB');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

connectDB();


>>> What is a Promise?
A promise in JavaScript is the result of an asynchronous operation -- it has three states:

> Pending – The operation hasn’t completed yet.
> Fulfilled (Resolved) – The operation was successful.
> Rejected – The operation failed.



>>> Why Use Async/Await Instead of .then().catch()?
✅ Cleaner and more readable – No need for multiple .then() and .catch() calls.
✅ Error handling is more structured – The try/catch block makes it clearer where errors occur.
✅ Easier to scale – If you want to add more operations (e.g., logging, retries), an async function is easier to manage.


*/