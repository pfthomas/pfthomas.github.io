function check(){
    let question1 = document.quiz.question1.value;
    let question2 = document.quiz.question2.value;
    let question3 = document.quiz.question3.value;
    let question5 = document.quiz.question5.value;
    
    let correct = 0;
    let review = [];
    //checkbox variables
    
    //Check if question is correct, if incorrect then the question review will be added to the review array
    if (question1 == "1991"){
        correct++
    } else {
        review.push("1). The correct answer is '1991'.");
    }
    if (question2 == "JavaScript"){
        correct++
    } else {
        review.push("2). The correct answer is 'Javascript'.");
    }
    if (question3 == "HTML5"){
        correct++ 
    } else {
        review.push("3). The correct answer is 'HTML5'.");
    }
    //question 4
    //There has got to be a better way to do this
    let checkboxes = document.getElementsByName("question4");
    let checkedValues = [];
    
    //save checkboxes that are selected into array
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked){
            checkedValues.push(checkboxes[i].value);
        }
    }

    let correctAnswers = ["HTML_is_not_case_sensetive", "HTML_has_the_power_to_nest_elements_inside_of_other_elements"];
    let allCorrect = true;
    //if the lengths do not match then it cannot be correct, 
    if (checkedValues.length !== correctAnswers.length) {
        allCorrect = false;
    } else {
        //Use indexOf() to see if correct answers match the checked boxes
        for (let j = 0; j < correctAnswers.length; j++) {
            if (checkedValues.indexOf(correctAnswers[j])=== -1) {
                allCorrect = false;
                break;
            }
        }
    }
    if(allCorrect) {
        correct++;
    } else {
        review.push("4). The correct answers are 'HTML is not case sensetive' and 'HTML has the power to nest elements inside of other elements'.");
    }

    //Question 5
    if (question5 == "Angle_brackets"){
        correct++
    } else {
        review.push("5). The correct answer is 'Angle brackets'.");
    }

    // create results variable and decide whether user passed or failed quiz, then appends correct answer review to incorrect answers
    let results = "You got " + correct + " correct.<br>";
    if (correct >=3) {
        results += "You passed!"
    }
    else results += "you failed...";
    //if any questions are incorrect, add review to the results variable
    if (review.length > 0) {
        results += "<br><u>Review:</u><br>" + review.join("<br>");
    }
    //show info
    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("number_correct").innerHTML = results;
    document.getElementById("restart").style.display = "inline-block";
    document.getElementById("button").style.visibility = "hidden";
}
//function that restarts quiz and hides/removes previous quiz information
function restartQuiz() {
    document.quiz.reset();

    document.getElementById("after_submit").style.visibility = "hidden";
    document.getElementById("number_correct").innerHTML = "";
    document.getElementById("restart").style.display = "none";
    document.getElementById("button").style.visibility = "visible";
}

//function to make the drop down hamburger on smaller screens function
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});


