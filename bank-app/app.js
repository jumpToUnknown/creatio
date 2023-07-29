let amount = +prompt("Сумма вклада: ")
let percent = +prompt("Годовой процент: ")

for (let i = 0; i < 5; i++) {
  amount += amount * percent / 100
  alert(`Счёт за ${i+1}-й год: ${amount}`)
}