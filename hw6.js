$(document).ready(function(){
	makeButtons();
});


//first create an array of strings, of topics that interest me
var topics = ["alton brown","anthony hopkins","amy sedaris","bird", "dog","german shepherd","cupcake","kitkat","matcha","orange"];

//take the topics in this array, and create buttons in the HTML
//try using a loop that appends a button for each string in the array
makeButtons = function(){
	console.log("makeButtons function");
	for(var i = 0; i<topics.length; i++){
		var newButton = $('<button class="">');
		newButton.text("topics[i]");
		$("#animalButtons").html(newButton);
	}
};




//when user cliks on a button, the page should grab 10 static, non-animated
//gif images from the GIPHY api and place them on the page
$('button').on('click', function(){
	var topic = $(this).attr("data-")

});

var queryURL = "http://www.omdbapi.com/?t=" + type + "&y=&plot=short&r=json";

//create an AJAX call
$.ajax({url: queryURL, method: 'GET'}).done(function(response){
	//
	var results = response.data;
	//or could just use eg response.data.XXX


});




//when the user clicks one of still GIPHY images, the gif should animate


//if an animated gif image is clicked again, it should stop playing

//under every gif, display its rating (PG, G, etc)
//this data is provided by the GIPHY api

//finally, add a form that takes the value from the user input box, and pushes it
//into the topics array.
//then make a function call that takes all the topics in the array and remakes
//the buttons on the page.
$("#add-animal").on("click", function() {
	var newAnimal = $("#animal-input").val().trim();
	$("#animalButtons").append();


});