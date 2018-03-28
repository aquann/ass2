var images = {
    good: "images/GoodSamaritan.jpg",
    bad: "images/Serialkiller.jpg",
    neutral: "images/OnTheEdge.jpg"
};

function getScore() {
    var message = document.createElement("p");
    if (score < 0) {
        message.textContent = "You are a killer";
        img.src = images.bad;
    } else if (score > 0) {
         message.textContent = "Youre good";
        img.src = images.good;
    } else {
           img.src = images.neutral;
    }
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
