// 824382
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const KQ = 56;
let myNumber = getRandomIntInclusive(00, 99);
let soLanMua = 1;
console.log('Lan ' + soLanMua + ': ' + myNumber);

for(;myNumber != KQ;) {
    myNumber = getRandomIntInclusive(00, 99);
    ++soLanMua;
    console.log('Lan ' + soLanMua + ': ' + myNumber)
}

console.log(soLanMua);
