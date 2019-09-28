
var customerName = 'Robert';
var customerAge = 25;
var horsePower = 80;
var customerCountry = 'Austria';

function checkName(customerName) {
	var letters = /^$|^[A-z\s*]+$/;
	if(letters.test(customerName)) {
		console.log('Clean');
		x = customerName;
	} else {
		alert('Numbers and special characters are not valid as an input here. Please input letters only.');
		document.getElementById('name').value = '';
		customerName = '';
	}
	console.log(x);
	return(x);
}

function calculateInsurance(customerName, horsePower, customerAge, customerCountry) {
	var insurance;
	horsePower = parseFloat(horsePower);
	customerAge = parseFloat(customerAge);

	if (customerName == null || horsePower == null || customerAge == null) {
		alert("Please fill out all the necessary information.");
		return
	}
	if (customerCountry === 'Austria') {
		insurance = horsePower * 100 / customerAge + 50;
	} else if (customerCountry === 'Hungary') {
		insurance = horsePower * 120 / customerAge + 100;
	} else {
		insurance = horsePower * 150 / (customerAge + 3) + 50;
	}
	/*document.getElementById('calculationOutput').innerHTML = customerName + ", your insurance costs " + insurance.toFixed(2) + "€.";*/
	return(insurance);
}

/*document.getElementById('calculateButton').addEventListener('click', function() {
																		calculateInsurance(horsePower, customerAge, customerCountry) })*/













