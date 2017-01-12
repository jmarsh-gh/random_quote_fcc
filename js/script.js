
console.log("hello world");



function main(){

	var quoteButton = document.querySelector("#quoteButton");
	var quote = document.querySelector("#quote");
	getQuote();

	function twitter(param){
			var url = "https://twitter.com/intent/tweet/?text="
			document.querySelector("a").setAttribute("href", url + param);
			console.log(param);	
	};
	
	function getQuote(){
		$.getJSON("https://got-quotes.herokuapp.com/quotes", function(json) {	
			console.log(json);
			quote.innerHTML = "\"" + json.quote + "\"" + "<br>" + "- " + json.character;
			//onlick here - needs more work
			twitterButton.addEventListener("click", function(){
				if(quote.textContent.length < 140){
					twitter(quote.textContent);
				};
				return;
			});
		}, 'jsonp');
	};

	

	quoteButton.addEventListener("click", function(){
		//DRY - removed the getJSON request as the same
		getQuote();
	});


}

$(document).ready(main());