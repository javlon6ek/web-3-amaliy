// 5-masala. jamgarmaYigindi(arr) — har o'rinda shu o'ringacha bo'lgan elementlar yig'indisi
// Yechim: massiv bo'ylab yuraman, joriy yig'indiga elementni qo'shaman va uni yangi massivga joylayman.
function jamgarmaYigindi(arr) {
  const natija = [];
  let joriyYigindi = 0;
  for (let i = 0; i < arr.length; i++) {
    joriyYigindi += arr[i];
    natija.push(joriyYigindi);
  }
  return natija;
}

// Tekshiruvlar
console.log(jamgarmaYigindi([3, 1, 4, 1, 5])); // kutilgan: [3, 4, 8, 9, 14]
console.log(jamgarmaYigindi([10, -10])); // kutilgan: [10, 0]
console.log(jamgarmaYigindi([])); // kutilgan: [] (chegaraviy holat, bo'sh massiv)
console.log(jamgarmaYigindi([7])); // kutilgan: [7] (chegaraviy holat, bitta element)
console.log(jamgarmaYigindi([-2, -3, 5])); // kutilgan: [-2, -5, 0] (o'z misolim)
