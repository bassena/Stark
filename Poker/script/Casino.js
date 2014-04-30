

// JavaScript Document

var chip = new Array(8);
var curchip=0;
var leftPosition = -150;



function moveChip(){
for(var i =0; i <8; ++i)
	chip[i] = "images/chip"+ i + ".png";
	
document.getElementById("chip1").src = chip[curchip];
document.getElementById("chip2").src = chip[curchip];
document.getElementById("chip3").src = chip[curchip];

if (curchip==7)
{
curchip=0;
positionChip();
}

else
++curchip;
}//function to move the chip


function positionChip(){
	
document.getElementById("chip1").style.left = leftPosition + "px";
document.getElementById("chip2").style.left = leftPosition + "px";
document.getElementById("chip3").style.left = leftPosition + "px";
	leftPosition += 80;
		if (leftPosition >= 650) {
		positionCoin();
		document.getElementById("chip1").style.visibility="hidden";
		document.getElementById("chip2").style.visibility="hidden";
		document.getElementById("chip3").style.visibility="hidden"; 
	}//function for position of the chip
	
moveChip();//calling function to move chip

}

var coin = new Array(8);
var curcoin=0;
var topPosition = -150;


function moveCoin(){
for(var i =0; i <8; ++i)
	coin[i] = "images/goldcoin"+ i + ".png";
	

	document.getElementById("coin").src = coin[curcoin];
document.getElementById("coin1").src = coin[curcoin];
document.getElementById("coin2").src = coin[curcoin];
document.getElementById("coin3").src = coin[curcoin];

if (curcoin==7)
{
curcoin=0;
positionCoin();
}

else
++curcoin;
}//function to move the coin


function positionCoin(){
	
document.getElementById("coin").style.top = topPosition + "px";
document.getElementById("coin1").style.top = topPosition + "px";
document.getElementById("coin2").style.top = topPosition + "px";
document.getElementById("coin3").style.top = topPosition + "px";

	topPosition += 50;
	setInterval(moveCoin(), 500);
		if (topPosition >= 500) {
	document.getElementById("coin").style.visibility="hidden"; 
	document.getElementById("coin1").style.visibility="hidden"; 
	document.getElementById("coin2").style.visibility="hidden"; 
	document.getElementById("coin3").style.visibility="hidden"; 
	init();//calling the function init to draw the canvas
	}
	
}//function for the position of the coin

	
var context;
var x = 0;
var y = 20;
var image;

function init()
{
	var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) 
	{
	   	context = canvas.getContext('2d');
		image = new Image();
		image.onload = function()
		{
			setInterval(function (){draw();}, 36);		
		}
		image.src = 'images/treasure1.png';
		setTimeout(function(){location.href="intro.html"} , 6000);  
	}	
	}//function init 

function draw()
{
	    drawBackground();//calling function to drawbackground
	    context.drawImage(image, x, y);	    
	    x += 2;
	    if(x > 400)
		{	
        context.textBaseline="middle"; 
		context.font = '40pt Calibri';
      	context.fillStyle = 'blue';
		context.fillText("Welcome!",100,100);
        }
		
}//function to draw image

function drawBackground()
{   
 
	    context.fillStyle = '#E84D08';
		context.beginPath();
	    context.fillRect(0, 0, 400, 200);
		context.closePath();
}//function to drawbackground of canvas
