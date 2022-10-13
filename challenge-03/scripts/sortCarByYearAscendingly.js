function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  // aku ganti jadi let, bingung soalnya hahaha
  let result = [...cars];
  
  // Tulis code-mu disini
	
	
  // copas fungsi dari internet
  function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
		// cuma diubah disini aja
        if(arr[j-1].year>arr[j].year){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }

  result = bubbleSort(result)
  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
