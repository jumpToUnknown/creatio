let USD = 443.58
let EUR = 489.35

let KZT = +prompt("Количество тенге которое вы хотите конвентировать: ")

USD = KZT / USD
EUR = KZT / EUR

alert(`В Долларах: ${USD.toFixed(2)}, В Евро: ${EUR.toFixed(2)}`)

