const sliceByNumber = (array, number) => {
  const length = Math.ceil(array.length / number);
  return new Array(length)
    .fill()
    .map((_, i) => array.slice(i * number, (i + 1) * number));
};
const pick = () => {
  const array = [
    "しまぶー",
    "モーリー",
    "hiroki",
    "やまね",
    "hiyoko",
    "たっつー",
    "みやさん",
    "かたん",
    "ken",
    "AKIMIDO",
    "Motonosuke",
    "たかさき",
    "cti",
    "shintaro",
    "ゆっきー"
  ];
  let length = array.length;
  for (let i = length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  console.log(array);
  return array;
};
let members = pick();
console.log(sliceByNumber(members, members.length / 4));
