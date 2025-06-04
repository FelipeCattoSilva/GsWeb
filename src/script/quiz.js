document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultDiv = document.getElementById('result');

    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const answers = {
                q1: "b",
                q2: "a",
                q3: "a",
                q4: "b",
                q5: "b",
                q6: "a",
                q7: "c",
                q8: "c",
                q9: "b",
                q10: "a"
            };

            let score = 0;
            let total = Object.keys(answers).length;

            for (let key in answers) {
                const selected = quizForm.querySelector(`input[name="${key}"]:checked`);
                if (selected && selected.value === answers[key]) {
                    score++;
                }
            }

            resultDiv.textContent = `Você acertou ${score} de ${total} perguntas!`;
        });
    }
});