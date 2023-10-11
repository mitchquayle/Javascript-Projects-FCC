function convertToRoman(num) {
let convertedNum = "";

while (num != 0) {
  if (num > 999) {
    num -= 1000;
    convertedNum += "M";
  } else if (num >= 900) {
    num -= 900;
    convertedNum += "CM";
  } else if (num >= 500) {
    num -= 500;
    convertedNum += "D";
  } else if (num >= 400) {
    num -= 400;
    convertedNum += "CD";
  } else if (num >= 100) {
    num -= 100;
    convertedNum += "C";
  } else if (num >= 90) {
    num -= 90;
    convertedNum += "XC";
  } else if (num >= 50) {
    num -= 50;
    convertedNum += "L";
  } else if (num >= 40) {
    num -= 40;
    convertedNum += "XL";
  } else if (num >= 10) {
    num -= 10;
    convertedNum += "X";
  } else if (num >= 9) {
    num -= 9;
    convertedNum += "IX";
  } else if (num >= 5) {
    num -= 5;
    convertedNum += "V";
  } else if (num >= 4) {
    num -= 4;
    convertedNum += "IV";
  } else if (num >= 1) {
    num -= 1;
    convertedNum += "I";
  } 
}
 return convertedNum;
}

convertToRoman(36);
convertToRoman(2);