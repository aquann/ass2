//function myFunction() {
//    var x = document.getElementById("myDIV");
//    if (x.style.display === "none") {
//        x.style.display = "block";
//    } else {
//        x.style.display = "none";
//    }
//}


function setup(){
	
}

/*
	get the answer to the first question
*/

// get the user submit button
const q1Btn = document.getElementById('q1');

// when the user clicks, read their answer
q1Btn.onclick = function() {
	const answer = document.getElementById('scary').value;

	if (answer == "Help") {
		document.body.style.backgroundImage = "url(clowns.png)"

	} else (answer == "Drive away") {
		document.body.style.backgroundImage = "url(heights.jpg)"
	
};






















