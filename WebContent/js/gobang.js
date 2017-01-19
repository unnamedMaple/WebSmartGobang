
var grid = 35;
 
var h = 60;

var margin = 60;

var dig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var Ident = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
var x = [];
var y = [];


function drawCheckerBoard() {
	var c = document.getElementById("chess");
	var cxt = c.getContext('2d');
	var w = 15;
	cxt.font = "bold 13px Arial";


	for (var i = 0; i < w; i++) {
		
		cxt.fillText(dig[i],margin+i*grid - 3,h - 30);
		cxt.fillText(Ident[i],margin - 30,grid*i + h + 5);
	
	}
	
	
	cxt.beginPath();
	
	
	
	
	for(var i = 0; i < w; i++) {
		
		cxt.moveTo(margin,i*grid + h);
		cxt.lineTo(grid*14 + margin,i*grid + h);
		cxt.moveTo(margin + i*grid,h);
		cxt.lineTo(margin + i*grid, grid*14 + h);
	}
	
	
	
	cxt.closePath();
	cxt.stroke();
	
	//(4,4)
	cxt.beginPath();
	cxt.arc(margin+3*grid,h+3*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//填充颜色,默认是黑色
	cxt.fill();//画实心圆
	cxt.closePath();
	
	//(4,12)
	cxt.beginPath();
	cxt.arc(margin+11*grid,h+3*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//填充颜色,默认是黑色
	cxt.fill();//画实心圆
	cxt.closePath();
	
	//(12,4)
	cxt.beginPath();
	cxt.arc(margin+3*grid,h+11*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//填充颜色,默认是黑色
	cxt.fill();//画实心圆
	cxt.closePath();
	
	//(12,12)
	cxt.beginPath();
	cxt.arc(margin+11*grid,h+11*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//填充颜色,默认是黑色
	cxt.fill();//画实心圆
	cxt.closePath();
	
	//(8,8)
	cxt.beginPath();
	cxt.arc(margin+7*grid,h+7*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//填充颜色,默认是黑色
	cxt.fill();//画实心圆
	cxt.closePath();
	
}
	
	
function Point() {
	this.x = x;
	this.y = y;
}


