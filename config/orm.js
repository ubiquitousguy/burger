var connection = require('../config/conncetion.js');

var orm = {
  getBurgers: function(cb) {
    conncection.query('SELECT * FROM burgers;', function(err, burger) {
      if(err) throw err;
      cb(burger);
    });
  },

  devourBurger: function(burgerid, cb) {
    connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?')
  }
}
