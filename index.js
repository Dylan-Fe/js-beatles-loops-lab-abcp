function theBeatlesPlay(mus, inst) {
  var newArr = [];
  
  for(let i = 0; i < mus.length; ++i) {
    var newStr = `${mus[i]} plays ${inst[i]}`;
    newArr.push(newStr);
  }
  return newArr;
}

