// JavaScript Document
var _$ = function(id) { return document.getElementById(id);}
var cardNumber = new Array("1","2","3","4","5","6","7","8","9","T","J","Q","K");
var suit = new Array("h","d","c","s");  	
var suitcardNumber = new Array();

moneyAmount=0;
tempRemain =0;
randomNum= new Array();
betsNum=0;
bet=0;
cardImg= new Array();
isswap1=false;
isswap2=false;
isswap3=false;
isswap4=false;
isswap5=false;
cardImg = new Array(52);
number= 0;
cardRemaining=0;
var moneyRem = getCookie("money");
altimg= new Array();
userSuit = new Array();
userRank = new Array();
//firstBet =0;
secondBet= 0;
//totalBet =0;

for (var i=0;i<4;i++)
{	
	for (var k=0; k<=12; k++)
	{
		cardImg[number]= new Image();
		cardImg[number].src= "images/cards/"+suit[i]+cardNumber[k]+".gif";
		number++;	
	}
}

function createDeck() 
{	
	randomNum[0]=Math.floor(Math.random()*52);
	randomNum[1]=Math.floor(Math.random()*52);

	if(randomNum[1]== randomNum[0])
	{
		 randomNum[1]=Math.floor(Math.random()*52);
	}
	randomNum[2]=Math.floor(Math.random()*52);
	
	if(randomNum[2]== randomNum[1]||randomNum[2]== randomNum[0])
	{
		 randomNum[2]=Math.floor(Math.random()*52);
	}
	randomNum[3]=Math.floor(Math.random()*52);
	
	if(randomNum[3]== randomNum[2]||randomNum[3]== randomNum[1]||randomNum[3]== randomNum[0])
	{
		 randomNum[3]=Math.floor(Math.random()*52); 
	}	
	randomNum[4]=Math.floor(Math.random()*52);	
		
	if(randomNum[4]== randomNum[3]||randomNum[4]== randomNum[2]||randomNum[4]== randomNum[1]||randomNum[4]== randomNum[0])
	{
		 randomNum[4]=Math.floor(Math.random()*52); 
	}	
} 

function dealCards() 
{       
		//moneyRem="_$" + storageMon.innerHTML;
		moneyAmount = parseInt(_$("betinput").value);
		secondBet = parseInt(_$("betinput2").value);
		if (moneyAmount < 0)
		{
			alert('The bet must be greater than zero.');
			_$('betinput').value="";	
			return false;
		}	
		else if (_$('betinput').value=="")
		{
			alert('You must enter a value.');
			_$('betinput').value="";	
			return false;
		}	
		else if (isNaN(moneyAmount))
		{
			alert('Only numbers are accepted.');
			_$('betinput').value="";	
			 return false;
		}
		else if (moneyAmount > parseInt(moneyRem))
		{
			alert("You don't have enough money");
			_$("betinput").value = "";
			return false;
		}	
			else{
			alert("You have placed a bet of " + moneyAmount);
			
			    createDeck();
				document.getElementById('remMon').innerHTML= "$" + moneyRem;
				total();	
				document.getElementById('card1').src = cardImg[randomNum[0]].src;
				document.getElementById('card2').src = cardImg[randomNum[1]].src;
				document.getElementById('card3').src = cardImg[randomNum[2]].src;
				document.getElementById('card4').src = cardImg[randomNum[3]].src;
				document.getElementById('card5').src = cardImg[randomNum[4]].src;
				
				$('#card1').animate({left: -124,top:-312}, 'linear',animCard2)	
				cardRemaining=5;
				secondBet = _$('betinput2').value;
					//totalBet= parseInt(moneyAmount) + parseInt(secondBet);
					_$('betinput').value="";
					//moneyRem=storageMon.innerHTML;
					money.innerHTML = "$" + moneyRem;
					_$("storageMon").value = moneyRem;
					_$("btnDeal").disabled = true;				
			}
}

function swapCard(cards) 
{
	_$(cards).src="images/cards/b2fv.gif";
}


function checkSecBet() 
{
	if (secondBet ==0)
{
		answer=confirm("Please enter a second bet greater than $5 and lower than your first bet to play.");
		_$("btnDeal").disabled = false;
		
		if(answer == false)
		{
			return false;
		}
		else 
		{
			checkWin();	
		}
}
		else 
		{	
			checkWin();	
		}
}
		
function checkWin()	{
	
		var complete = true;
		altimg[0] = _$('card1').src;
		altimg[1] = _$('card2').src;
		altimg[2] = _$('card3').src;
		altimg[3] = _$('card4').src;
		altimg[4] = _$('card5').src;
		
				for(var p = 0; p < 5; ++p){
			if( altimg[p].substring(altimg[p].length - 6, altimg[p].length - 5) == 'f') {
				complete = false;
				}
			}
	
	if (!complete){
		for(var m = 0; m < 5; ++m){
			if( altimg[m].substring(altimg[m].length - 6, altimg[m].length - 5) == 'f') {
				document.getElementById(('card' + (m+1))).src = cardImg[Math.floor(Math.random()*52)].src;
				checkDouble(m);
				}//if
	
		if(altimg[0] == altimg[1] || altimg[0] == altimg[2] ||altimg[0] == altimg[3] ||altimg[0] == altimg[4] ||altimg[1] == altimg[2] ||	altimg[1] == altimg[3] ||altimg[1] == altimg[4] || altimg[2] == altimg[3] ||altimg[2] == altimg[4] ||altimg[3] == altimg[4]  )
				document.getElementById(('card' + (m+1))).src = cardImg[Math.floor(Math.random()*52)].src;

}//for
}//if !complete
	
	else{			
		altimg[0] = _$('card1').src;
		altimg[1] = _$('card2').src;
		altimg[2] = _$('card3').src;
		altimg[3] = _$('card4').src;
		altimg[4] = _$('card5').src;
		newRandom= new Array();
		
		for (var i=0; i<5; i++)
		{
				newRandom[i]= Math.floor(Math.random()*52);	
				if(newRandom[i]== randomNum[0]||newRandom[i]== randomNum[1]||newRandom[i]== randomNum[2]||newRandom[i]== randomNum[3]||newRandom[i]== randomNum[4])
				{
				newRandom[i]= Math.floor(Math.random()*52);		
				}
		}	
		for(var k = 0; k < 5; ++k){
			userSuit[k] = altimg[k].substring(altimg[k].length - 6,altimg[k].length - 5); 
			userRank[k] = altimg[k].substring(altimg[k].length - 5,altimg[k].length - 4);	
			}	
		_$('buttonCheck').disabled= true;
				document.getElementById('card1').src = "images/cards/b2fv.gif";
				document.getElementById('card2').src = "images/cards/b2fv.gif";
				document.getElementById('card3').src = "images/cards/b2fv.gif";
				document.getElementById('card4').src = "images/cards/b2fv.gif";
				document.getElementById('card5').src = "images/cards/b2fv.gif";
		handEvaluation();	
	}		
} 

function checkDouble(num){
	
	if (num = 0){
		if(altimg[0] == altimg[1] || altimg[0] == altimg[2] ||altimg[0] == altimg[3] ||altimg[0] == altimg[4])
			document.getElementById(('card' + (num+1))).src = cardImg[Math.floor(Math.random()*52)].src;
		}	
	if (num = 1){
		if(altimg[1] == altimg[0] || altimg[1] == altimg[2] ||altimg[1] == altimg[3] ||altimg[1] == altimg[4])
			document.getElementById(('card' + (num+1))).src = cardImg[Math.floor(Math.random()*52)].src;
		}	
	if (num = 2){
		if(altimg[2] == altimg[1] || altimg[0] == altimg[2] ||altimg[2] == altimg[3] ||altimg[2] == altimg[4])
			document.getElementById(('card' + (num+1))).src = cardImg[Math.floor(Math.random()*52)].src;
		}
	if (num = 3){
		if(altimg[3] == altimg[1] || altimg[3] == altimg[2] ||altimg[0] == altimg[3] ||altimg[3] == altimg[4])
			document.getElementById(('card' + (num+1))).src = cardImg[Math.floor(Math.random()*52)].src;
		}
	if (num = 4){
		if(altimg[0] == altimg[4] || altimg[4] == altimg[2] ||altimg[4] == altimg[3] ||altimg[1] == altimg[4])
			document.getElementById(('card' + (num+1))).src = cardImg[Math.floor(Math.random()*52)].src;
		}
	}

function handEvaluation() 
{
	tempRemain = moneyRem;	
		var multiplyer = 0;
		 if (checkFlush() && checkRoyalStraight()){
			 $("#statement").fadeIn(3000,function(){
				  $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have a Royal Flush. You won $" + moneyAmount*250);
			});
	   multiplyer = 250;
	   
		}
		else if (checkFlush() && checkStraight())
		{
			 $("#statement").fadeIn(3000,function(){
				  $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have a Straight Flush. You won $" + moneyAmount*50);
			});
	    multiplyer = 50;
		
		}
		else if(checkFourOfaKind())
		{
			 $("#statement").fadeIn(3000,function(){
				  $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have a Four of a kind. You won $" + moneyAmount*25);
			});
	    multiplyer = 25;
		
		}
	
	else if(checkFullhouse())
		{
			$("#statement").fadeIn(3000,function(){
				 $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have a Full House! You won $" + moneyAmount*6);
			});		
	    multiplyer = 6;
		
			}
	
		else if(checkFlush())
		{
			$("#statement").fadeIn(3000,function(){
				 $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have a Flush. You won $" + moneyAmount*5);
			});
	    multiplyer = 5;
			}
		else if (checkStraight())
		{
			$("#statement").fadeIn(3000,function(){
				 $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have a Straigh. You won $" + moneyAmount*4);
			});
	    multiplyer = 4; 
		}
		else if(checkThreeOfaKind())
		{
			$("#statement").fadeIn(3000,function(){
				 $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have a Three of a kind. You won $" + moneyAmount*3);
			});
	    multiplyer = 3;
		}	
		 else if (checkTwoPairs())
		{
			$("#statement").fadeIn(3000,function(){
				 $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have two pairs. You won $" + moneyAmount*2);
			});
	    multiplyer = 2;
		}
		else if (checkSinglePair())
		{
			$("#statement").fadeIn(3000,function(){
			 $("#statement").css("opacity","1");
			$(this).text( "Congratulations! You have One Pair $" + moneyAmount);
			});
	    multiplyer = 1;
		
		}
		else
		{ 
		     $("#statement").fadeIn(3000,function(){
				 $("#statement").css("opacity","1");
			$(this).text( "Sorry! You lost $" + moneyAmount + ". Try 	again!");
			$("#statement").css("background-color","#F00");
			});
			moneyRem -= moneyAmount;		
		}
		moneyRem = parseInt(moneyRem) + (parseInt(moneyAmount) * multiplyer);
		document.getElementById('remMon').innerHTML= "$" + moneyRem;		
		total();		
		var restart = resetValues();
		var date = new Date();
		date.setTime(date.getTime()+(365*24*60*60*1000));
		document.cookie = "money=" + encodeURIComponent(moneyRem) + "; expires=" + date.toUTCString();
		_$('betinput').value="";
		location.reload();
		moneyAmount = 0;			
}
function total(){
		$('#remMon').animate({height:50,width:54},"slow");;	
		$('#remMon').animate({height:10,width:10},"slow");;
    }	

function checkTwoPairs() // checks to see if there is two pairs.
{
	twopairs = 0;
	for (var a=0; a<5;a++)
	{
		for(var b= a+1; b<5; b++)
		{
			if (userRank[a] == userRank[b])
			{
				twopairs +=1;	
				if(twopairs ==2)
					return true;		
			}//if
		}//for	
	}//for
	twopairs = 0;
return false
}// checkTwoPairs()

function checkSinglePair() // Checks for a single pair.
{
	for (var a=0; a<5;a++)
	{
		for(var b=a+1; b<5; b++)
		{	
			if (userRank[a]== userRank[b])
			{
					return true;
			}			
		}//for	
	}//for
return false;
}// checkSinglePair()

function checkThreeOfaKind() // Checks for a three of a kind.
{
	threeofakind = 0;
	for (var a=0; a<5;a++)
	{
		for(var b=a+1; b<5; b++)
		{
			if (userRank[a]== userRank[b])
			{	
				threeofakind +=1;
				if(threeofakind==3)
				return true;
			}//if	
		}//for	
	}//for
return false;
}// checkTwoPairs()

function checkFourOfaKind() // checks for a four of a kind.
{
	fourofakind = 0;
	for (var a=0; a<5;a++)
	{
		for(var b=a+1; b<5; b++)
		{
			if (userRank[a]== userRank[b])
			{
				fourofakind +=1;	
				if(fourofakind==6)
				return true;				
			}//if
		}//for	
	}//for
return false;
}// checkTwoPairs()

function checkFlush()// checks for a flush.
{
	if(userSuit[0] == userSuit[1] == userSuit[2] == userSuit[3] == userSuit[4] )
	return true;	
		else return false;
}

function checkStraight() // checks for a straight
{
	for(var k = 0; k < 5 ;++k){
		if(userRank[k] == 'T')
			userRank[k] = 10;
		else if(userRank[k] == 'J')
			userRank[k] = 11;
		else if(userRank[k] == 'Q')
			userRank[k] = 12;
		else if(userRank[k] == 'K')
			userRank[k] = 13;
			else 
			userRank[k] = 0 + "" + userRank[k];		
		}
		userRank.sort();
		for(var k = 0; k < 5 ;++k){
			userRank[k] = parseInt(userRank[k]);
			}
		if (userRank[4] == (userRank[3] + 1) == (userRank[2] + 2) == (userRank[1] + 3) == (userRank[0] + 4))
		{
		return true;
		}
	else 
	return false;
}// End checkStraight()f

function checkFullhouse(){
	if(checkTwoPairs() && checkThreeOfaKind())
	return true;
	else return false;
		}

function checkRoyalStraight() 
{
	for(var k = 0; k < 5 ;++k){
		if(userRank[k] == 'T')
			userRank[k] = 10;
		else if(userRank[k] == '1')
			userRank[k] = 14;
		else if(userRank[k] == 'J')
			userRank[k] = 11;
		else if(userRank[k] == 'Q')
			userRank[k] = 12;
		else if(userRank[k] == 'K')
			userRank[k] = 13;
			else 
			userRank[k] = 0 + "" + userRank[k];				
		}
		userRank.sort();
		
		for(var k = 0; k < 5 ;++k){
			userRank[k] = parseInt(userRank[k]);
			}
	
		if (userRank[4] ==  14 && userRank[3] ==13 && userRank[2]  ==12 && userRank[1]  == 11 && userRank[0] == 10 )
		{
		return true;
		}
	else 
	return false;
	
} //End checkRoyalStraight()

function resetValues() 
{
	betsNum=0;
	moneyAmount=0;
	bet =0;
	moneyAmount =0;
	secondBet= 0;
	totalBet =0;
	isswap1=false;
	isswap2=false;
	isswap3=false;
	isswap4=false;
	isswap5=false;	
	_$("btnDeal").disabled = true;
	resetPosition();
	} 

function resetPosition() 
{/**/

		if (window.innerWidth >= 420)
		{
		_$('card1').style.left= "-206px";
		_$('card2').style.left= "-120px";
		_$('card3').style.left= "-34px";
		_$('card4').style.left= "53px";
		_$('card5').style.left= "138px";
		_$('card1').style.top= "0px";	
		_$('card2').style.top= "0px";	
		_$('card3').style.top= "0px";	
		_$('card4').style.top= "0px";	
		_$('card5').style.top= "0px";
		}
		
	else 
	{		
		_$('card1').style.left= "-10px";
		_$('card2').style.left= "-145px";
		_$('card3').style.left= "-74px";
		_$('card4').style.left= "-2px";
		_$('card5').style.left= "69px"; 
		_$('card1').style.top= "172px";	
		_$('card2').style.top= "263px";	
		_$('card3').style.top= "263px";	
		_$('card4').style.top= "263px";	
		_$('card5').style.top= "263px";
	}
	_$("buttonCheck").disabled = false;
_$("btnDeal").disabled = false;

} // End resetPosition()

function TryAgain() 
{
	_$("buttonCheck").disabled = false;
	_$("btnDeal").disabled = false;
	_$("card1").value = "";
	_$("card2").value = "";
	_$("card3").value = "";
	_$("card4").value = "";
	_$("card5").value = "";
	_$("card1").checked = false;
	_$("card2").checked = false;
	_$("card3").checked = false;
	_$("card4").checked = false;
	_$("card5").checked = false;
	_$("betinput").select();	
}

function animCard2() 
{
	$('#card2').animate({left: -210,top:-200}, animCard3)	
}

function animCard3() 
{
	$('#card3').animate({left: -40,top:-200}, animCard4)
}

function animCard4() 
{
	$('#card4').animate({left: 130,top:-200}, animCard5)	
}

function animCard5() 
{
	$('#card5').animate({left: 300,top:-200})
}

function leave() 
{
 			
	alert("You have $" +moneyRem+" remaining"); 
    window.location.assign("http://www.cegep-heritage.qc.ca/")

}


function flipImage() 
{
	for (var i= 0; i<5; i++)
	{
		_$("card"+(i+1)).src="images/cards/b2fv.gif";	
	}	
}

function getCookie(cname)
{
var name = cname + "=";
var cookiedecoded = decodeURIComponent(document.cookie);
ca = cookiedecoded.split(';');
for(var i=0; i<ca.length; i++) 
  {
  var c = ca[i].trim();
  if (c.indexOf(name)==0) return c.substring(name.length,c.length);
}
return "";
}