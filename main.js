firstx = 100,firsty = 100;
lastx = 200 , lasty = 200;
var canvas 

function setting()
{
	var canvas1 = document.getElementById("canvas");
	var ctx1 = canvas1.getContext("2d");
	canvas = canvas1
	ctx = ctx1
}

function drawLine()
{

	ctx.beginPath();
	ctx.strokeStyle = "#ff0000";
	ctx.linewidth = 0.5;
	ctx.lineCap = 'square' ;

	ctx.moveTo(250,0);
	ctx.lineTo(250,500);

	ctx.moveTo(0,250);
	ctx.lineTo(500,250);


	ctx.stroke();
}
	

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
 

}



function down(event)
{
	firstx = event.clientX;
	firsty = event.clientY;
	var coords = "X coords: " + firstx + ", Y coords: " + firsty;
  document.getElementById("demo2").innerHTML = coords;	
}

function up(event)
{
	lastx = event.clientX;
	lasty = event.clientY;
	var coords = "X coords: " + lastx + ", Y coords: " + lasty;
  	document.getElementById("demo3").innerHTML = coords;	

  ctx.beginPath();
	ctx.strokeStyle = "rgb(233,230,30)";
	ctx.linewidth = 0.5;
	ctx.lineCap = 'square' ;

	ctx.moveTo(firstx,firsty);
	ctx.lineTo(lastx,lasty);

	ctx.moveTo(0,250);
	ctx.lineTo(500,250);


	ctx.stroke();
}