function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct === "true"

    setStatusClass(document.body, correct)

    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct === "true")
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }

    if (correct) {
        quizScore++
    }

    document.getElementById('right_answer').innerText = quizScore