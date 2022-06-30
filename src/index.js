module.exports = function reverse (n) {
    console.log(num);
  console.log(num.toString().length);
  let str = num.toString();
  let result = '';
  if (num >= 0) {  
  for (i=0; i < str.length; i++) {
    //console.log(result);
    result = str[i]+result;
     }
  console.log(result);
  return result;
  }
  else {

for (i=1; i < str.length; i++) {
    //console.log(result);
    result = str[i]+result;
     }
  console.log(-result);
  return -result;
  }
}
