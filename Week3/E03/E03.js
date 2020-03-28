// 1. Give an example of a value that can be passed as name and code that would take advantage of SQL-injection and (fetch all the records in the database)
// Answer: in 'name'  a random name, and in 'code': "1072TH; DROP TABLE Netherlands", ==>Delete all the information of Netherlands

// 2. Rewrite the function so that it is no longer vulnerable to SQL injection

'use strict';

const mysql = require('mysql');

const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
    multipleStatements: false
};



function getPopulation(Country, name, code, cb) {
    const con = mysql.createConnection(CONNECTION_CONFIG);
    
    // assuming that connection to the database is established and stored as conn
    conn.query(
      `SELECT Population FROM`+ conn.escape(Country) + `WHERE name =` + conn.escape(name) +`and code = ` + conn.escape(code),
      function(err, result) {
        if (err) cb(err);
        if (result.length == 0) cb(new Error("Not found"));
        cb(null, result[0].name);
      }
    );
    con.end()
  }

getPopulation(Netherlands, name, 0031);