var express = require('express');
var router = express.Router();
var burgers = require('../models/burger.js');

router.get('/', function(req, res){
	res.redirect('/burgers')
});

router.get('/burgers', function(req, res){
	burgers.all(function(data){
		var hbsObject = {burgers: data};

		console.log(hbsObject);

		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function(req, res){
	burgers.create(['burger_name'], [req.body.b_name], function(data){
		res.redirect('/burgers')
	});
});

router.put('/burgers/update/:id', function(req, res){
	var condition = 'id = ' + req.params.id;

	console.log('condition ', condition);

	burgers.update({'devoured': req.body.devoured}, condition, function(data){
		res.redirect('/burgers');
	});
});

module.exports = router;

// var express = require('express');
// var router = express.Router();
// var burgers = require('../models/burger.js');
//
// router.route('/')
//   .get(function(req,res){
//     db.seeBurger(function(burger_data){
//       res.render('index', {burger_data: burger_data});
//     });
//   });
//
// router.route('/add')
//   .get(function(req,res){
//     db.seeBurger(function(burger_data){
//       res.render('index', {burger_data: burger_data});
//     });
//   })
//   .post(function(req,res){
//     db.addBurger(req.body.new_burger_name, function(result){
//       res.redirect('/');
//     });
//   });
//
// router.route('/eat')
//   .put(function(req,res){
//     db.eatBurger(req.body.burger_id, function(result){
//       res.redi('/');
//     })
//   })
//   .get(function(req,res){
//     db.seeBurger(function(burger_data){
//       res.render('index', {burger_data: burger_data});
//     });
//   });
//
// module.exports = router;
