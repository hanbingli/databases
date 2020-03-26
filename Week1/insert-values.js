var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'hyfuser',
  password : 'hyfpassword',
  database : 'company'
});

connection.connect();
var insert_queries = [
                    "insert into employees values (106, 'Ahmad', 8000, '1986-01-11', 'm')",
                    "insert into employees values (107, 'Rim', 3000, '1979-11-01', 'f')",
                    ]

for(var i in insert_queries){
    console.log("Going to run ", insert_queries[i])
    connection.query(insert_queries[i], function (error, results, fields) {
        if (error) {
            throw error;
        }
        console.log("the reply is ", results[0]);
    });
}
connection.end();
