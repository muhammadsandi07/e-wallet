const getEmail = () => {
  return 'saya@gmail.com'
}

document.querySelector('.btn-submit').addEventListener('click', () => {
  const email = document.querySelector('input').value
  const messageError = document.querySelector('.email-error ')
  const formValidate = new Event('formValidate')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  messageError.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  if (email == '' || email == undefined) {
    messageError.dispatchEvent(formValidate)
    messageError.textContent = 'email required'
  } else if (!emailRegex.test(email)) {
    messageError.dispatchEvent(formValidate)

    messageError.textContent = 'email not valid'
  }

  if (!email == getEmail()) {
    messageError.dispatchEvent(formValidate)
    messageError.textContent = 'email incorrect'
    return
  }
  location.href = 'enter-pin'
})
