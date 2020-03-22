'use strict';

const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
}

const PRINT_AUTHORS = `
   select author_name, Collaborator
    from authors;`;

const PRINT_PAPERS = `
    SELECT a.author_no
    FROM authors a
    LEFT JOIN Research_Papers b
        ON a.author_no = b.author_no;
    `;




async function seedDatabase(){
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    const execQuery = util.promisify(connection.query.bind(connection));

    try{
        await Promise.all([execQuery(PRINT_AUTHORS), execQuery(PRINT_PAPERS)]);

        connection.end()
    }catch(err){
        console.error(err.message);
        connection.end();
    }

}


seedDatabase();


