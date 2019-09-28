/*Event listeners to fetch name, age, horse power and country via corresponding functions. Technically possible with just document.getElementById(x).value;
But this way I could include alerts and check whether the input information is correct (e.g. no numbers in name field). Also parsin for numerical values is integrated in functions*/

function checkName() {
	var letters = /^$|^[A-z\s*]+$/;
	customerName = document.getElementById('name').value;
	if(letters.test(customerName)) {
		console.log('Clean');
	} else {
		alert('Numbers and special characters are not valid as an input here. Please input letters only.');
		document.getElementById('name').value = '';
		customerName = '';
	}
}

function checkAge() {
	customerAge = parseFloat(document.getElementById('age').value);
	if(isNaN(customerAge)) {
		alert('Please input your age as a number here.');
		document.getElementById('age').value = '';
	}
}

function checkHP() {
	horsePower = parseFloat(document.getElementById('horsepower').value);
	if(isNaN(horsePower)) {
		alert('Please input the horse power of your vehicle as a number here.');
		document.getElementById('horsepower').value = '';
	} 
}

/*Have to set initital value for country, as dropdown menu is set on 'Austria' and value would be undefined if we didn't change the selection*/
customerCountry = document.getElementById('countrySelect').value;

function checkCountry() {
	customerCountry = document.getElementById('countrySelect').value;
}

/*Event listeners*/
document.getElementById('name').addEventListener('focusout', checkName);
document.getElementById('age').addEventListener('change', checkAge);
document.getElementById('horsepower').addEventListener('change', checkHP);
document.getElementById('countrySelect').addEventListener('input', checkCountry);

/*Function to calculate insurance, takes variables as input
After creating insurance variable checks whether all text fields have a value. 
Then calculates insurance with the corresponding country formular
print a string and the insurance value into the empty div 'calculationOutput'*/

function calculateInsurance(customerName, horsePower, customerAge, customerCountry) {
	var insurance;

	if (customerName == null || horsePower == null || customerAge == null) {
		alert("Please fill out all the necessary information.");
		document.getElementById('calculationOutput').innerHTML = "";
		return
	}
	if (customerCountry === 'Austria') {
		insurance = horsePower * 100 / customerAge + 50;
	} else if (customerCountry === 'Hungary') {
		insurance = horsePower * 120 / customerAge + 100;
	} else if (customerCountry === 'Greece') {
		insurance = horsePower * 150 / (customerAge + 3) + 50;
	}
	
	document.getElementById('calculationOutput').innerHTML = customerName + ", your insurance costs " + insurance.toFixed(2) + "€.";
	return(insurance);
}

/*Event listener for Calculate button*/
document.getElementById('calculateButton').addEventListener('click', function() {
																		calculateInsurance(customerName, horsePower, customerAge, customerCountry) })













