firstx = 100,firsty = 100;
lastx = 200 , lasty = 200;
var canvas 
var mouse_down = 0;

function setting()
{
	var canvas1 = document.getElementById("canvas");
	var ctx1 = canvas1.getContext("2d");
	canvas = canvas1
	ctx = ctx1
}

function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}
	
function mouseMove(event) {
	if(mouse_down == 1)
	{
		var mousePos = getMousePos(canvas, event);
		  ctx.lineTo(mousePos.x, mousePos.y);
		  ctx.stroke();
		  var coords = "X coords: " + mousePos.x + ", Y coords: " +mousePos.y;
		  document.getElementById("demo").innerHTML = coords;
	}
}
		  
function down(event)
{
	mouse_down = 1;
	var mousePos = getMousePos(canvas, event);
	ctx.moveTo(mousePos.x,mousePos.y);
}

function up(event)
{
	mouse_down = 0;
}