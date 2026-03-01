const express = require('express');
const jwt = require('jsonwebtoken');
let books = require("./booksdb.js");
const regd_users = express.Router();

let users = [];

const isValid = (username)=>{ //returns boolean
//write code to check is the username is valid
}

const authenticatedUser = (username,password)=>{ //returns boolean
//write code to check if username and password match the one we have in records.
}

//only registered users can login
regd_users.post("/login", (req,res) => {
  //Write your code here
  return res.status(200).json({message: "Successfully logged in"});
});

// Add a book review
regd_users.put("/auth/review/:isbn", (req, res) => {
  
  return res.status(200).json({data: `Review of book with iSBN ${req.params.isbn} updated successfully`});
});

regd_users.delete("/auth/review/:isbn", (req, res) => {
  
  return res.status(200).json({data: `Review of book with iSBN ${req.params.isbn} deleted successfully`});
});

module.exports.authenticated = regd_users;
module.exports.isValid = isValid;
module.exports.users = users;
