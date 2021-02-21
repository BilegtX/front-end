function create() {
    var col = document.getElementById('col').value;
    var row = document.getElementById('row').value;
    console.log(col, row);
    var x = document.createElement('TABLE');
    x.setAttribute('id', 'mytable');
    for (let i = 0; i < row; i++) {
      var r = document.createElement('TR');
      for (let j = 0; j < col; j++) {
        var n = document.createElement('TD');
        var k = document.createTextNode('cell');
        n.appendChild(k);
        r.appendChild(n);
      }
      x.appendChild(r);
    }
    document.body.appendChild(x);
  }