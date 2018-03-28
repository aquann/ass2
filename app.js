var images = {
    good: "images/GoodSamaritan.jpg",
    bad: "images/Serialkiller.jpg",
    neutral: "images/OnTheEdge.jpg"
};

function getScore() {
    
    // calculate score
    let score = 0;
    let answers = document.getElementsByTagName ("select");
        for (let i = 0; i < 12; i ++ ){
            score += +answers[i].value;
        }
    var img = new Image();
    var message = document.createElement("p");
    document.body.appendChild(message);
    document.body.appendChild(img);
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
const q1Btn = document.getElementById('q1Btn');

// when the user clicks, read their answer
q1Btn.onclick = getScore;
