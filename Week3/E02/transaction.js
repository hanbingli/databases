'use strict';

const util = require('util');
const mysql = require('mysql');

const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
};

const AUTOCOMMIT =`set autocommit = 0;`
const START_TRANSACTION = `start transaction;`
const TRANSFER_MINUS =`UPDATE account SET balance = balance - 1000 WHERE account_number = 101;`
const TRANSFER_PLUS =`UPDATE account SET balance = balance + 1000 WHERE account_number = 102;`
const LOG = `INSERT into account_changes VALUES(1, 101, 1000.00, "2020-03-15", "tr_01_to_02");`

const COMMIT = `commit;`
const ROLLBACK = `rollback;`






    async function seedDatabase(){
        const connection = mysql.createConnection(CONNECTION_CONFIG);
        const execQuery = util.promisify(connection.query.bind(connection));
    
        try{
            await Promise.all([execQuery(AUTOCOMMIT), 
                execQuery(START_TRANSACTION),
                execQuery(TRANSFER_MINUS),
                execQuery(TRANSFER_PLUS),
                execQuery(LOG),
                execQuery(COMMIT),
                ]);
    
            connection.end()
        }catch(err){
            console.error(err.message);
            connection.end();
        }
    
    }
    
seedDatabase();
    