function scoreCategory(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 80 && score <= 89) {
        return "Very Good";
    } else if (score >= 70 && score <= 79) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function showScoreCategory() {
    let scoreInput = document.getElementById("scoreInput");
    let score = parseInt(scoreInput.value);
    let scoreCategoryElement = document.getElementById("scoreCategory");

    if (isNaN(score)) {
        scoreCategoryElement.textContent = "Please enter a valid score!";
    } else {
        scoreCategoryElement.textContent = "Your category is: " + scoreCategory(score);
    }
}