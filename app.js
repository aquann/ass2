//function myFunction() {
//    var x = document.getElementById("myDIV");
//    if (x.style.display === "none") {
//        x.style.display = "block";
//    } else {
//        x.style.display = "none";
//    }
//}


function setup(){
	img = loadImage("sky1.png");
}

function draw(){
	image(img, 0, 0, img.width/2, img.height/2);
}
/*
	get the answer to the first question
*/

// get the user submit button
const q1Btn = document.getElementById('qOne');

// when the user clicks, read their answer
q1Btn.onclick = function() {
	const answer = document.getElementById('scary').value;

	if (answer == "Help") {
		document.body.style.backgroundImage = "url(clowns.png)"

	} else (answer == "Drive away") {
		document.body.style.backgroundImage = "url(heights.jpg)"
	
};

const q2Btn = document.getElementById('qTwoBtn');

// when the user clicks, read their answer
q2Btn.onclick = function() {
	const answer = document.getElementById('spiders').value;

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(spiders.jpg)"

	} else if (answer == "No") {
		document.getElementById('qThree').style.display = "block"

	} 
	
};

const q3Btn = document.getElementById('qThreeBtn');

// when the user clicks, read their answer
q2Btn.onclick = function() {
	const answer = document.getElementById('spiders').value;

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(demons.jpg)"

	} else (answer == "No") {
		document.getElementById('qFour').style.display = "block"

	} 
	
};

const q4Btn = document.getElementById('qFourBtn');

// when the user clicks, read their answer
q2Btn.onclick = function() {
	const answer = document.getElementById('spiders').value;

	if (answer == "Yes") {
		document.body.style.backgroundImage = "url(spiders.jpg)"

	} else if (answer == "No") {
		document.getElementById('qFive').style.display = "block"

	} 
	
};





















