var form = document.querySelector('.formWithValidation')
var validateBtn = form.querySelector('.validateBtn')
var firstName = form.querySelector('.firstName')
var lastName = form.querySelector('.lastName')
var birthday = form.querySelector('.birthday')
var gender = form.querySelector('.gender')
var country = form.querySelector('.country')
var email = form.querySelector('.email')
var password = form.querySelector('.password')
var address = form.querySelector('.address')
var notes = form.querySelector('.notes')


var fields = form.querySelectorAll('.field')

var generateError = function (text){
	var error = document.createElement('div')
      error.className = 'error'
      error.style.color = 'red'
      error.innerHTML = 'cannot be blank'
      return error
}

var removeValidation = function (){
	var errors = form.querySelectorAll('.error')

  for (var i = 0; i < errors.length; i++) {
    errors[i].remove()
  }
}

var checkFieldsPresence = function (){
	 for (var i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('This field is required', fields[i])
      var error = generateError ('Cannot be blank')
      form[i].parentElement.insertBefore(error, fields[firstName])
    }
  }
}

//var checkPasswordMatch = function() {
//	if (password.value !== password.value) {
//    console.log('This field is not valid')
//   var error = generateError ('This field is not valid')
//    password.parentElement.insertBefore(error, password)
//  }
//}

form.addEventListener('submit', function (event) {
  event.preventDefault()

  removeValidation()
	
	checkFieldsPresence()

//  checkPasswordMatch()
	alert('Validation passed.')
})