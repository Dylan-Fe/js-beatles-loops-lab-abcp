function theBeatlesPlay(mus, inst) {
  var newArr = [];
  
  for(let i = 0; i < mus.length; ++i) {
    var newStr = `${mus[i]} plays ${inst[i]}`;
    newArr.push(newStr);
  }
  return newArr;
}

function johnLennonFacts(facts) {
  var factsB = [];
  
  for(let i = 0; i < facts.length; ++i) {
    var factC = facts[i] + "!!!";
    factsB.push(factC);
  }
  return factsB;
}