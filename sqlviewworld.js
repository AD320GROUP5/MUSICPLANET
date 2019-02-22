

const mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pacific',
  database : 'world'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err);
    return;
  }

 console.log('connected as id ' + connection.threadId);
});

console.log("CCCCCCCCC");
connection.query('select *from city', function (error, results, fields) {
console.log("DDDDDDDDDDDDDDDDDDDD");
    if (error)
        throw error;
    console.log("EEEEEEEEEEE");
    results.forEach(result => {
        console.log(result);
    });
});
    console.log("FFFFFFFFFFFFFFFFFFFFFFFFF");
connection.end();
