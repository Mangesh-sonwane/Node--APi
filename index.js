//Importing express module
const { response } = require('express');
const express = require('express');
//Creating an express module object
const app = express();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// return today Date
app.get('/', (req, res) => {
  let today = new Date();
  var Today =
    today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
  res.send('Current date is ' + Today);
});

// add , 6 days to today return the date
app.get('/addDays', (req, res) => {
  let result = new Date();
  result.setDate(result.getDate() + 6);
  var Today =
    result.getDate() +
    '-' +
    (result.getMonth() + 1) +
    '-' +
    result.getFullYear();
  res.send(' After Adding 6 days to today , Next Date is ' + Today);
});

// add , 6 week to today return date
app.get('/addWeeks', (req, res) => {
  let numWeeks = 6;
  let now = new Date();
  now.setDate(now.getDate() + numWeeks * 7);
  var Today =
    now.getDate() + '-' + (now.getMonth() + 1) + '-' + now.getFullYear();
  res.send(' After Adding 6 Weeks to today , Next Date is ' + Today);
});

//subtract, 187 days from 12 jan 2019 return the date
app.get('/subtractDays', (req, res) => {
  let date = new Date();
  let PastDate = new Date(date);
  PastDate.setDate(PastDate.getDate() - 187);
  var Today =
    PastDate.getDate() +
    '-' +
    (PastDate.getMonth() + 1) +
    '-' +
    PastDate.getFullYear();
  res.send(
    ' After Subtracting 187 days from 12 jan 2019 , Your Date is ' + Today
  );
});

// Write an implementation of getElementById, which performs the same basic tasks as that of actual getElementById
app.get('/getElementbyID', (req, res) => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
  res.send(dom.window.document.querySelector('p').textContent);
});

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
