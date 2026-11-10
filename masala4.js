// 4-masala. telefonFormatla(raqam) — "998901234567" ni "+998 (90) 123-45-67" ko'rinishiga keltirish
// Yechim: uzunlik 12 bo'lmasa xato matni qaytaraman, aks holda slice bilan bo'laklarga ajratib yig'aman.
function telefonFormatla(raqam) {
  if (raqam.length !== 12) {
    return "noto‘g‘ri raqam";
  }
  const operator = raqam.slice(3, 5);
  const birinchiQism = raqam.slice(5, 8);
  const ikkinchiQism = raqam.slice(8, 10);
  const uchinchiQism = raqam.slice(10, 12);
  return "+998 (" + operator + ") " + birinchiQism + "-" + ikkinchiQism + "-" + uchinchiQism;
}

// Tekshiruvlar
console.log(telefonFormatla("998901234567")); // kutilgan: "+998 (90) 123-45-67"
console.log(telefonFormatla("99890123")); // kutilgan: "noto‘g‘ri raqam"
console.log(telefonFormatla("998971112233")); // kutilgan: "+998 (97) 111-22-33" (o'z misolim)
console.log(telefonFormatla("")); // kutilgan: "noto‘g‘ri raqam" (chegaraviy holat, bo'sh satr)
console.log(telefonFormatla("9989012345678")); // kutilgan: "noto‘g‘ri raqam" (o'z misolim, 13 xonali)
