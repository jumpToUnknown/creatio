function getArray(num) {
  let arr = []

  for (let i = 0; i < num; i++) {
    arr.push(i + 1)
  }

  return arr
}

function sumArray(arr) {
  let res = 0

  for (let i = 0; i < arr.length; i++) {
    res += arr[i];
  }

  return res
}

function getMax (arr) {
  let max = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i]
    }
  }

  return max
}

function getMin (arr) {
  let min = arr[0]

  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }

  return min
}

function getEvens (arr) {
  let evens = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i])
    }
  }

  return evens
}

let newArray = getArray(parseInt(prompt("Введите число элементов: ")))

let sum = sumArray(newArray)

let max = getMax(newArray)

let min = getMin(newArray)

let evens = getEvens(newArray)

alert(`Массив элементов: ${newArray}\nсумма массива: ${sum}\nмаксимальный элемент: ${max}\nминимальный элемент: ${min}\nчётные числа: ${evens}`)

