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
				document.cookie = "lastVisit=" + encodeURIComponent(monthNames[curDate.getMonth()] + " " + curDate.getDate() + ", " + curDate.getFullYear()) + "; expires=" + futureDate.toUTCString();
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
	$('#moneyDiv').html('$'+startingAmount);
	$('#questionCredentials').html(fName + ' ' +lName);

}//initCookieValues()




function checkGameCookies()  // checks for the existence of a cookie, if so redirects to the game page with previously entered credentials.
{ 
	if (!document.cookie)
	{
		location.href = "../intro.html";
	} // if 
} // checkCookies()

function checkGameSelectCookies(){
	if (!document.cookie)
	{
		location.href = "intro.html";
	} // if 
}

function deleteCookie(){
	
	document.cookie = "firstName=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	document.cookie = "lastName=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	document.cookie = "phoneNumber=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	document.cookie = "postalCode=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	document.cookie = "availableMoney=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
	document.cookie = "lastVisit=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}//deleteCookie()

function flashMoney(){
	$("#moneyDiv").effect("highlight", 1000);
}

function redMoney(){
	$("#moneyDiv").effect("highlight", {color: 'red'}, 1000);
}

function losingMoney()
{

    	$(document).ready(function(){
    	
    		$("#moneyDiv").animate(
        	{
           		backgroundColor: "#FF0000", 	
        	}, 740, function() {
            $("#moneyDiv").animate(
            {
                color: "#FFFFFF",
                backgroundColor: "rgba(0,0,0,0)",
            }, 740)
        });
    });
}

function winningMoney() 
{
    $(document).ready(function(){
        $("#moneyDiv").animate(
        {
            backgroundColor: "#5CE62E",
        }, 740, function() {
            $("#moneyDiv").animate(
            {
                backgroundColor: "rgba(0,0,0,0)",
            }, 740
                )
        });
    });
}