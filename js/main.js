var colorname=document.getElementById("color");
console.log(colorname);
function colorChange(){
	var value=colorname.value;
	console.log(value);
	colorname.style.backgroundColor=value;
}

var siva=document.getElementById("bgcolor");
console.log(siva);
var box2=document.getElementsByClassName("color");
console.log(box2);
function boxcolor2(){
	var value=siva.value;
	console.log(value);
	box2[0].style.backgroundColor=value;
}

// var para=document.getElementById("para");
var randomclr=document.getElementById("random");
console.log(randomclr);
function randomcolor(){
var a=["coral","green","yellow","pink","purple","aqua","olive"];
var number=(Math.floor(Math.random()*a.length));
console.log(number);
document.body.style.backgroundColor=a[number];
}

var paraclr=document.getElementById("paragraph");
var parachange=document.getElementById("para");
console.log(para);
function paracolor(){
var b=["red","blue","yellow","pink","purple","aqua","olive"];
var num=(Math.floor(Math.random()*b.length));
console.log(num);
parachange.style.backgroundColor=b[num];
}