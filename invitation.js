//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myCustomerName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myCustomerName = document.getElementById("customerNameInput").value;
	
	console.log('Variable myCustomerName: ' + myRecipientName);
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
} 