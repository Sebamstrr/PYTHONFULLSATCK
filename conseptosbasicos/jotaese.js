function siempreHambriento(arr) {
    let delicioso = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "comida") {
        console.log("delicioso");
        delicioso = true;
      }
    }
    if (!delicioso) {
      console.log("Tengo hambre");
    }
  }
  
  siempreHambriento([3.14, "comida", "pastel", true, "comida"]); // esto debería mostrar "delicioso", "delicioso"
  siempreHambriento([4, 1, 5, 7, 2]); // esto debería mostrar "Tengo hambre"

  function highPass(arr, cutoff) {
    var filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > cutoff) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  
  var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
  console.log(result); // esperamos de vuelta [6, 8, 10, 9]

  function betterThanAverage(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    var average = sum / arr.length;
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > average) {
        count++;
      }
    }
    return count;
  }
  
  var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
  console.log(result); // esperamos 4 de vuelta

  function reverse(arr) {
    var reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }
  
  var result = reverse(["a", "b", "c", "d", "e"]);
  console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

  function fibonacciArray(n) {
    var fibArr = [0, 1];
    for (let i = 2; i < n; i++) {
      var nextFib = fibArr[i - 1] + fibArr[i - 2];
      fibArr.push(nextFib);
    }
    return fibArr;
  }
  
  var result = fibonacciArray(10);
  console.log(result); // esperamos de vuelta [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
