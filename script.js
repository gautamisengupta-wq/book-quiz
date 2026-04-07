let score = {
    fantasy: 0,
    romance: 0,
    mystery: 0
};

let current = 1;
let totalQuestions = 3;

function answer(type) {
    score[type]++;

    // Hide current question
    document.getElementById("q" + current).style.display = "none";

    current++;

    // Show next question OR result
    if (current <= totalQuestions) {
        document.getElementById("q" + current).style.display = "block";
    } else {
        showResult();
    }
}

function showResult() {
    let result = "";

    if (score.fantasy > score.romance && score.fantasy > score.mystery) {
        result = "📚 Recommendation: Harry Potter";
    } 
    else if (score.romance > score.mystery) {
        result = "📚 Recommendation: Pride and Prejudice";
    } 
    else {
        result = "📚 Recommendation: Sherlock Holmes";
    }

    // Show result clearly
    let resultBox = document.getElementById("result");
    resultBox.style.display = "block";
    resultBox.innerText = result;

    // Show restart button if you have one
    let restartBtn = document.getElementById("restart");
    if (restartBtn) {
        restartBtn.style.display = "block";
    }
}
