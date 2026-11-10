// 1-masala. ikkilikkaOgir(n) — sonni ikkilik satrga aylantirish (toString(2) ishlatilmaydi)
// Yechim: sonni 2 ga bo'laman, har safar qoldiqni (0 yoki 1) satrning boshiga qo'shaman.
function ikkilikkaOgir(n) {
  if (n === 0) {
    return "0";
  }
  let natija = "";
  let qolganSon = n;
  while (qolganSon > 0) {
    natija = (qolganSon % 2) + natija;
    qolganSon = Math.floor(qolganSon / 2);
  }
  return natija;
}

// Tekshiruvlar
console.log(ikkilikkaOgir(13)); // kutilgan: "1101"
console.log(ikkilikkaOgir(0)); // kutilgan: "0" (chegaraviy holat)
console.log(ikkilikkaOgir(8)); // kutilgan: "1000" (o'z misolim)
console.log(ikkilikkaOgir(255)); // kutilgan: "11111111" (o'z misolim)
