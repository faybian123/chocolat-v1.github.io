function enterDetails()
{
	name = prompt("Please enter your name: ", "")
	dob = prompt("Please enter your date of birth: ", "")
	ccnum = prompt("Please enter your credit card number: ", "")

	Info = "Name: " + name + "<br>Date of Birth: " + dob + "<br>Credit Card Number: " + ccnum
	document.getElementById("yourInfo").innerHTML = Info

	alert("Thank you for your purchase")
}
