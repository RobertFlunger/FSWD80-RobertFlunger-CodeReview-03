var customerName;
var customerAge;
var horsePower;
var customerCountry;

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

/*Have to set initital value for country, as dropdown menu is set on 'Austria' and it wouldn't have a value if we didn't change the selection*/
customerCountry = document.getElementById('countrySelect').value;

function getCountry() {
	customerCountry = document.getElementById('countrySelect').value;
}



document.getElementById('name').addEventListener('focusout', getName);
document.getElementById('age').addEventListener('focusout', getAge);
document.getElementById('horsepower').addEventListener('focusout', getHP);
document.getElementById('countrySelect').addEventListener('input', getCountry);

function calculateInsurance(customerName, horsePower, customerAge, customerCountry) {
	var insurance = 0;
	horsePower = parseFloat(horsePower);
	customerAge = parseFloat(customerAge);

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

document.getElementById('calculateButton').addEventListener('click', function() {
																		calculateInsurance(customerName, horsePower, customerAge, customerCountry) })













