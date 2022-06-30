module.exports = function reverse (n) {
  console.log(n);
  console.log(n.toString().length);
  let str = Math.abs(n).toString();
  console.log(str);
  console.log(str.toString().length);
  let result = '';
  let result2 = '';
  for (i=0; i < str.length; i++) {
    const char = str[i];
     if (char !== '0') result = char + result;
    else if (char === '0' && str[i + 1] && str[i + 1] !== '0') result = char + result;
    //console.log(result);
    console.log(result);
     }
   console.log(result);
  return result;
}
