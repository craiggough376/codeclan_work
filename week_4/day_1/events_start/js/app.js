document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  // 1. - Grab the element
  const button = document.querySelector('#button')

  // 2. Add event listener (type? click? Submit?)
  button.addEventListener('click', handleButtonClick)


  const textInput = document.querySelector('#input')
  textInput.addEventListener('input', handleInput)


  const select = document.querySelector('#select')
  select.addEventListener('change', handleSelectChange)


  const form = document.querySelector('#form')
  form.addEventListener('submit', handleFormSubmit)

});


// 3. Function called when the event(click) happens
const handleButtonClick = function(){
  const resultParagraph = document.querySelector('#button-result')
  resultParagraph.textContent = "The button has definitely been clicked!!!"
}


const handleInput = function(event){
  const resultParagraph = document.querySelector('#input-result')
  resultParagraph.textContent = event.target.value
}


const handleSelectChange = function(event){
  const resultParagraph = document.querySelector('#select-result')
  resultParagraph.textContent = "You selected " + event.target.value
}


const handleFormSubmit = function(event){
  event.preventDefault()
  const resultParagraph = document.querySelector('#form-result')
  resultParagraph.textContent = "Your name: " + event.target.first_name.value + " " + event.target.last_name.value
}
