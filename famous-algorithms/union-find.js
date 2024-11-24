class UnionFind {
  constructor() {
    this.parents = {};
  }

  createSet(value) {
    this.parents[value] = value;
  }

  find(value) {
    if (!(value in this.parents)) return null;

    let currentParent = value;
    while (currentParent !== this.parents[currentParent]) {
      currentParent = this.parents[currentParent];
    }
    return currentParent;
  }

  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return;

    const valueOneRoot = this.find(valueOne);
    const valueTwoRoot = this.find(valueTwo);
    this.parents[valueTwoRoot] = valueOneRoot;
  }
}
