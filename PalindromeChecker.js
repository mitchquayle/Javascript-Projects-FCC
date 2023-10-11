function palindrome(str) {

  let alteredStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let arr = alteredStr.split('');
  let reverseArr = [...arr].reverse();

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] !== reverseArr[i]) {
      return false;
    } 
  }
  return true;

}
palindrome("eye");
palindrome("_eye")
palindrome("A man, a plan, a canal. Panama")