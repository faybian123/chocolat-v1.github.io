function itemBuy()
{
	itemOne = 4.00
	itemTwo = 6.00
	itemThree = 5.50
  itemFour = 2.50
  itemFive = 3.00
	product = prompt ("Please enter product code for item to be purchased", "")

	if (product == "001") {
		op1 = "You have purchased Chocolate Bites with strawberries and cream: &pound;"
		document.getElementById("bought").innerHTML = op1 + itemOne
	}

	else

	if (product == "002") {
		op2 = "You have purchased a Chocolate Brownie: &pound;"
		document.getElementById("bought").innerHTML = op2 + itemTwo
	}

	else

	if (product == "003") {
		op3 = "You have purchased Chocolate biscuits and chocolate dip: &pound;"
		document.getElementById("bought").innerHTML = op3 + itemThree
	}
  else

  if (product == "004") {
		op4 = "You have purchased Dark Chocolate pieces: &pound;"
		document.getElementById("bought").innerHTML = op4 + itemFour
	}

  else

  if (product == "005") {
		op5 = "You have purchased Hand crafted white chocolate: &pound;"
		document.getElementById("bought").innerHTML = op5 + itemFive
	}
	else

	if (product == "") {
		op4 = "You have purchased nothing: &pound;0.00"
		document.getElementById("bought").innerHTML = op4
	}
}
