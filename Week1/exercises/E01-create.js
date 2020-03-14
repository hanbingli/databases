'use strict';

const mysql      = require('mysql');


const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword'
});


connection.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('My sql connected')
});


connection.query(
    'Create database meetup'

);


connection.end();