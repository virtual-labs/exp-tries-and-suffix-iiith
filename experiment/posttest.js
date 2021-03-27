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
            question: "1. How many children would the root (^) have in the suffix tree of the word 'SHESELLSSEASHELLS'?", ///// Write the question inside double quotes
            answers: {
                a: "3", ///// Write the option 1 inside double quotes
                b: "5", ///// Write the option 2 inside double quotes
 		c: "13", ///// Write the option 3 inside double quotes
                d: "17", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

    {
      question: "2. In the suffix tree of 'SHESELLSSEASHELLS', S is a child of the root. How many direct children does this node containing S have?",  ///// Write the question inside double quotes
      answers: {
        a: "3 (H, E, S)",                  ///// Write the option 1 inside double quotes
        b: "3 (H, E, A) ",                  ///// Write the option 2 inside double quotes
	c: "4 (S, H, E, A", ///// Write the option 3 inside double quotes
        d: "Only 1 child ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "a"                ///// Write the correct option inside double quotes
    },

{
      question: "3. If you have a text file of n characters containing words all of which are under k characters in length, and you want to search for a word of length less than m in it, what can be the estimated complexity of this search? (Answers are in the form <PreprocessingTime, SearchTime>) Note: We are only trying to search for complete words, not patterns. ",  ///// Write the question inside double quotes
      answers: {
        a: "<O(N), O(K)>",                  ///// Write the option 1 inside double quotes
        b: "<O(N), O(M)>",                  ///// Write the option 2 inside double quotes
	c: "<O(NK), O(M)>", ///// Write the option 3 inside double quotes
        d: " <O(K), O(M)>", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
    },

{
      question: "4. Which of the following tasks can a Trie or a Suffix Tree be used for? (Select ALL that apply)",  ///// Write the question inside double quotes
      answers: {
        a: "In the Search feature of Microsoft Word. ",                  ///// Write the option 1 inside double quotes
        b: "In sorting emails based on date. ",                  ///// Write the option 2 inside double quotes
	c: "In Matching >[Regular Expressions](https://en.wikipedia.org/wiki/Regular_expression). (Patters of Text) ", ///// Write the option 3 inside double quotes
        d: "Finnding synonyms from a Dictionary ", ///// Write the option 4 inside double quotes
	e: "Suggesting autocomplete as you are typing.  ", ///// Write the option 5 inside double quotes
              },
      correctAnswer: "b"                ///// Write the correct option inside double quotes
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
