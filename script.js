let ismlar=["Amirxon", "Firdavs", "Ubaydulloh", "Moxir", "Shoxruh", "Mavlonbek", "Qudratilla", "Messi", "Yamal", "Ronaldo"];
let nharfBor=[];
let nharfYoq=[];
for (const ism of ismlar) {
if(ism.toLowerCase().includes("n")) {
nharfBor.push(ism);
}else{
nharfYoq.push(ism)
}
}
console.log(ismlar, "Barcha ismlar");
console.log(nharfBor, "n harfi bor ismlar");
console.log(nharfYoq, "n harfi yo'q ismlar");