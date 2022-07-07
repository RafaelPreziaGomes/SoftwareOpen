///////////////////////
////////////////////////

//  Requirements

const { application } = require("express");
const express = require("express");

//  requiring global midlleware morgan to get information about the request

const morgan = require("morgan");

//  request the router

const softwareRoutes = require("./routes/softwareRoutes.js");

const userRoutes = require("./routes/userRoutes.js");
// //////////////////
/////////////////////

// Setup

//  setting up express

const app = express();

////////////////////////////////////
/////////////////////////////////////

//  Gloabal Middlaweres

///////////////////////////////////
////////////////////////////////////

//  using the morgan third party middleware

app.use(morgan("dev"));

//  creating a global middleware

app.use((req, res, next) => {
  console.log("                                          ");
  console.log("Global Middlewares >>>>>>>>>>>>>>>>>>>>>>>");
  console.log("                                          ");
  next();
});

////////////////////////////////////
/////////////////////////////////////

//  Routers

app.use("/api/v1/softwares", softwareRoutes);

app.use("/api/v1", userRoutes);

module.exports = app;

//////////////////////////////////////
//////////////////////////////////////
