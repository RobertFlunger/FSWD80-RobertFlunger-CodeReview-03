function getHP() {
	horsePower = document.getElementById('horsepower').value;
	if(isNaN(parseInt(horsePower))) {
		alert('Please input the horse power of your vehicle as a number here.');
		document.getElementById('horsepower').value = '';
	} 
}

document.getElementById('horsepower').addEventListener('focusout', getHP);

