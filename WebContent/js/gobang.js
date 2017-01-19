
var grid = 36;
 
var h = 60;

var margin = 60;

var dig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var Ident = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
var x = [];
var y = [];


var who = 1;
//记录棋盘状态,1表示黑子,0表示无子,-1表示白子
var chessArray = [];
function initchessArray(){
	for(var i =0;i<15;i++){
		chessArray[i] = new Array();
		for(var j=0;j<15;j++){
			chessArray[i][j] = 0;
		}	
	}
		
}

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
	

function getCanvasPos(canvas,e)  
{//获取鼠标在canvas上的坐标  
    var rect = canvas.getBoundingClientRect();   
    return {   
     x: e.clientX - rect.left * (canvas.width / rect.width),  
     y: e.clientY - rect.top * (canvas.height / rect.height)  
   };  
}  

function click(e){
	var c=document.getElementById("chess");
	var canvasX = getCanvasPos(c,e).x;
	var canvasY = getCanvasPos(c,e).y;
	if(canvasX<margin || canvasX>margin+14*grid || canvasY<h || canvasY>h+14*grid){
		return;
	}
	var intX;
	var intY;
	if(canvasX - margin - grid/2 < 0){
		intX = 0;
	}
	else{
		intX = parseInt((canvasX - margin - grid/2) / 36 + 1);
	}
	
	if(canvasY - h - grid/2 < 0){
		intY = 0;
	}
	else{
		intY = parseInt((canvasY - h - grid/2) / 36 + 1);
	}
	
	drawChess(intX,intY);
	return;
}


function drawChess(x,y){
	var c = document.getElementById("chess");
	var cxt = c.getContext('2d');
	var R = 15;
	if(chessArray[x][y] != 0){
		alert("have chess!");
		return;
	}
	
	if (who == 1){
		cxt.beginPath();
		cxt.arc(margin+x*grid,h+y*grid,R,0,2*Math.PI);
		cxt.fillStyle="black";//画一个黑子
		cxt.fill();//画实心圆
		cxt.closePath();
		chessArray[x][y] = 1;
		who = -1;
		
	}
	else{
		cxt.beginPath();
		cxt.arc(margin+x*grid,h+y*grid,R,0,2*Math.PI);
		cxt.fillStyle="white";//画一个黑子
		cxt.fill();//画实心圆
		cxt.closePath();
		chessArray[x][y] = -1;
		who = 1;
	}
	return ;
		
		
}

function Point() {
	this.x = x;
	this.y = y;
}


