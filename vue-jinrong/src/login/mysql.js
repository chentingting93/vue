const express = require('express');
const mysql = require('mysql');
const router = express.Router();
const bodyParser = require("body-parser");//express 的中间件 用来解析请求
var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}));

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By", ' 3.2.1')
	res.header("Content-Type", "application/json;charset=utf-8");
	next();
});

var client = mysql.createConnection({
		host:"localhost",
		user:"root",
		password:"root",
		port:3306,
		database:"rumblefish"
	});

client.connect();

app.get("/login",function(req,res,err){
	var phone = req.query.phone;
	var pwd = req.query.pwd;
	console.log(req)
	if(phone && pwd){
		var sql = 'select * from rumblefish where userName="'+phone+'" and passWord="'+pwd+'"';
	}
	client.query(sql,function(err,rows){
		if(rows.length>0){
			res.jsonp(rows)
		}else{
			res.jsonp(0)
		}
	})
})

app.get('/register',function(req,res,err){
	var phone = req.query.phone;
	var pwd = req.query.pwd;
	var sql = 'select * from rumblefish where userName="'+phone+'" and passWord="'+pwd+'"'
	var sql1 = 'insert into rumblefish(userName,passWord) values("'+phone+'","'+pwd+'")';
	client.query(sql,function(err,rows){
		console.log(rows)
		if(rows.length>0){
			res.jsonp('no');
			return ""
		}else{
			client.query(sql1,function(err,rowss){
				console.log(rowss)
				res.jsonp("ok");
			})
		}
	})
})

app.get('/opinion',function(req,res,err){
	var values = req.query.values;
	if(values){
		res.jsonp(0)
	}
})


//console.log(app)
app.listen(3333, function() {
	console.log('start');
});