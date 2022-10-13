function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // pakai forEach aja
  cars.forEach(myFunction);

  function myFunction(car, _index, _array) {
    if (car.available) {
      result.push(car);
    }
  }
  console.log(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
