class SearchExercise extends Trie {

  constructor(container, bindings, wordsPositive, wordsNegative) {
    super(container, 0);
    this.words = wordsPositive;
    this.questions = wordsPositive.concat(wordsNegative);
    this.bindings = bindings;
    this.begin();
    for (let word of this.words) {
      this.insert(word);
    }
    for (let node of document.getElementById(this.container).getElementsByClassName('node')) {
      node.data.treenode.selected = false
    }
    $('#' + this.container + ' .node').click(function () {
      if (this.data.treenode.selected === true) {
        $(this).removeClass('selected');
        this.data.treenode.selected = false;
      } else {
        $(this).addClass('selected');
        this.data.treenode.selected = true;
      }
    })
  }


  check(found) {
    const word = this.selectedWord;
    let correct = this.path(word);
    let answers = this.graph.tree.getNodeDb()["db"].filter(node => node.selected === true).map(node => node.id);
    const nodes = document.getElementById(this.container).getElementsByClassName('node');
    const findSucceeded = correct.pop();
    $('#' + this.container + ' .node').addClass('wrong');
    for (let selectedAnswer of answers) {
      nodes[selectedAnswer].classList.add('selected');
    }
    for (let correctAnswer of correct) {
      nodes[correctAnswer].classList.add('correct');
    }
    // Checking if the answer was actually correct.
    if (findSucceeded !== found) return false;
    if (correct.length !== answers.length) return false;
    correct.sort();
    answers.sort();
    for (let i = 0; i < answers.length; i++) if (answers[i] !== correct[i]) return false;
    return true;
  }


  begin() {
    this.selectedWord = this.questions[Math.floor(Math.random() * this.questions.length)];
    $('#' + this.container + ' .node').removeClass('selected correct wrong');
    for (let node of this.graph.tree.getNodeDb()["db"]) {
      node.selected = false;
    }
  }
}
