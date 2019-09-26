var mysql = require('mysql');

var connection = mysql.createConnection({
  host      : 'remotemysql.com',
  user      : 'NhDdUPjdZn',
  password  : '8apK7TeDX7',
  database  : 'NhDdUPjdZn',

});
connection.connect(function(err){
  (err) ? console.log(err): console.log('connected');
});

// connection.query('SELECT * from Bookings', function(err, rows, fields) {
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
// });

module.exports=function(){
  if (!connection){
    connection;
  }
  return connection;
};
