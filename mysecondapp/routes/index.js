var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'mydb'
});

connection.connect(function(err)
{
  if(!err){
    console.log('Connected to the database');
  }else{
    console.log('Failed to connect to the database');
  }
});

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/form', function(req, res, next) {
  res.render('form');
});


router.post('/processing', function(req, res, next) {
  console.log(req.body)
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = "Record Added";
  //console.log(a+b)
  connection.query("INSERT INTO tbl_student(st_name,st_gender) values (?,?)",[a,b],
  function (error, results, fields){
  res.render('ans', { mya:a ,myb:b,myc:c });
 });
});

// router.get('/home', function(req, res, next) {
//   res.render('home');
// });

// router.get('/about', function(req, res, next) {
//   res.render('about');
// });

// router.get('/header', function(req, res, next) {
//   res.render('header');
// });

module.exports = router;
