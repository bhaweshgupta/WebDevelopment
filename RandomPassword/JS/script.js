var keylist = 'abcdefghijklmnopqrstuvwxyz123456780!@#S%^&*';
var temp = '';
function genreatepass(plength) {
  temp = '';
  for (var i = 0; i < plength; i++) {
    var position = Math.floor(Math.random() * keylist.length);
    temp += keylist.charAt(position);
  }
  return temp;
}
function populateform(enterlength) {
  document.passgen.output.value = genreatepass(enterlength);
}
