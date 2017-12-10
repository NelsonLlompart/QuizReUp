function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var question9 = document.quiz.question9.value;
var question10 = document.quiz.question10.value;
	var correct = 0;
	
	if(question1 == "yes"){
		correct++;
	}
	if(question2 == "yes"){
		correct++;
	}
	if(question3 == "no"){
		correct++;
	}
	if(question4 == "yes"){
		correct++;
	}
	if(question5 == "yes"){
		correct++;
	}
	if(question6 == "yes"){
		correct++;
	}
	if(question7 == "no"){
		correct++;
	}
	if(question8 == "yes"){
		correct++;
	}
	if(question9 == "no"){
		correct++;
	}
	if(question10 == "yes"){
		correct++;
	}
	var messages =["Nice!", "Naughty!", "Neutral."];
	var pics = ["img/Nice.gif", "img/Naughty.gif", "img/Neutral.gif"]
	
	var range;
	if (correct < 5){
		range = 2;
	}
	if (correct > 5){
		range = 1;
	}
	if (correct == 5){
		range = 3;
	}
document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[range];
	
document.getElementById("number_correct").innerHTML = "You are...";
document.getElementById("pics").src = pics[range];
}