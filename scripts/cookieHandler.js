var getByName = function(id) {  return document.getElementByName(id);  }

// JavaScript Document
function getById(id) {  return document.getElementById(id);  }

function validateFieldsSetCookies() 
{
	var isValid = false;
	var compiledErrors = "";
	
	var firstName = document.getElementById("fname").value;
	var firstNameValidator = /^[A-Z][a-z\D]\S*$/;
    var firstNameIsValid = false;
		if (firstNameValidator.test(firstName))
		{
    	    firstNameIsValid = true;
		}
		else{
    	    compiledErrors = "First name - The first name must begin with a capital letter, and not contain numbers or spaces \n";
    	} // First name Validation


    var lastName = document.getElementById("lname").value;
    var lastNameValidator = /^[A-Z][a-z\D]\S*$/;
    var lastNameIsValid = false;

    if (lastNameValidator.test(lastName))
    {
        lastNameIsValid = true;
    }
    else
    {
        compiledErrors += "Last Name - The last name must begin with a capital, and not contain numbers or spaces\n";
    } // Last name Validation

    var phoneNumber = document.getElementById("phoneNum").value;
    var phoneNumberValidator = /^[\(]?(\d{3})[\)]?[\-\s\.](\d{3})[\-\s\.](\d{4})$/;
    var phoneNumIsValid = false;
    if (phoneNumberValidator.test(phoneNumber))
    {
        phoneNumIsValid = true;
    }
    else{
        compiledErrors += "Phone Number - The phone number can only be entered in any of the following formats:\n(###) ###-####\n###-###-####\n###.###.####\n";

    } // phone number Validation

    var postalCode = document.getElementById("pCode").value;
    var postalCodeValidator = /^(\D\d\D)( )?(\d\D\d)$/i;
    var postalCodeIsValid = false;
    if (postalCodeValidator.test(postalCode))
    {
        var upperCasePostalCode = ""; // temp variable for corrected postal code
        for(var i=0; i <= postalCode.length; ++i)
        {
            if(isNaN(postalCode.charAt(i)))  // check if character at for loop iteration 'i' is not a number
            {
                upperCasePostalCode += postalCode.charAt(i).toUpperCase();
            } // if a not a number, convert to uppercase and append to upperCasePostalCode
            else
                upperCasePostalCode += postalCode.charAt(i);  // if a number, append to upperCasePostalCode
        }
        postalCode = postalCode.replace(postalCode, upperCasePostalCode);  // replace user input PostalCode with case-corrected Postal code
        postalCodeIsValid = true;

    }
    else
    {
        compiledErrors += "Postal Code - Is not case sensitive, but must be entered using the following format: A0A 0A0\n";

    } // Postal code Validation

    var money = document.getElementById("initFund").value;
    var moneyValidator = /^(([5-9]\d{0,2})|([1-4]\d{3})|(50{3}))$/;
    var moneyIsValid = false;
    if (moneyValidator.test(money)){
        moneyIsValid = true;
		}

	else 
	{
		compiledErrors += "Starting amount - please input an amount between 5, and 5000 dollars";
	} // betting money validation

	if ((firstNameIsValid && lastNameIsValid && phoneNumIsValid && postalCodeIsValid && moneyIsValid) == true)
	{
        isValid = true;
            if (isValid){
                setCookies();
                return true;
             } // if
                 else{
                    alert(compiledErrors);
                    return false;
                } // else
	}
    else 
    {
        alert(compiledErrors);
        return false;
    } //

}	// validateFields()

function checkIfCookie(){
	if(document.cookie){
		location = 'selectAGame.html';
	}
}

function setCookies() // onSubmit sets the cookies based on the input from the form in intro.html. 
{ 
    var expireDate = new Date();
    expireDate.setFullYear(expireDate.getFullYear() + 1);

    var currentTime = new Date();
    var year = currentTime.getFullYear();
    var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    var month = monthName[currentTime.getMonth()]; // variable containing the human readable version of the month from the date object converted using above array.
    var numericDayArray = new Array(01, 02, 03, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31);
    var numericDay = numericDayArray[currentTime.getDay()];
    var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var day = dayName[currentTime.getDay()]; // variable containing the human readable version of the day from the date object converted using above array.
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();

    var currentVisit = "A newcomer! Good luck and have fun!";

    var firstName = getById("fname").value;
    var lastName = getById("lname").value;
    var postalCode = getById("pCode").value;
    var phoneNumber = getById("phoneNum").value;
    var money = getById("initFund").value;

    document.cookie = "firstName=" + encodeURIComponent(firstName) + "; expires=" + expireDate.toUTCString();
    document.cookie = "lastName=" + encodeURIComponent(lastName) + "; expires=" + expireDate.toUTCString();
    document.cookie = "postalCode=" + encodeURIComponent(postalCode) + "; expires=" + expireDate.toUTCString();
    document.cookie = "phoneNumber=" + encodeURIComponent(phoneNumber) + "; expires=" + expireDate.toUTCString();
    document.cookie = "availableMoney=" + encodeURIComponent(money) + "; expires=" + expireDate.toUTCString();
    document.cookie = "lastVisit=" + encodeURIComponent(currentVisit) + "; expires=" + expireDate.toUTCString();

} // checkAndSetCookies()