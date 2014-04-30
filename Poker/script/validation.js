// JavaScript Document// JavaScript Document
var _$ = function(id) { return document.getElementById(id); } 

function setDefaults()
{
	checkCookie();
	_$("firstName").value = "First Name";
	_$("lastName").value = "Last Name";
	_$("phNum").value = "(###)###-####";
	_$("postalCode").value = "ANA NAN";
	_$("startMoney").value = "2500";	
	
}

var valFlag = false;

function validateForm(){
	
	document.myForm.postalCode.value = document.myForm.postalCode.value.toUpperCase();
	
	var firstPass = valFirst(document.getElementById("firstName").value);
	
	var lastPass = valLast(document.getElementById("lastName").value);

	var phonePass = valPhone(document.getElementById("phNum").value);
	
	var postalPass = valPostal(document.getElementById("postalCode").value);

	var moneyPass = valStart(document.getElementById("startMoney").value);

	if(firstPass && lastPass && moneyPass && phonePass && postalPass){
		
		makeCookie();
		
		return true;
	}else{
		return false;
		
	}
	
	
//$( "myForm" ).submit(function() {
 // return this.valFlag;
  //makeCookie();
//});
	
}

function valFirst(first){
	
	var expNumCheck = /[0-9]/;
	
	
	if(first == "" || first == "First name"){
		alert ("Enter your first name");
		return false;
			
	}
	else if(first.search(expNumCheck) != -1){
	alert ("Please use letters and not numbers.");
		return false;
	
	}else{
		if(first.length > 20){
	alert ("More than 20 letters is not allowed.");
			return false;
			
		}else if(first.charAt(0) !== first.charAt(0).toUpperCase()){
			
			alert ("Start your first name with an upper letter and lower for the rest.");
			return false;
		}else{
			
			return true;
		}
	}
}

function valLast(last){
	var expNumCheck = /[0-9]/;
	
	if(last == "" || last == "Last name"){
	alert ("Enter your last name");
		return false;
			
	}else if(last.search(expNumCheck) != -1){
			alert ("Please use letters and not numbers.");
		return false;
	
	}else{
		if(last.length > 30){
			
		alert ("More than 30 letters is not allowed.");
			
		}else if(last.charAt(0) !== last.charAt(0).toUpperCase()){
			
		alert ("Start your last name with an upper letter and lower for the rest.");
			return false;
			
		}else{
			
			return true;
		}
	}
}

function valPhone(phone){
	var expPhoneCheck = /^\(?\d{3}\)?[\-\. ]\d{3}[\-\.]\d{4}$/;
	
	if(phone == "" || phone == "(###)###-####"){
		
		alert ("Enter your phone number.");
		return false;
	}else{
		
		if(phone.search(expPhoneCheck) == false){
			alert ("Re-enter your phone number in a better format.");
			return false;
		}
			
		else{
				
			return true;
		}
	}
}

function valPostal(postalCode){
	var expPostalCheck = /^[A-Za-z]{1}\d{1}[A-Za-z]{1}\*\d{1}[A-Za-z]{1}\d{1}$/;
	
	if(postalCode == "" || postalCode == "ANA NAN"){
alert ("Enter your postal code.");
		return false;
	}else{
		if(postalCode.search(expPostalCheck) == false){
			alert ("Re-enter your postal code in a valid format.");
			return false;
		}else{
			return true;
		}
	}
}

function valStart(theMoney){
	var expStartCheck = /[\,\.]/;
	
	if(theMoney == "" || theMoney == "$5 - $5000"){
		
		alert ("Enter the amount of money that you want to start the game.");
			return false;
			
	}else{
		if(isNaN(theMoney)){
			
			alert ("Do not use letters only numbers are allowed.");
			return false;
			
		}else if(parseInt(theMoney) < 5 || parseInt(theMoney) > 5000){
			
			alert ("Enter amount of money in the range of 5 to 5000.");
			return false;
			
		}else if(theMoney.search(expStartCheck) != -1){
			
			alert ("Enter the amount of money in a good format; no commas or dots.");
			return false;
			
		}else{
		
			return true;
		}
	}
}


