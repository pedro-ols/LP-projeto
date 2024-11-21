    // Esboço do javascript para a página de simulados
    // Para demonstração de compreenssão fora feito um comentário para cada lógica abaixo
    
    // Pega o documento e adiciona um evento, evento esse que irá esperar o DOM ser carregado pra então executar a função
    document.addEventListener('DOMContentLoaded', function() {
        // Determina uma váriavel chamada submitButton para assim calcular a pontuação baseada no submit-button
        const submitButton = document.querySelector('.submit-button');
        // Determina uma variável chamada resultsContainer para servir como container de resultados
        const resultsContainer = document.querySelector('.your-score');

        // Criação da função que ficará responsável por calcular a pontuação do usuário
        function calculateScore() {
            // Determina que o score inicial tem o valor de 0
            let score = 0;
            // Determina que todas as questões vão ser selecionadas
            const questions = document.querySelectorAll('.specific-question');

            // Vai iterar sobre cada uma das perguntas
            questions.forEach((question, index) => {
                // Obtêm a resposta correta sobre cada pergunta utilizando do atributo data-correct
                const correctAnswer = question.getAttribute('data-correct');
                // Determina que a resposta selecionada irá adicionar mais um valor no score
                const selectedAnswer = getSelectedAnswer(index + 1);
                // Verifica se o usuário realmente selecionou uma resposta
                if(selectedAnswer) {
                    // Verifica se a resposta está correta e caso não estiver ela irá definir que o index + 1 é falso, ou seja, não irá acontecer
                    if(selectedAnswer != correctAnswer) {
                        showAnswerFeedback(index + 1, false);            
                    } else {
                        // Depois da verificação, caso a resposta esteja correta um valor de 1 será adicionado ao score e assim index + 1 será tratado como verdadeiro
                        score++;
                        showAnswerFeedback(index + 1, true);
                    }
                } else {
                    // Se a resposta não foi selecionada, mostra que a questão não foi respondida
                    showAnswerFeedback(index + 1, null);
                }
            });

            // Retorna a pontuação
            return score;
        }

        // A função pega a resposta selecionada via o número da questão
        function getSelectedAnswer(questionNumber) {
            // Determina uma variável selectedOption para checá-la
            const selectedOption = document.querySelector(`input[name="answer${questionNumber}"]:checked`);
            // Se não foi checada é retornado a valor null
            return selectedOption ? selectedOption.value : null;
        }

        // A função showAnswerFeedback irá selecionar o número da questão e mostrar se ela está correta
        function showAnswerFeedback(questionNumber, isCorrect) {
            // Determina uma variavél para selecionar o feedback da questão baseada em seu número
            const feedbackContainer = document.querySelector(`.feedback-${questionNumber}`);
            // Se não haver um feedbackContainer o programa irá retornar
            if(!feedbackContainer) return;

            // Cria uma condicionar para mostrar o feedback
            if(isCorrect === null) {
                // Mostra pelo feedbackContainer um conteúdo de texto falando que a questão não foi respondida
                feedbackContainer.textContent = 'Essa questão não foi respondida';
                // Determina o estilo da cor do feedbackContainer igual a cinza
                feedbackContainer.style.color = 'gray';
            // Cria uma outra condicional pra caso a resposta estiver correta
            } else if (isCorrect) {
                // Mostra pelo feedbackContainer que a questão está correta
                feedbackContainer.textContent = 'Parabéns, você acertou!'
                // A cor para essa condicional é verde
                feedbackContainer.style.color = 'green';
            } else {
                // Mostra pelo feedbackContainer que a questão está errada
                feedbackContainer.textContent = 'A resposta assinalada está incorreta';
                // A cor para caso a questão estiver errada é vermelha
                feedbackContainer.style.color = 'red';
            }
        } 

        // Adiciona um evento no botão de envio, que basicamente vai ativar um evento quando clicado
        submitButton.addEventListener('click', function(event) {
            // Previni que a configuração padrão do botão seja ativada
            event.preventDefault();

            // Determina que a pontuação final seja feita pela função calculateScore()
            const score = calculateScore();
            // Determina que o número de questões totais vai ser determinada pelo tamanho de .specific-questions
            const totalQuestions = document.querySelectorAll('.specific-question').length;

            // Determina que o container de resultados será determinado pelo seguinte html:
            resultsContainer.innerHTML = `
            <h1 class="score-title">Pontuação Final:</h1>
            <p class="total-score">${score} / ${totalQuestions}</p>`
        })
})