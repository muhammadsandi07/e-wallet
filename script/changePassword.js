const oldData = {
  name: 'saya',
  email: 'saya@gmail.com',
  password: '12345678',
}

const showPwd = (event) => {
  event.preventDefault()
  const password = document.querySelector('#existing-password')
  if (password.type !== 'password') {
    password.type = 'password'
    return
  }
  password.type = 'text'
}
const showNewPwd = (event) => {
  event.preventDefault()
  const password = document.querySelector('#new-password')
  if (password.type !== 'password') {
    password.type = 'password'
    return
  }
  password.type = 'text'
}
const showConfirmNewPwd = (event) => {
  event.preventDefault()
  const password = document.querySelector('#confirm-password')
  if (password.type !== 'password') {
    password.type = 'password'
    return
  }
  password.type = 'text'
}

document.querySelector('.show-ext').addEventListener('click', showPwd)
document.querySelector('.show-new').addEventListener('click', showNewPwd)
document
  .querySelector('.show-confirm-new')
  .addEventListener('click', showConfirmNewPwd)

document.querySelector('.btn-submit').addEventListener('click', () => {
  const oldPassword = document.querySelector('#existing-password').value
  const newPassword = document.querySelector('#new-password').value
  const confPassword = document.querySelector('#confirm-password').value
  const errMsgExt = document.querySelector('.ext-err')
  const errMsgNew = document.querySelector('.new-err')
  const errMsgConf = document.querySelector('.conf-err')
  const formValidate = new Event('formValidate')

  errMsgExt.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  errMsgNew.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  errMsgConf.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })

  if (errMsgExt.checkVisibility({ visibilityProperty: true })) {
    errMsgExt.style.visibility = 'hidden'
  }
  if (errMsgNew.checkVisibility({ visibilityProperty: true })) {
    errMsgNew.style.visibility = 'hidden'
  }
  if (errMsgConf.checkVisibility({ visibilityProperty: true })) {
    errMsgConf.style.visibility = 'hidden'
  }

  if (oldPassword == '' || oldPassword == undefined) {
    errMsgExt.dispatchEvent(formValidate)
    errMsgExt.textContent = 'password required'
  } else if (oldPassword.length < 7) {
    errMsgExt.dispatchEvent(formValidate)
    errMsgExt.textContent = 'password length minimun 8 character'
  }
  if (newPassword == '' || newPassword == undefined) {
    errMsgNew.dispatchEvent(formValidate)
    errMsgNew.textContent = 'password required'
  } else if (newPassword.length < 7) {
    errMsgNew.dispatchEvent(formValidate)
    errMsgNew.textContent = 'password length minimun 8 character'
  }
  if (confPassword == '' || confPassword == undefined) {
    errMsgConf.dispatchEvent(formValidate)
    errMsgConf.textContent = 'password required'
    return
  } else if (confPassword.length < 7) {
    errMsgConf.dispatchEvent(formValidate)
    errMsgConf.textContent = 'password length minimun 8 character'
    return
  }

  const newData = { ...oldData, password: newPassword }
  console.log(newData)
})
