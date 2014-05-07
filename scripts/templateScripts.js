$(document).ready(function(){
	$('#gameSelector').accordion({
		collapsible:true,
		heightStyle: 'content',
		active: false
	});
	$('#games').menu();
	$('#gameSelector > h3').addClass('ui-corner-bottom');
});

function initCookieValues(){
	var cookies = document.cookie;
	cookies = decodeURIComponent(cookies);
	
	var nVal;
	
	var cookieArr = cookies.split("; ");
	for(i = 0; i < cookieArr.length; i++){
		nVal = cookieArr[i].substring(0, cookieArr[i].indexOf("="));
		
		switch(nVal){
			case "firstName":
				fName = cookieArr[i].substring(cookieArr[i].indexOf("=")+1);
				break;
				
			case "lastName":
				lName = cookieArr[i].substring(cookieArr[i].indexOf("=")+1);
				break;
				
			case "phoneNumber":
				phoneNum = cookieArr[i].substring(cookieArr[i].indexOf("=")+1);
				break;
				
			case "postalCode":
				pstlCode = cookieArr[i].substring(cookieArr[i].indexOf("=")+1);
				break;
				
			case "availableMoney":
				startingAmount = cookieArr[i].substring(cookieArr[i].indexOf("=")+1);
				break;
				
			case "lastVisit":
				lVisit = cookieArr[i].substring(cookieArr[i].indexOf("=")+1);
				
				
				var futureDate = new Date();
				futureDate.setFullYear(futureDate.getFullYear() + 1);
				
				var curDate = new Date();
				var monthNames = [ "January", "February", "March", "April", "May", "June",
    				"July", "August", "September", "October", "November", "December" ];
				document.cookie = "lastVisit=" + encodeURIComponent(monthNames[curDate.getMonth()] + " " + curDate.getDate() + ", " + curDate.getFullYear())  					+ "; expires=" + futureDate.toUTCString();
				break;
			
			default:
				alert("There was a problem getting the cookie's values.");
				break;
		}//switch
		
	}//for
	$('#fname').html(fName);
	$('#lname').html(lName);
	$('#pnum').html(phoneNum);
	$('#pcode').html(pstlCode);
	$('#cash').html(startingAmount);
	$('#questionCredentials').html(fName + ' ' +lName);

}//initCookieValues()