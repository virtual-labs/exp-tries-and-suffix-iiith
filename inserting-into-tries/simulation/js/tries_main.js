class Trie {

  constructor(container, animateDelay = 500) {
    this.container = container.substring(1);
    this.config = {
      chart: {
        "container": container,
        "rootOrientation": "WEST",
        "animation": {
          "nodeSpeed": 500,
          "nodeAnimation": "linear",
          "connectorsSpeed": 500,
          "connectorsAnimation": "linear"
        },
        "node": {
          "collapsable": false
        },
        "connectors": {
          "style": {
            "stroke": "rgb(23, 102, 150)",
            "stroke-opacity": 1.0
          }
        }
      },
      nodeStructure: {
        "text": { "name": "^" },
      },
      scrollbar: "fancy"
    };
    this.delay = animateDelay;
    this.graph = new Treant(this.config);
    this.fullComments = false;
  }


  _insert(word, pointer, data) {
    if (this.fullComments !== false && word.length !== 0) {
      this.fullComments.innerHTML = "Inserting Letter " + word[0] + " with " + word.substring(1) + " remaining.";
    } else if (this.fullComments !== false && word.length === 0) {
      this.fullComments.innerHTML = "The Insertion is complete!";
    }

    if (word.length === 0) return true;
    let letter = word[0]
    let found = false;
    if (pointer.children) {
      for (let childId of pointer.children) {
        if (data[childId].text.name === letter) {
          found = true;
          pointer = data[childId];
        }
      }
      if (!found) {
        if (this.fullComments !== false) {
          this.fullComments.innerHTML += " Creating a new node for it, since it's not in the tree.";
        }
        this.graph.tree.addNode(pointer, { text: { name: letter } })
        pointer = data[pointer.children[pointer.children.length - 1]];
      }
    } else {
      if (this.fullComments !== false) {
        this.fullComments.innerHTML += " Creating a new node for it, since it's not in the tree.";
      }
      this.graph.tree.addNode(pointer, { text: { name: letter } })
      pointer = data[pointer.children[0]];
    }
    if (this.delay != 0) {
      setTimeout(function (graph) { graph._insert(word.substring(1), pointer, data) }, this.delay, this);
    } else {
      this._insert(word.substring(1), pointer, data);
    }
  }

  insert(word) {
    word = word.toUpperCase() + '$'
    let data = this.graph.tree.getNodeDb()["db"]
    this._insert(word, data[0], data)
  }


  _search(word, pointer, data) {
    if (this.fullComments !== false) {
      this.fullComments.innerHTML = "Searching Letter " + word[0] + " with " + word.substring(1) + " remaining.";
    }

    if (word.length === 0) {
      if (this.fullComments !== false) {
        this.fullComments.innerHTML = "We found the word as we encountered the $.";
      }
      return true;
    }
    let found = false;
    let letter = word[0]
    if (!pointer.children) { return false; }
    for (let childId of pointer.children) {
      if (data[childId].text.name === letter) {
        found = true;
        pointer = data[childId];
        pointer.HTMLclass = "active";
        document.getElementById(this.container).getElementsByClassName('node')[pointer.id].classList.add('active');
      }
    }
    if (!found) { 
      if (this.fullComments !== false) {
        this.fullComments.innerHTML = "Could not find the word, " + word[0] + " does not exist.";
      }
      return false; 
    }
    if (this.delay != 0) {
      setTimeout(function (graph) { graph._search(word.substring(1), pointer, data); }, this.delay, this);
    } else {
      this._search(word.substring(1), pointer, data);
    }
  }

  search(word) {
    word = word.toUpperCase() + '$'
    let data = this.graph.tree.getNodeDb()["db"]
    let pointer = data[0];
    document.getElementById(this.container).getElementsByClassName('node')[0].classList.add('active');
    pointer.HTMLclass = "active";
    return this._search(word, pointer, data);
  }


  _path(word, pointer, data) {
    if (word.length === 0) return [true];
    let found = false;
    let letter = word[0];
    if (!pointer.children) return [false];
    for (let childId of pointer.children) {
      if (data[childId].text.name === letter) {
        found = childId;
        pointer = data[childId];
      }
    }
    if (found === false) { return [false]; }
    return [found].concat(this._path(word.substring(1), pointer, data));
  }

  path(word) {
    word = word.toUpperCase() + '$'
    let data = this.graph.tree.getNodeDb()["db"]
    return [0].concat(this._path(word, data[0], data));
  }
}
