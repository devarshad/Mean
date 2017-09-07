var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var student = require('../models/student.js');

/* GET /api/student/ listing. */
router.get('/', function(req, res, next) {
	var obj={};
	if(req.query.key){
		obj={'name':{$regex:req.query.key}};
	}
  student.find(obj,function (err, students) {
    if (err) return next(err);
    res.json(students);
  }).sort({updated_at:-1});
});

// create student and send back all students after creation
router.post('/', function(req, res) {
	// create a student, information comes from AJAX request from Angular
	student.create({
		name : req.body.name,
		active : false
	}, function(err) {
		if (err)
			res.send(err);
		// get and return all the students after you create another
		student.find(function(err, students) {
			if (err)
				res.send(err)
			res.json(students);
		}).sort({updated_at:-1});
	});
});

// get a student
router.get('/edit', function(req, res) {
	student.findOne({
		_id : req.query.id
	}, function(err,data) {
		if (err)
			res.send(err);
		res.json(data);
	});
});

// update student and send back all students after creation
router.put('/', function(req, res) {
	student.update({_id:req.body._id},req.body, function(err) {
		if (err)
			res.send(err);
		// get and return all the students after you create another
		student.find(function(err, students) {
			if (err)
				res.send(err)
			res.json(students);
		}).sort({updated_at:-1});
	});
});

// delete a student
router.delete('/', function(req, res) {
	student.remove({
		_id : req.query.id
	}, function(err) {
		if (err)
			res.send(err);
		// get and return all the students after you create another
		student.find(function(err, students) {
			if (err)
				res.send(err)
			res.json(students);
		}).sort({updated_at:-1});
	});
});

module.exports = router;