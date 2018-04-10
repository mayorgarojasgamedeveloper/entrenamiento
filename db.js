var pg = require('pg');
const client = new pg.Client(process.env.DATABASE_URL);

const connect = function connect() {
  client.connect(function(err){
    if(err) {
      console.log(err);
    }
  })
};

const getStudents = function getStudents(callback) {
  client.query('SELECT * FROM alumno', function(err, result) {
    if(err) {
      return callback(err);
    }
    else {
      callback(null, result.rows);
    }
  });
}

module.exports = {
  connect,
  getStudents
};
