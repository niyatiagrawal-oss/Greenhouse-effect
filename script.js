function checkAnswers() {
    let score = 0;

    // Collect answers
    let answers = {
        q1: 'b',
        q2: 'b',
        // Add the correct answers for the remaining questions here
    };

    // Check if the answers match
    for (let question in answers) {
        let selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    // Display results
    let resultText = `You scored ${score} out of 10.`;
    if (score === 10) {
        resultText += " Excellent work!";
    } else if (score >= 7) {
        resultText += " Good job!";
    } else {
        resultText += " Keep learning!";
    }
    document.getElementById('result').innerHTML = resultText;
}
