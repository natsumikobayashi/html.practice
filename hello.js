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

console.log(text5, text6);

let password = "foooobar";
if (password.length < 6){
    console.log("パスワードが短すぎます");
} else {
    console.log("パスワードの長さは適切です");
}

let x = "foo";
let y = "";

if (x.length === 0 && y.length === 0) {
    "どちらの文字列も空です";
} else {
    "少なくともどちらかは空ではありません";
}

let firstname = "MICHAEL";
console.log(firstname);

let username = firstname.toLowerCase();
console.log(username + "@example.com");

firstname = "michael";
username = firstname.toUpperCase();
console.log(username + "@example.com");

let honey = "hoNeY BaDGer";
console.log(honey.includes("bad"));
console.log(honey.includes("BaD"));
console.log(honey.includes("hoNeY",1));
console.log(honey.includes("oNeY",1));
console.log(honey.includes("NeY",2));
console.log(/badger/i.test(honey));