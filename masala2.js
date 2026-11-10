// 2-masala. bosHarfKatta(s) — har bir so'zning birinchi harfi katta, qolganlari kichik
// Yechim: gapni bo'sh joy bo'yicha so'zlarga bo'laman, har bir so'zni tuzatib, qayta birlashtiraman.
function bosHarfKatta(s) {
  const sozlar = s.split(" ");
  const tuzatilgan = sozlar.map(function (soz) {
    if (soz.length === 0) {
      return soz;
    }
    return soz[0].toUpperCase() + soz.slice(1).toLowerCase();
  });
  return tuzatilgan.join(" ");
}

// Tekshiruvlar
console.log(bosHarfKatta("urganch DAVLAT universiteti")); // kutilgan: "Urganch Davlat Universiteti"
console.log(bosHarfKatta("")); // kutilgan: "" (chegaraviy holat)
console.log(bosHarfKatta("web dasturlash")); // kutilgan: "Web Dasturlash" (o'z misolim)
console.log(bosHarfKatta("a")); // kutilgan: "A" (o'z misolim, bitta harf)
