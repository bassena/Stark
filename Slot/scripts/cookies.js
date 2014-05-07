// JavaScript Document

function createCookie() {
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth() + 1);
	
	var date1 = new Date();
	
	var nameMonth = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	
	var first 		= document.getElementById('firstName').value;
	var last 		= document.getElementById('lastName').value;
	var phone 		= document.getElementById('phone').value;
	var code 		= document.getElementById('postalcode').value;
	var startAmount = document.getElementById('iniAmount').value;
	
	document.cookie = "firstName=" 		+ encodeURIComponent(first) + ";path=/;expires=" + expireDate.toUTCString();
	document.cookie = "lastName=" 		+ encodeURIComponent(last) + ";path=/;expires=" + expireDate.toUTCString();
	document.cookie = "phoneNum=" 		+ encodeURIComponent(phone) + ";path=/;expires=" + expireDate.toUTCString();
	document.cookie = "postalCode=" 	+ encodeURIComponent(code) + ";path=/;expires=" + expireDate.toUTCString();
	document.cookie = "iniAmount=" 		+ encodeURIComponent(startAmount) + ";path=/;expires=" + expireDate.toUTCString();
	document.cookie = "lastVisit=" 		+ encodeURIComponent(nameMonth[date1.getMonth()] + " " + date1.getDate() 
										+ ", " + date1.getFullYear()) + ";path=/;expires=" + expireDate.toUTCString();
	
}//makeCookie()

// if no cookies, skip intro.html page to game.html
function checkForCookie() { 
	if(document.cookie) {
		location.href = "game.html";
	}
}//checkIfCookie()

// if no cookies, return to intro.html page
function checkCookie() { 
	if(document.cookie == "") {
		location.href = "intro.html";
	}
}//checkIfCookie()

function getCookie(myCookie) {
	var name = myCookie + "=";
	var indvCookie = decodeURIComponent(document.cookie);
	cArr = indvCookie.split(';');
	for (var i = 0; i < cArr.length; i++) {
		var cooked = cArr[i].trim();
	if (cooked.indexOf(name)==0) return cooked.substring(name.length,cooked.length);
	} // for()
	return "";
} // getCookie(myCookie)

// get last session's money back
function keepMoneyCookie(stack) {
	var expireDate = new Date();
	expireDate.setMonth(expireDate.getMonth() + 1);
	document.cookie = "iniAmount=" + encodeURIComponent(stack) + "; expires=" + expireDate.toUTCString();
}//keepMoneyCookie(stack)
  
  //removes all cookies on the site. 
function deleteCookies() {
	document.cookie = "firstName=; expires=Mon, 12 Jan 2000 00:00:01 GMT; path=/";
	document.cookie = "lastName=; expires=Mon, 12 Jan 2000 00:00:01 GMT; path=/";
	document.cookie = "phoneNum=; expires=Mon, 12 Jan 2000 00:00:01 GMT; path=/";
	document.cookie = "postalCode=; expires=Mon, 12 Jan 2000 00:00:01 GMT; path=/";
	document.cookie = "iniAmount=; expires=Mon, 12 Jan 2000 00:00:01 GMT; path=/";
	document.cookie = "lastVisit=; expires=Mon, 12 Jan 2000 00:00:01 GMT; path=/";
}//removeCookies()
	function printCredentials() {
		var name 	= getCookie("firstName") + " " + getCookie("lastName");
		var phone	= getCookie("phoneNum");
		var postal	= getCookie("postalCode");
		var money	= getCookie("iniAmount");
		var last 	= getCookie("lastVisit");
		
		var inf = document.getElementById("userBox");
		var userBx =("Personal Information: <br /> " + name +"     " + phone + "<br />Postal Code: " + postal 
						+ "<br />Current balance: $" + money + "<br />Last visit: "+ last);

		var lastVisit =("</br>Not " + getCookie("firstName") + " " + getCookie("lastName") + "? " 
						+ "<a id='cred' href=\"intro.html\" onclick=\"deleteCookies()\">Change user</a>");
	inf.innerHTML = userBx + lastVisit;
	totalAm = money;	
	}					
						