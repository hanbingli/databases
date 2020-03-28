
const mysql = require('mysql');
const util = require('util');


// don't know why it always shows error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ')' at line 4
const CONNECTION_CONFIG = {
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'userdb',
};

const CREATE_ACCOUNT_TABLE = `
    CREATE TABLE IF NOT EXISTS account(
        account_number INT PRIMARY KEY,
        balance DECIMAL(38,2),    
    );`;

const CREATE_CHANGES_TABLE = `
    CREATE TABLE IF NOT EXISTS account_changes(
        change_number INT,
        account_number INT, 
        amount DECIMAL(38,2),
        changed_date DATE,
        remark TEXT,
        CONSTRAINT fk_account_num FOREIGN KEY(account_number) REFERENCES account(account_number)
    );`;


async function seedDatabase(){
        const connection = mysql.createConnection(CONNECTION_CONFIG);
        const execQuery = util.promisify(connection.query.bind(connection));
    
        try{
            await Promise.all([execQuery(CREATE_ACCOUNT_TABLE), execQuery(CREATE_CHANGES_TABLE)]);
    
            connection.end()
        }catch(err){
            console.error(err.message);
            connection.end();
        }
    
    };
    
seedDatabase();
    