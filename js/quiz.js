const form = document.getElementById('quiz-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const firstQuestion = document.querySelector('input[name="q1"]:checked');
    const secondQuestion = document.querySelector('input[name="q2"]:checked');
    const thirdQuestion = document.querySelector('input[name="q3"]:checked');

    const answer1 = firstQuestion.value;
    const answer2 = secondQuestion.value;
    const answer3 = thirdQuestion.value;

    const quizResult = document.getElementById('quiz-result');

    let conesScore = 0;
    let cupsScore = 0;
    let shakesScore = 0;

    if (answer1 === "cones") {
        conesScore++;
    } else if (answer1 === "cups") {
        cupsScore++;
    } else if (answer1 === "shakes") {
        shakesScore++;
    }

    if (answer2 === "cones") {
        conesScore++;
    } else if (answer2 === "cups") {
        cupsScore++;
    } else if (answer2 === "shakes") {
        shakesScore++;
    }

    if (answer3 === "cones") {
        conesScore++;
    } else if (answer3 === "cups") {
        cupsScore++;
    } else if (answer3 === "shakes") {
        shakesScore++;
    }

    if (conesScore > cupsScore && conesScore > shakesScore) {
        quizResult.innerHTML = `
            <div class="result-content">
                <img src="assets/waffle-cone-classic.webp" alt="Waffle Cone Classic">
                <p>You're a Cones person! 🍦 Easygoing and always on the move.</p>
            </div>
        `;
    } else if (cupsScore > conesScore && cupsScore > shakesScore) {
        quizResult.innerHTML = `
            <div class="result-content">
                <img src="assets/double-scoop-cup.webp" alt="Waffle Cone Classic">
                <p>You're a Cups person! 🍨 You like to slow down and savor it.</p>
            </div>
        `;
    } else {
        quizResult.innerHTML = `
            <div class="result-content">
                <img src="assets/cherry-pop-shake.webp" alt="Waffle Cone Classic">
                <p>You're a Shakes person! 🥤 Bold, fun, and always ready to sip.</p>
            </div>
        `;
    }
})