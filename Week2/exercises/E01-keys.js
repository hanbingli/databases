'use strict';

const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
}

const CREATE_AUTHORS_TABLE = `
    CREATE TABLE IF NOT EXISTS authors(
        author_no INT,
        author_name VARCHAR(50),
        university VARCHAR(50),
        date_of_birth DATE,
        h_index INT,
        gender ENUM('m', 'f'),
        constraint pk_authors PRIMARY KEY (author_no)
    );`;

const ADD_COLUMN = `
    alter table authors add column Collaborator VARCHAR(50);
`;

const ADD_FOREIGN_KEY = `
    alter table authors add constraint fk_authors FOREIGN KEY(Collaborator) REFERENCES authors(author_no)
    ;`;



async function seedDatabase(){
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    const execQuery = util.promisify(connection.query.bind(connection));

    try{
        await Promise.all([execQuery(CREATE_AUTHORS_TABLE), execQuery(ADD_COLUMN), execQuery(ADD_FOREIGN_KEY)]);

        connection.end()
    }catch(err){
        console.error(err.message);
        connection.end();
    }

}


seedDatabase();


