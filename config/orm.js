var connection = require('../config/conncetion.js');

var orm = {
  getBurgers: function(cb) {
    conncection.query('SELECT * FROM burgers;', function(err, burger) {
      if(err) throw err;
      cb(burger);
    });
  },

  devourBurger: function(burgerid, cb) {
    connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?', [1, burgerid], function(err, result) {
            if (err) throw err;
            cb();
        });
  },

  addBurger: function(addBurger, cb) {
        connection.query('INSERT INTO burgers SET ?' , {burger_name : addBurger}, function(err, result) {
        if (err) throw err;
        cb();
        });
    }
};

module.exports = orm;
