'use strict';

const util = require('util');
const mysql = require('mysql');


const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
}


const q1 = `
    select count(author_name) from research_papers as r group by r.paper_title;`;

const q2= `
    select count(paper_title) from research_papers as r inner join authors as A on a.author_no=r.author where a.gender='f';
    `;
const q3= `
    select avg(h_index),university from authors as a inner join research_papers as r on a.author_no=r.author group by a.university;
    `;
const q4=`
    count(r.paper_id),a.university from research_papers as r inner join authors as A on a.author_no=r.author group by a.university;
    `;
const q5=`select min(a.h_index),max(a.h_index),a.university from authors as a left join research_papers as r on a.author_no=r.author group by a.university;
    `;

async function seedDatabase(){
    const connection = mysql.createConnection(CONNECTION_CONFIG);
    const execQuery = util.promisify(connection.query.bind(connection));

    try{
        await Promise.all([execQuery(q1), execQuery(q2),execQuery(q3),execQuery(q4),execQuery(q5)]);

        connection.end()
    }catch(err){
        console.error(err.message);
        connection.end();
    }

}


seedDatabase();

    
    