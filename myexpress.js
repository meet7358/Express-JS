var express = require("express");
var app = express();
var port =3000;

//routing
app.get('/',function(req,res){
    res.sendFile(__dirname+'/demo.html');

});

app.get('/about',function(req,res){
    res.send("<h1About</h1");
});

app.get('/contact',function(req,res){
    var a=10
    var b= 20;
    var msg =" A value is : " + a +"," + b ;
    res.send("123456789" + msg);

});

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`)
});