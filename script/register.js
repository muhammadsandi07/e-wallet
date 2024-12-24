const toggleTypeConfirmPassword = (event) => {
  event.preventDefault()
  const passwordConfirm = document.querySelector('#password-confirm')
  if (passwordConfirm.type !== 'password') {
    passwordConfirm.type = 'password'
    return
  }
  passwordConfirm.type = 'text'
  event.stopPropagation()
}

const toggleTypePassword = (event) => {
  event.preventDefault()
  const password = document.querySelector('#password')
  if (password.type !== 'password') {
    password.type = 'password'
    return
  }
  password.type = 'text'
  event.stopPropagation()
}
const alertBox = (status, message) => {
  console.log(message, 'ini message')
  const alert = document.querySelector('.alert')
  const messageBox = document.querySelector('.message')
  const icon = document.querySelector('.icon')
  const iconSuccess = document.createElement('img')
  const iconFailed = document.createElement('img')
  iconFailed.src = './../images/icon/circle-exclamation-solid.svg'
  iconFailed.title = 'failed'
  iconSuccess.src = './../images/icon/check-solid.svg'
  iconSuccess.title = 'success'
  messageBox.textContent = message
  if (status === 'success') {
    alert.classList.add('success')
    icon.appendChild(iconSuccess)
    alert.classList.remove('hide')
    alert.classList.add('show')
  } else {
    alert.classList.add('failed')
    icon.appendChild(iconFailed)
    alert.classList.remove('hide')
    alert.classList.add('show')
  }
  setTimeout(() => {
    alert.classList.add('hide')
    while (icon.firstChild) {
      icon.removeChild(icon.firstChild)
    }
    if (status === 'success') {
      location.href = 'http://127.0.0.1:5500/login.html'
    }
  }, 5000)
}
const handleRegister = async () => {
  const email = document.querySelector('#email').value
  const confirmPassword = document.querySelector('#password-confirm').value
  const password = document.querySelector('#password').value
  const pwErr = document.querySelector('.password-error')
  const emailErr = document.querySelector('.email-error')
  const pwConfirm = document.querySelector('.password-confirm-error')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const formValidate = new Event('formValidate')
  emailErr.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  pwErr.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  pwConfirm.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })

  const inputs = document.querySelectorAll('.content-register > form input')
  if (emailErr.checkVisibility({ visibilityProperty: true })) {
    emailErr.style.visibility = 'hidden'
  }
  if (pwErr.checkVisibility({ visibilityProperty: true })) {
    pwErr.style.visibility = 'hidden'
  }
  if (pwConfirm.checkVisibility({ visibilityProperty: true })) {
    pwConfirm.style.visibility = 'hidden'
  }
  const formInput = {}
  if (email == '' || email == undefined) {
    emailErr.dispatchEvent(formValidate)
    emailErr.textContent = 'email required'
  } else if (!emailRegex.test(email)) {
    emailErr.dispatchEvent(formValidate)
    emailErr.textContent = 'email not valid'
  }

  if (password == '' || password == undefined) {
    pwErr.dispatchEvent(formValidate)

    pwErr.textContent = 'password required'
  } else if (password.length < 8) {
    pwErr.dispatchEvent(formValidate)

    pwErr.textContent = 'Password too short. Minimum 8 characters required'
  }

  if (confirmPassword == '' || confirmPassword == undefined) {
    pwConfirm.dispatchEvent(formValidate)
    pwConfirm.textContent = 'confirm password required'
    return
  } else if (confirmPassword.length < 8) {
    pwConfirm.dispatchEvent(formValidate)
    pwConfirm.textContent = ' password too short. Minimum 8 characters required'
    return
  } else if (confirmPassword != password) {
    pwConfirm.dispatchEvent(formValidate)
    pwConfirm.textContent = 'Passwords do not match. Please try again.'
    return
  }
  const form = new FormData()
  inputs.forEach((input) => {
    if (input.type === 'email') {
      Object.assign(formInput, { [input.name]: input.value })
      form.append(input.name, input.value)
    }
    if (input.type === 'password' && input.name === 'password') {
      Object.assign(formInput, { [input.name]: input.value })
    }
  })

  console.log(formInput)
  console.log('to login')
  // localStorage.setItem('REGIST', )
  alertBox('success', 'pendaftaran berhasil')
  // try {
  // document.querySelector('.loader').classList.add('active')
  // const resp = await getData(email)
  // document.querySelector('.loader').classList.remove('active')
  // for (const element of resp) {
  //   if (element !== 'password' && element !== 'pin' && element !== 'email') {
  //     params.append({ [element]: resp[element] })
  //   }
  // }
  // localStorage.setItem('data', formInput)
  // console.log('login success')
  // location.href = 'http://127.0.0.1:5500/enter-pin.html'
  // } catch (error) {
  // alertBox('failed', error.message !== 'undefined' ? error.message : error)
  // document.querySelector('.loader').classList.remove('active')
  // document.querySelector('.container-loader').classList.remove('active')
  // }
}

document.querySelector('.btn-submit').addEventListener('click', handleRegister)
document
  .querySelector('.password')
  .addEventListener('click', toggleTypePassword)
document
  .querySelector('.confirm-password')
  .addEventListener('click', toggleTypeConfirmPassword)
