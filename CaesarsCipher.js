function rot13(str) {

let rot13Str = "";

for (let i = 0; i < str.length; i++) {
const charCode = str.charCodeAt(i);
  if ((charCode >= 65) && (charCode <= 90 )) {
    if (charCode > 77) {
    rot13Str +=  String.fromCharCode(charCode - 13);
    } 
    else {
      rot13Str += String.fromCharCode(charCode + 13);
    }
} else {
  rot13Str += str[i]}
}

  return rot13Str;
}

rot13("SERR PBQR PNZC");