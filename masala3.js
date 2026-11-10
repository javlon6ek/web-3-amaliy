// 3-masala. engUzunSatr(arr) — massivdagi eng uzun satr (teng bo'lsa, birinchisi)
// Yechim: birinchi satrni eng uzun deb olaman, keyin faqat undan QAT'IY uzun satr uchrasa almashtiraman.
function engUzunSatr(arr) {
  if (arr.length === 0) {
    return "";
  }
  let engUzun = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > engUzun.length) {
      engUzun = arr[i];
    }
  }
  return engUzun;
}

// Tekshiruvlar
console.log(engUzunSatr(["olma", "banan", "nok"])); // kutilgan: "banan"
console.log(engUzunSatr(["ab", "cd"])); // kutilgan: "ab"
console.log(engUzunSatr(["bitta"])); // kutilgan: "bitta" (chegaraviy holat, bitta element)
console.log(engUzunSatr(["a", "abc", "ab", "xyz"])); // kutilgan: "abc" (o'z misolim, teng uzunlikda birinchisi)
console.log(engUzunSatr([])); // kutilgan: "" (chegaraviy holat, bo'sh massiv)
