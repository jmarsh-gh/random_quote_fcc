
console.log("hello world");



function main(){

	var quoteButton = document.querySelector("#quoteButton");
	var quote = document.querySelector("#quote");
	
	$.getJSON("https://got-quotes.herokuapp.com/quotes", function(json) {	
		console.log(json);
		quote.innerHTML = "\"" + json.quote + "\"" + "<br>" + "- " + json.character;
	}, 'jsonp');

	quoteButton.addEventListener("click", function(){
		$.getJSON("https://got-quotes.herokuapp.com/quotes", function(json) {	
			console.log(json);
			quote.innerHTML = "\"" + json.quote + "\"" + "<br>" + "- " + json.character;
		}, 'jsonp');
	});

}

$(document).ready(main());