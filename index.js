// JavaScript Day 5
// Dizi İşlemleri

const arr = Array();
arr.push("münker", "erkadam", "adana"); // diziye eleman ekler
console.log(arr.length); // dizi uzunluğu
console.log(arr[1]); // dizinin 1. elemanı
console.log(arr.splice(0, 3)); // dizinin 0 ile 3 numara arasındaki elemanları çağırır.

// Dizi Değiştirme
const meyveler = ["elma", "armut", "karpuz", "kivi", "üzüm"];
console.log(meyveler);
meyveler[1] = "Kavun"; // 1. elemanı değiştirir ve yeni eleman atar.
console.log(meyveler);

// Dizi Temizleme
meyveler = []; // dizi temizler.
console.log(meyveler); // boş bir dizi