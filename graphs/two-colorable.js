const twoColorable = (edges) => {
    const colors = edges.map(_ => null);
    colors[0] = true;
    const stack = [0];
  
    while (stack.length > 0) {
      const node = stack.pop();
      for (const connection of edges[node]) {
        if (colors[connection] === null) {
          colors[connection] = !colors[node];
          stack.push(connection);
        } else if (colors[connection] === colors[node]) {
          return false;
        }
      }
    }
    
    return true;
  }