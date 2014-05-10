function welcomeBack(lVisit) { 
	var thisDay = new Date();
	var months = [ "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December" ];
	
	var firstName;
	var lastName;
	var phoneNumber;
	var postalCode;
	var money;
	
	if(thisDay > lVisit) { 
		lastVisitation.innerHTML = "Your last visit was on: " + months[lVisit.getMonth()] + " " + lVisit.getDate() + ", " + lVisit.getFullYear() + " at " + ((lVisit.getHours() < 10) ? ( "0" + lVisit.getHours()) : lVisit.getHours()) + ":" + ((lVisit.getMinutes() < 10) ? ( "0" + lVisit.getMinutes()) : lVisit.getMinutes());
	}
		
}

function checkCookie(){
	if(document.cookie)
 	{ 
		window.location = "game.html";
	}

	}

function makeCookie()
{
	
	firstName = document.getElementById('firstName').value;
	lastName = document.getElementById('lastName').value;
	phoneNumber = document.getElementById('phNum').value;
	postalCode = document.getElementById('postalCode').value;
	money = document.getElementById('startMoney').value;
	
	var date = new Date();


var curYear = date.getFullYear();
	var curMonth = date.getMonth();
	var curDay = date.getDate();
	var curHour = date.getHours();
	var curMinute = date.getMinutes();
		document.cookie = "hour=" + encodeURIComponent(curHour) + "; expires=" + (new Date(curYear + 1, curMonth , curDay)).toUTCString();
		document.cookie = "minute=" + encodeURIComponent(curMinute) + "; expires=" + (new Date(curYear + 1, curMonth , curDay)).toUTCString();

	
date.setTime(date.getTime()+(365*24*60*60*1000));


var nameMonth = [ "January", "February", "March", "April", "May", "June", 
	"July", "August", "September", "October", "November", "December" ];
	
	
document.cookie = "firstName=" + encodeURIComponent(firstName) + "; expires=" + date.toUTCString();
document.cookie = "lastName=" + encodeURIComponent(lastName) + "; expires=" + date.toUTCString();
document.cookie = "phoneNumber=" + encodeURIComponent(phoneNumber) + "; expires=" + date.toUTCString();
document.cookie = "postalCode=" + encodeURIComponent(postalCode) + "; expires=" + date.toUTCString();
document.cookie = "availableMoney=" + encodeURIComponent(money) + "; expires=" + date.toUTCString();
document.cookie = "lastVisit=" + encodeURIComponent(nameMonth[theDate.getMonth()] + " " + theDate.getDate() + 
	", " + theDate.getFullYear()) + "; expires=" + date.toUTCString();	
	
}
function updateCookieBankRoll(money){
	var futureDate = new Date();
	futureDate.setFullYear(futureDate.getFullYear() + 1);
	document.cookie = "availableMoney=" + encodeURIComponent(money) + "; expires=" + futureDate.toUTCString();
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

function keepMoneyCookie(stack) {
	var date = new Date();
	date.setFullYear(futureDate.getFullYear() + 1);
	document.cookie = "startingAmount=" + encodeURIComponent(stack) + "; expires=" + date.toUTCString();
}//keepMoneyCookie(stack)
  
  
function removeCookies(first, last, number, code, start, visit) {
	document.cookie = "firstName=" + first + "; expires=Sat, 01 Jan 2000 00:00:01 GMT;";
	document.cookie = "lastName=" + last + "; expires=Sat, 01 Jan 2000 00:00:01 GMT;";
	document.cookie = "phoneNum=" + number + "; expires=Sat, 01 Jan 2000 00:00:01 GMT;";
	document.cookie = "postalCode=" + code + "; expires=Sat, 01 Jan 2000 00:00:01 GMT;";
	document.cookie = "startingAmount=" + start + "; expires=Sat, 01 Jan 2000 00:00:01 GMT;";
	document.cookie = "lastVisit=" + visit + "; expires=Sat, 01 Jan 2000 00:00:01 GMT;";
	
}//removeCookies()
