var express = require("express");
var con = require("./app/converter");
var app = express();
app.get("/", function(req, res){
	console.log("ok");
	res.sendStatus(200);
});
app.listen(3000, function(){
	console.log("Server is listening to port 3000");
} );

