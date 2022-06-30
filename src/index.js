module.exports = function reverse (n) {
    let str = num.toString();
    let result = '';
    for (i=0; i < str.length; i++) {
      result = str[i]+result;
    }
    return result;
}
