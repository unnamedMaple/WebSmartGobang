
var grid = 40;
 
var h = 50;



var dig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var Ident = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
var x = [];
var y = [];


function draw() {
	var c = document.getElementById("chess");
	var cxt = c.getContext('2d');
	var w = 15
	cxt.font = "bold 13px Arial";


	for (var i = 0; i < w; i++) {
		
		cxt.fillText(dig[i],200+i*grid - 3,h - 10);
		cxt.fillText(Ident[i],200 - 20,grid*i + h + 5);
	
	}
	
	
	cxt.beginPath();

	for(var i = 0; i < w; i++) {
		
		cxt.moveTo(200,i*grid + h);
		cxt.lineTo(grid*14 + 200,i*grid + h);
		cxt.moveTo(200 + i*grid,h);
		cxt.lineTo(200 + i*grid, grid*14 + h);
	}
	
	
	
	cxt.closePath();
	cxt.stroke();
	
	
	
	
	
}
	
	
function Point() {
	this.x = x;
	this.y = y;
}


