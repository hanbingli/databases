'use strict';

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "new_world"
});

connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('database connected')
});


const q1 = `select name from country where population > 8000000`;
const q2 = `select name from country where name like "%land"`;
const q3 = `select name from city where population between 500000 and 1000000`;
const q4 = `select name from country where continent ="europe"`;
const q5 = `select name from country order by surfacearea desc`;
const q6 = `select name from city where countrycode="nld"`;
const q7 = `select name, population from city where name ="rotterdam"`;
const q8 = `select name from country order by surfacearea desc limit 10`;
const q9 = `select name, population from city order by population desc limit 10`;
const q10 = `select sum(population) from country`;



connection.query(q1, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q2, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q3, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q4, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q5, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q6, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q7, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q8, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q9, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.query(q10, (err, results,fields)=>{
    if(err){
        throw err;
    }
    console.log(results)
});

connection.end();