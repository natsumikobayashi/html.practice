console.log("hello, world!", "how's it going?");

const text = "おいしい";
const text2 = text + "店";
const text3 = `${text}店`;

console.log(text2);
console.log(text3);

let text4 = "新しい";
text4 ="古い";
const text5 = text4 + "店";
const text6 = `${text4}店`;

console.log(text5);
console.log(text6);

const prefecture = "東京都";
const city = "板橋区";
const number ="0-0000";

let home = `${prefecture}${city}${number}`;
console.log(home);

home = `${prefecture} ${city} ${number}`;
console.log(home);