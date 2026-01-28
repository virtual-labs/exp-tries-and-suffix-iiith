class InsertExercise extends Trie {

  constructor(container1, container2, wordList = [], insertions = []) {
    super(container1, 0);
    this.wordContainer = container2.substring(1);
    this.words = wordList;
    this.insertions = insertions;
    for (let word of this.words) {
      this.insert(word);
    }
    for (let node of document.getElementById(this.container).getElementsByClassName('node')) {
      node.data.treenode.selected = false;
    }
    $('#' + this.container + ' .node').click(function () {
      if (this.data.treenode.selected === false) {

      } else if (this.data.treenode.selected === true) {
        $(this).removeClass('selected');
        this.data.treenode.selected = false;
      } else if (this.data.treenode.selected === false) {
        $(this).addClass('selected');
        this.data.treenode.selected = true;
      }
    });

    this.interact(this.insertions[Math.floor(this.insertions.length * Math.random())]);
  }


  reset() {
    $('#' + this.container + ' .node').removeClass('correct wrong selected');
    this.interact(this.insertions[Math.floor(this.insertions.length * Math.random())]);
  }


  interact(word) {
    this.wordTrie = new Trie('#' + this.wordContainer, 0);
    this.wordTrie.insert(word);
    let path = this.path(word);
    if (path.pop() != false) {
      throw Exception("WordAlreadyInTrie");
    }

    $('#' + this.container + ' .node').click(function () {
      $(this).addClass('selected');
    });
    $('#' + this.wordContainer + ' .node').click(function () {
      $(this).addClass('selected');
    });
    $('#' + this.container + ' .node').addClass('wrong');
    $('#' + this.wordContainer + ' .node').addClass('wrong');

    $('#' + this.container + ' .node').addClass('optional');
    $('#' + this.wordContainer + ' .node').addClass('optional');

    $(document.getElementById(this.wordContainer).getElementsByClassName('node')[path.length]).addClass('correct').removeClass('wrong');
    $(document.getElementById(this.container).getElementsByClassName('node')[path[path.length - 1]]).addClass('correct').removeClass('wrong');
  }
}
