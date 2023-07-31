let colors = ['is-info', 'is-success', 'is-warning', 'is-danger', 'is-link']
let str_arr = ['j', 'f', 'k', 'd', ' ']

let begin = document.querySelector(".begin")
let progress = document.getElementById("prog")
let buttons = document.querySelector('.buttons')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

var count_right = 0

var errors_count = 0

var maxErrors = 20

var maxRights = 20

function drawBoard() {
  for (let index = 0; index < maxRights; index++) {
  let rand = getRandomInt(colors.length);
      buttons.insertAdjacentHTML("afterbegin",
      `<button class='game-buttons button is-large 
      ${colors[rand]}' id='${str_arr[rand]}'>${str_arr[rand]}			
      </button>`);
  }
}

document.addEventListener('keydown', StartGame, {
  once: true
});

function StartGame(e) {
  if (e.key == "Enter") {
      drawBoard()
      begin.style.display = "none"
      setTimeout(mainGame, 1000)
  }
}

function mainGame() {
  document.addEventListener('keyup', press)
}



function press(e) {
  let elements_arr = document.querySelectorAll(".game-buttons")
  if (e.key == elements_arr[0].id) { 
      elements_arr[0].remove()
      count_right++; 
  } else {
      errors_count++; 
      progress.value = errors_count;
      if (errors_count >= maxErrors) { 
          let fail = confirm("Game over! Хотите еще раз поиграть?") 
          if (fail) {
              document.location.reload() 
          } else {
            document.location.reload()
            begin.style.display = "block"
          }
      }
  }
  if (count_right >= maxRights) {
      setTimeout(alert("Вы выйграли!"), 1000)
      let win = confirm("Хотите поиграть еще?")
      if(win){
          errors_count = 0
          count_right = 0
          maxErrors -= 5
          if (maxErrors < 1) {
            maxErrors = 1
          }
          maxRights += 5
          progress.value = errors_count;
          progress.max = maxErrors
          drawBoard();
          begin.style.display = "none"
          mainGame()
      } else {
        document.location.reload()
        begin.style.display = "block"
      }
  }
}