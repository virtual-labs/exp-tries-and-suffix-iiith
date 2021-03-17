/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Upto how many children can each node in the trie have?", ///// Write the question inside double quotes
            answers: {
                a: "26 (As many letters as in the Alphabet) ", ///// Write the option 1 inside double quotes
                b: "27 (As many letters as in the Alphabet + 1) ", ///// Write the option 2 inside double quotes
 		c: "Depends on the size of the longest word ", ///// Write the option 3 inside double quotes
                d: "Depends on the size of the shortest word ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2.  The number of '$' characters in a Trie equals:",  ///// Write the question inside double quotes
      answers: {
        a: "The number of letters in the alphabet",                  ///// Write the option 1 inside double quotes
        b: "The number of insert operations performed.",                  ///// Write the option 2 inside double quotes
	c: "The number of search operations performed. ", ///// Write the option 3 inside double quotes
        d: "The number of unique words entered into the Trie ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
    },

{
      question: "3. If the letters '^', 'A', 'N', 'T', are encountered consecutively when searching but there is no '$' attached directly to the letter 'T', then which of the following are true?",  ///// Write the question inside double quotes
      answers: {
        a: "The Word 'ANT' is present in the Trie and has been found.",                  ///// Write the option 1 inside double quotes
        b: "The Word 'ANT' might be present somewhere else in the Trie but has not been found.",                  ///// Write the option 2 inside double quotes
	c: "The Word 'ANT' is not present, but other words starting with the letters 'ANT...' might be. ", ///// Write the option 3 inside double quotes
        d: "The word ANT is not present, and is not the prefix or suffix of any other string.", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },



        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
