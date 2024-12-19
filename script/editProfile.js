const prevData = {
  fullName: 'saya',
  email: 'saya@gmail.com',
}

document.querySelector('.btn-submit').addEventListener('click', () => {
  const inputs = document.querySelectorAll('input')
  const fullName = document.querySelector('#fullName').value
  const phone = document.querySelector('#phone').value
  const email = document.querySelector('#email').value
  const errorFullname = document.querySelector('.error-fullName')
  const errorphone = document.querySelector('.error-phone')
  const erroremail = document.querySelector('.error-email')
  const formValidate = new Event('formValidate')
  const regexFullName = /^[a-zA-Z\s]+$/ //
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  errorFullname.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  errorphone.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  erroremail.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })

  if (errorFullname.checkVisibility({ visibilityProperty: true })) {
    errorFullname.style.visibility = 'hidden'
  }
  if (errorphone.checkVisibility({ visibilityProperty: true })) {
    errorphone.style.visibility = 'hidden'
  }
  if (erroremail.checkVisibility({ visibilityProperty: true })) {
    erroremail.style.visibility = 'hidden'
  }
  if (fullName == '' || fullName == undefined || fullName.length == 0) {
    errorFullname.dispatchEvent(formValidate)
    errorFullname.textContent = 'full name required'
  }
  if (phone == '' || phone == undefined || phone.length == 0) {
    errorphone.dispatchEvent(formValidate)
    errorphone.textContent = 'full name required'
  } else if (phone.length < 6 || phone.length > 13) {
    errorphone.dispatchEvent(formValidate)
    errorphone.textContent = 'number phone not valid'
  }
  if (email == '' || email == undefined) {
    erroremail.dispatchEvent(formValidate)
    erroremail.textContent = 'email required'
    return
  } else if (!regexEmail.test(email)) {
    erroremail.dispatchEvent(formValidate)
    erroremail.textContent = 'email not valid'
    return
  }

  const formInput = new FormData()
  inputs.forEach((input) => {
    if (input.type === 'text') {
      formInput.append(input.name, input.value)
    }

    if (input.type === 'email') {
      formInput.append(input.name, input.value)
    }
    if (input.type === 'number') {
      formInput.append(input.name, input.value)
    }
  })
})
