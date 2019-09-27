
var customerName = document.getElementById('name').value;

/*regular expression*/

var customerName;
var customerAge;
var horsePower;

function getName() {
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

function getAge() {
	customerAge = document.getElementById('age').value;
	if(isNaN(parseInt(customerAge))) {
		alert('Please input your age as a number here.');
		document.getElementById('age').value = '';
	}
}

function getHP() {
	horsePower = document.getElementById('horsepower').value;
	if(isNaN(parseInt(horsePower))) {
		alert('Please input the horse power of your vehicle as a number here.');
		document.getElementById('horsepower').value = '';
	} 
}

document.getElementById('name').addEventListener('focusout', getName);
document.getElementById('age').addEventListener('focusout', getAge);
document.getElementById('horsepower').addEventListener('focusout', getHP);

var customerCountry = document.getElementById('countrySelect').value;

function calculateInsurance() {
	var insurance = 0;
	if (customerName == null || horsePower == null || customerAge == null) {
		alert("Please fill out all the necessary information.");
		document.getElementById('calculationOutput').innerHTML = "";
		return
	}
	if (customerCountry == 'Austria') {
		insurance = horsePower * 100 / customerAge + 50;
	} else if (customerCountry == 'Hungary') {
		insurance = horsePower * 120 / customerAge + 100;
	} else {
		insurance = horsePower * 150 / (customerAge + 3) + 50;
	}
	document.getElementById('calculationOutput').innerHTML = customerName + ", your insurance costs " + insurance.toFixed(2) + "€."
}

document.getElementById('calculateButton').addEventListener('click', function() {
																		calculateInsurance(horsePower, customerAge, customerCountry) })













