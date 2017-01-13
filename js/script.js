function main(){

	var quoteButton = document.querySelector("#quoteButton");
	var quote = document.querySelector("#quote");
	var buttonArray = ["primary", "success", "warning", "info"];
	var color = 0;
	getQuote();

	function twitter(param){
			var url = "https://twitter.com/intent/tweet/?text="
			document.querySelector("a").setAttribute("href", url + param);
			console.log(param);	
	}; //twitter
	
	function getQuote(){
		$.getJSON("https://got-quotes.herokuapp.com/quotes", function(json) {	
			console.log(json);
			var quoteBody = json.quote;
			var character = json.character;
			//only get quotes of tweetable length
			if((quoteBody.length+character.length) > 140){
				return getQuote();
			} else {
				quote.innerHTML = "\"" + quoteBody + "\"" + "<br>" + "- " + character;
			};
			twitterButton.addEventListener("click", function(){
				if(quote.textContent.length < 140){
					twitter(quote.textContent);
				};
				return;
			}); //twitterButton
		}, 'jsonp'); //getJSON
	}; //getQuote

	quoteButton.addEventListener("click", function(){
		getQuote();
		//change button color
		var buttons = document.querySelectorAll("button");
		if(color < 3){
			color++
		} else {
			color = 0;
		}
		for(var i = 0; i < 2; i++){
			buttons[i].setAttribute("class", "btn btn-" + buttonArray[color]);
		};
	});//quoteButton
}

$(document).ready(main());