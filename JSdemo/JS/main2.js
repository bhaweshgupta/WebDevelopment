var newListitem = document.createElement('li');
newListitem.innerHTML = 'I was added by LS';
document.getElementById('yrr').innerHTML = 'hi';
document.getElementById('ol').appendChild(newListitem);

function myfun() {
  var x = document.forms['myform'];
  var text = '';
  var i;
  for (var i = 0; i < x.length; i++) {
    text += x.elements[i].value + '<br>';
  }
  document.getElementById('getval').innerHTML = text;
}

function changecolor() {
  document.getElementById('changecolor').style.color = 'red';
}
