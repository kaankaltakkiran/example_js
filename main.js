
//let yerine var kullanıldığında hata alınmaz.
let userName="kaan";
console.log(userName);
/* let let=12;
console.log(let); */
const pi=3.14;
console.log(pi);
//!Sabitler büyük harfle yazılır.
const RENK_KIRMIZI = "#F00";
console.log(RENK_KIRMIZI);

var yönetici;
var isim="kaan";
yönetici=isim;
console.log(yönetici);
let a=5;
let b="sa";
console.log(a+b);
//!Ters tırnak kullanarak string içinde değişken kullanılabilir.
let c=`Merhaba ${b}`;
console.log(c);
`Hello`
//!Veri türü dönüşümü
let age="5";
console.log(typeof age);
let numberAge=Number(age);
console.log(typeof numberAge);