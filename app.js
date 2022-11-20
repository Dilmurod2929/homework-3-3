let dollar = 11250;
let euro = 12864;

let ticket = 350; /*dollar*/
let living = 680; /*dollar*/
let tour = 230; /*euro*/

let som = +prompt("To'lov summasini kriting !!! ");

let xarajat = ticket * dollar + living * dollar + tour * euro;
// console.log(xarajat);
// console.log(som);
if (som > xarajat || som == xarajat) {
  alert(`
    Chipta uchun:${ticket * dollar} so'm \n
    Mehmonhona uchun :${living * dollar} so'm \n
    Sayohat uchun:${tour * euro} so'm \n
    Ummumiy summa :${xarajat} so'm\n
    Oq yol omadingizni bersin !!!
    `);
} else if (som < xarajat) {
  alert("3-kundan keyin keling");
} else {
  alert("Iltmos summa krting ! ! !");
}
