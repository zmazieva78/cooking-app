var ounces = parseInt(prompt("Enter your unit in Ounces:"));

function convertOunces(ounces) {
	return ounces / 0.035274;
}

var result = convertOunces(ounces);
alert(result + " gramm");
