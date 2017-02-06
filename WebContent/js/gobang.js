
var grid = 36;
 
var h = 60;

var margin = 60;

var dig = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

var Ident = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
var x = [];
var y = [];


var who = 1;//��ǰִ���ߣ�1Ϊ�ڣ�-1Ϊ��

var chessArray = [];//��¼����״̬,1��ʾ����,0��ʾ����,-1��ʾ����
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
	cxt.fillStyle="black";//�����ɫ,Ĭ���Ǻ�ɫ
	cxt.fill();//��ʵ��Բ
	cxt.closePath();
	
	//(4,12)
	cxt.beginPath();
	cxt.arc(margin+11*grid,h+3*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//�����ɫ,Ĭ���Ǻ�ɫ
	cxt.fill();//��ʵ��Բ
	cxt.closePath();
	
	//(12,4)
	cxt.beginPath();
	cxt.arc(margin+3*grid,h+11*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//�����ɫ,Ĭ���Ǻ�ɫ
	cxt.fill();//��ʵ��Բ
	cxt.closePath();
	
	//(12,12)
	cxt.beginPath();
	cxt.arc(margin+11*grid,h+11*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//�����ɫ,Ĭ���Ǻ�ɫ
	cxt.fill();//��ʵ��Բ
	cxt.closePath();
	
	//(8,8)
	cxt.beginPath();
	cxt.arc(margin+7*grid,h+7*grid,6,0,2*Math.PI);
	cxt.fillStyle="black";//�����ɫ,Ĭ���Ǻ�ɫ
	cxt.fill();//��ʵ��Բ
	cxt.closePath();
	
}
	

function getCanvasPos(canvas,e)  
{//��ȡ�����canvas�ϵ�����  
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
	judge(intX,intY);
	
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
		cxt.fillStyle="black";//��һ������
		cxt.fill();//��ʵ��Բ
		cxt.closePath();
		chessArray[x][y] = 1;
		who = -1;
		
	}
	else{
		cxt.beginPath();
		cxt.arc(margin+x*grid,h+y*grid,R,0,2*Math.PI);
		cxt.fillStyle="white";//��һ������
		cxt.fill();//��ʵ��Բ
		cxt.closePath();
		chessArray[x][y] = -1;
		who = 1;
	}
	return ;
		
		
}

function restart(){
	window.location.reload(); 
}

function judge(x,y){
	var whochess = -who;
	var judgeX = 4;
	var judgeY = 4;
	var win = true;
	var i;
	while(judgeX>=0){
		
		//�ж�X����
		if (x - judgeX >= 0 && chessArray[x - judgeX][y] == whochess){
			win = true;
			for(i =1;i<5;i++){
				if(x - judgeX+i >15 || chessArray[x - judgeX+i][y] != whochess){
					win = false;
					break;
				}
			}
			if (win == true){
				if (whochess == 1){
					alert("The black won!");
					restart();
				}
				else{
					alert("The white won!");
					restart();
				}
				return;
			}	
		}
		
		
		//�ж�X,Y����
		if (x - judgeX >= 0 && y - judgeY >= 0 && chessArray[x - judgeX][y - judgeY] == whochess){
			win = true;
			for(i =1;i<5;i++){
				if(x - judgeX+i >15 || y - judgeY+i > 15 || chessArray[x - judgeX+i][y - judgeY+i] != whochess){
					win = false;
					break;
				}
			}
			if (win == true){
				if (whochess == 1){
					alert("The black won!");
					restart();
				}
				else{
					alert("The white won!");
					restart();
				}
				return;
			}	
		}
		
		
		//�ж�Y����
		if (y - judgeY >= 0 && chessArray[x][y - judgeY] == whochess){
			win = true;
			for(i =1;i<5;i++){
				if(y - judgeY+i>15 || chessArray[x][y - judgeY+i] != whochess){
					win = false;
					break;
				}
			}
			if (win == true){
				if (whochess == 1){
					alert("The black won!");
					restart();
				}
				else{
					alert("The white won!");
					restart();
				}
				return;
			}	
		}
		
		
		//�ж�-X,Y����
		if (x + judgeX <= 15 && y - judgeY >= 0 && chessArray[x + judgeX][y - judgeY] == whochess){
			win = true;
			for(i =1;i<5;i++){
				if(x + judgeX-i < 0 || y - judgeY+i > 15 ||chessArray[x + judgeX -i][y - judgeY+i] != whochess){
					win = false;
					break;
				}
			}
			if (win == true){
				if (whochess == 1){
					alert("The black won!");
					restart();
				}
				else{
					alert("The white won!");
					restart();
				}
				return;
			}	
		}
		
		judgeX--;
		judgeY--;
		
	}
	
	
	
}

function Point() {
	this.x = x;
	this.y = y;
}


