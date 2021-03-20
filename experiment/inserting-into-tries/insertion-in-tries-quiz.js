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
            question: "1. There is a Trie with the words [ CAT, CAGGLE, COG, CANOPY, CATIS ]. How many nodes does this Trie have including the start and end nodes?", ///// Write the question inside double quotes
            answers: {
                a: "5 Nodes", ///// Write the option 1 inside double quotes
                b: "16 Nodes", ///// Write the option 2 inside double quotes
 		c: "21 Nodes", ///// Write the option 3 inside double quotes
                d: "22 Nodes ", ///// Write the option 4 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

    {
      question: "2. What is the memory complexity of a Trie with no path compression?",  ///// Write the question inside double quotes
      answers: {
        a: "O(Number of Words)",                  ///// Write the option 1 inside double quotes
        b: "O(Length of the Longest Word) ",                  ///// Write the option 2 inside double quotes
	c: "O(Sum of Lengths of Words)", ///// Write the option 3 inside double quotes
        d: "O(Total Number of Unique Characters) ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "c"                ///// Write the correct option inside double quotes
    },

{
      question: "3. In the Trie with words [ HELLO, HELSINKI, HILBERT ] we are adding in the word HILLS. How many nodes will be created and added in this process?",  ///// Write the question inside double quotes
      answers: {
        a: "0 Nodes",                  ///// Write the option 1 inside double quotes
        b: "5 Nodes ",                  ///// Write the option 2 inside double quotes
	c: "2 Nodes", ///// Write the option 3 inside double quotes
        d: " 3 Nodes", ///// Write the option 4 inside double quotes
	e: " 1 Node ", ///// Write the option 4 inside double quotes
              },
      correctAnswer: "d"                ///// Write the correct option inside double quotes
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
