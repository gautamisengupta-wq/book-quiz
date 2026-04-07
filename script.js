function answer(type) {
    let result = "";

    if (type === "fantasy") {
        result = "✨ You should read Harry Potter!";
    } 
    else if (type === "romance") {
        result = "💖 You should read Pride and Prejudice!";
    } 
    else {
        result = "🔍 You should read Sherlock Holmes!";
    }

    document.getElementById("result").innerText = result;
}
