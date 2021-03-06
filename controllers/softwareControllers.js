///////////////////////
////////////////////////

//  Requirements

//  fs to read and write information to files

const fs = require("fs");

// require app in order to use express
const express = require("express");

///////////////////////
///////////////////////

///////////////////////
///////////////////////

//  Setups

const app = express();

////////////////////////
//////////////////////////

/////////////////////////
// ////////////////////

// External Logic

//  reads the file in asyncronomous way

//  reads the data and parses into json format

const data = JSON.parse(fs.readFileSync("./dev-data/data/softwares.json"));

///////////////////////////
////////////////////////////

///////////////////////////
/////////////////////////

// Midllewares

//  A middleware to indentify which route youre going throught

app.use((req, res, next) => {
  console.log("Software Route");
});

////////////////////////////
///////////////////////////

///////////////////////////
////////////////////////////

// Handlers

//  handler function #1

//  this handler function gets all the softwares in the database

exports.getAllSoftware = (req, res) => {
  res.status(200).json({
    status: "200",
    dataLenght: data.length,
    data: data,
  });
};

// handler function #2

//  this handler function will get only a specific software from the database

exports.getSoftware = (req, res) => {
  res.status(200).json({
    status: "200",
    id: req.params.id,
    data: data[req.params.id],
  });
};

// /////////////////////////
////////////////////////////
