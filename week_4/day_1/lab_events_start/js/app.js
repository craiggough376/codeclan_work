document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const button = document.querySelector('#button')
  button.addEventListener('click', handleButtonClick)

  const input = document.querySelector('#input')
  input.addEventListener('input', handleTextInput)

  const select = document.querySelector('#select')
  select.addEventListener('change', handlePizzaSelect)

  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)

})


const handleButtonClick = function(){
  const resultParagraph = document.querySelector('#button-result')
  resultParagraph.textContent = "Now Clicked!!"
}

const handleTextInput = function(event){
  const resultParagraph = document.querySelector('#input-result')
  resultParagraph.textContent = "You typed: " + event.target.value
}

const handlePizzaSelect = function(event){
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = "Your pizza is: " + event.target.value
}

const handleFormSubmit = function(event){
  event.preventDefault()
  const resultParagraph = document.querySelector('#form-result')
  const name = event.target.name.value
  const age = event.target.age.value
  resultParagraph.textContent = "Hi " + name + ". You are " + age + " years old!"
}