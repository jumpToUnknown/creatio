function playGame (users) {
  let answer = +prompt(`${users[0]} загадайте число для ${users[1]}`)
  while(true) {
    let userAnswer = prompt(`${users[1]} угадайте число или для выхода набирите q: `)
    
    if (userAnswer == "q") {
      return 0
    }

    userAnswer = parseInt(userAnswer)

    if (userAnswer > answer) {
      alert("Ваш ответ больше загаданного числа.")
    } else if (userAnswer < answer) {
      alert("Ваш ответ меньше загаданного числа.")
    } else if (userAnswer == answer) {
      alert("Вы угадали!")
      users = users.reverse()
      playGame(users)
    } else {
      alert("Необходимо ввести число!")
    }
  }
}

let users = []

for (let i = 0; i < 2; i++) {
  let user = prompt(`Игрок ${i + 1}: `)
  users.push(user)
}

playGame(users)