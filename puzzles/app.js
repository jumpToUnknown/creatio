const answers = [
  ["Салют", "салют", "фейерверк", "Фейерверк"],
  ["Водопроводный кран", "водопроводный кран", "кран", "Кран", "Душ","душ"],
  ["Год", "год", "один год", "Один год"],
]

const inputs = document.querySelectorAll(".puzzle-input")

const btn = document.querySelector("#puzzle-btn")

let correct_answers = 0
let values = []

const span = document.querySelector("#correct-answers")



btn.addEventListener("click", () => {
  inputs.forEach(e => {
    values.push(e.value)
  })
  
  for (let i = 0; i < values.length; i++) {
    if (answers[i].includes(values[i])) {
      correct_answers++
      inputs[i].parentElement.classList.add("correct")
    }
    else {
      inputs[i].parentElement.classList.add("wrong")
    }
  }

  span.innerText = correct_answers

})