import dataUser from '../data/auth.mjs'

const getData = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let cekEmail = dataUser.find((item) => {
        if (item.email === email) {
          return item
        }
      })
      if (dataUser.length != 0) {
        if (cekEmail) {
          resolve(cekEmail)
        } else {
          reject(new Error('email tidak dikenali'))
        }
      } else {
        reject(new Error('data tidak tersedia'))
      }
    }, 3000)
  })
}

// toggle type password
const showPwd = (event) => {
  event.preventDefault()
  const password = document.querySelector('#password')
  if (password.type !== 'password') {
    password.type = 'password'
    return
  }
  password.type = 'text'
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
      location.href = 'http://127.0.0.1:5500/dashboard.html'
    }
  }, 5000)
}

// handle login
const handleLogin = async (event) => {
  event.preventDefault()

  const emailInput = document.querySelector('#email').value
  const passwordInput = document.querySelector('#password').value
  const pwErr = document.querySelector('.password-error')
  const emailErr = document.querySelector('.email-error')
  const btnSubmit = document.querySelector('.btn-submit')
  const errMessage = document.querySelector('.error')
  const formValidate = new Event('formValidate')
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  emailErr.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  pwErr.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })

  if (pwErr.checkVisibility({ visibilityProperty: true })) {
    pwErr.style.visibility = 'hidden'
  }
  if (emailErr.checkVisibility({ visibilityProperty: true })) {
    emailErr.style.visibility = 'hidden'
  }

  if (emailInput == '' || emailInput == undefined) {
    emailErr.dispatchEvent(formValidate)
    emailErr.textContent = 'email required'
  } else if (!emailRegex.test(emailInput)) {
    emailErr.dispatchEvent(formValidate)

    emailErr.textContent = 'email not valid'
  }

  if (passwordInput == '' || passwordInput == undefined) {
    pwErr.dispatchEvent(formValidate)
    pwErr.textContent = 'password required'
    return
  } else if (passwordInput.length < 8) {
    pwErr.dispatchEvent(formValidate)
    pwErr.textContent = 'Password too short. Minimum 8 characters required'
    return
  }

  const inputs = document.querySelectorAll('.content-login > form input')
  const formInput = {}

  inputs.forEach((input) => {
    if (input.type === 'email') {
      Object.assign(formInput, { [input.name]: input.value })
    }
    if (input.type === 'password' && input.name === 'password') {
      Object.assign(formInput, { [input.name]: input.value })
    }
  })
  console.log(formInput, 'ini form input')

  try {
    document.querySelector('.container-loader').classList.add('active')
    document.querySelector('.loader').classList.add('active')
    const resp = await getData(emailInput)
    const { email, password } = resp
    document.querySelector('.loader').classList.remove('active')
    document.querySelector('.container-loader').classList.remove('active')

    if (emailInput !== email || passwordInput !== password) {
      throw Error('email dan password salah')
    }
    alertBox('success', 'login success')
    const { id } = resp
    localStorage.setItem('ID', resp.id)
    localStorage.setItem('LOGGED', true)
  } catch (error) {
    errMessage.dispatchEvent(formValidate)
    alertBox('failed', error.message !== 'undefined' ? error.message : error)
    document.querySelector('.loader').classList.remove('active')
    document.querySelector('.container-loader').classList.remove('active')
  }
}

document.querySelector('.show-password').addEventListener('click', showPwd)
document.querySelector('.btn-submit').addEventListener('click', handleLogin)
