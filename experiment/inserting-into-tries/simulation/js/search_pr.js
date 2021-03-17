class SearchPractice extends Trie {

  constructor(container, bindings, wordList) {
    super(container, 0);
    this.bindings = bindings.substring(1);
    this.words = wordList;
    for (let word of this.words) {
      this.insert(word);
    }
    for (let node of document.getElementById(this.container).getElementsByClassName('node')) {
      node.data.treenode.selected = false
    }
    $('#' + this.container + ' .node').click({ graph: this }, function (event) {
      let graph = event.data.graph;
      if (this.data.treenode.id === graph.correct[graph.position]) {
        $(this).addClass('selected correct');
        graph.position += 1;
        if (graph.position === graph.correct.length - 1) {
          console.log("Correct Answer");
          setTimeout(function (graph) { graph.begin(); }, 2000, graph);
        }
        this.data.treenode.selected = true;
      } else {
        $(this).addClass('selected wrong');
        this.data.treenode.selected = true;
        setTimeout(function (node) { $(node).removeClass('selected wrong'); node.data.treenode.selected = false; }, 500, this);
      }
    });
    this.begin();
  }


  interact(word) {
    this.correct = this.path(word);
    this.position = 0;
  }


  begin() {
    $('#' + this.container + ' .node').removeClass('selected correct wrong');
    let searchFor = this.words[Math.floor(Math.random() * this.words.length)]
    this.interact(searchFor);
    $('#' + this.container + ' .node').addClass('optional');
    $('.data').html(searchFor);
  }
}
