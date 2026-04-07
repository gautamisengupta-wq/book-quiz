let score = {
    fantasy: 0,
    romance: 0,
    mystery: 0
};

let current = 1;
let totalQuestions = 3;

function answer(type) {
    score[type]++;

    document.getElementById("q" + current).classList.add("hidden");
    current++;

    if (current <= totalQuestions) {
        document.getElementById("q" + current).classList.remove("hidden");
    } else {
        showResult();
    }
}

function showResult() {
    let result = "";

    if (score.fantasy > score.romance && score.fantasy > score.mystery) {
        result = "You should read: Harry Potter";
    } 
    else if (score.romance > score.mystery) {
        result = "You should read: Pride and Prejudice";
    } 
    else {
        result = "You should read: Sherlock Holmes";
    }

    document.getElementById("result").innerText = result;
    document.getElementById("restart").classList.remove("hidden");
}
