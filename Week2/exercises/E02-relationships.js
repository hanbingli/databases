'use strict';

const util = require('util');
const mysql = require('mysql');

const authors = require('./E02-authorList');
const papers = require('./E02-paperList');

const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
};

const CREATE_RESEARCH_PAPERS = `
    CREATE TABLE IF NOT EXISTS Research_Papers(
        paper_id INT,
        paper_title VARCHAR(50),
        conference VARCHAR(50),
        publish_date DATE,
        author INT,
        constraint fk_author FOREIGN KEY(author) REFERENCES authors(author_no),

    );`;





async function seedDatabase(){
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    const execQuery = util.promisify(connection.query.bind(connection));

    try{

        await execQuery(CREATE_RESEARCH_PAPERS);
        await Promise.all(
            authors.map(async author =>{
                const entry = `INSERT INTO authors set ?`;
                await execQuery(entry, author);

            })
        );
        await Promise.all(
            papers.map(async paper =>{
                const entry = `INSERT INTO Research_Papers set ?`;
                await execQuery(entry, paper);

            })
        );

        connection.end()
    }catch(err){
        console.error(err.message);
        connection.end();
    }

}


seedDatabase();


