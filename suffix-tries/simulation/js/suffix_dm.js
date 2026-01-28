class SuffixTrie extends Trie {

  constructor(container, animateDelay = 500) {
    super(container, animateDelay);
  }


  prepare(word) {
    this.graph.tree.reload();
    for (let i = 0; i < word.length; i++) {
      setTimeout(function (graph) { graph.insert(word.substring(i)) }, this.delay * i, this);
    }
  }


  insert(word) {
    word = word.toUpperCase();
    let data = this.graph.tree.getNodeDb()["db"];
    this._insert(word, data[0], data);
  }
}
