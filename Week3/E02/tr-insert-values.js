'use strict';

const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
};

const INSERT_VALUES = `
    INSERT INTO account VALUES
        (101, 10000.01), 
        (102, 20000.02),
        (103, 30000.03)
    ;`;




    async function seedDatabase(){
        const connection = mysql.createConnection(CONNECTION_CONFIG);
        const execQuery = util.promisify(connection.query.bind(connection));
    
        try{
            await Promise.all(execQuery(INSERT_VALUES));
    
            connection.end()
        }catch(err){
            console.error(err.message);
            connection.end();
        }
    
    }
    
seedDatabase();
    