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

  if (oldPassword.length <= 7) {
    errMsgExt.textContent = 'panjang password minimal 8 angka'
    return
  } else {
    if (oldPassword !== oldData.password) {
      errMsgExt.textContent = 'password yang anda masukkan salah'
      return
    }
  }
  if (newPassword.length <= 7) {
    errMsgNew.textContent = 'panjang password minimal 8 angka'
    return
  }
  if (confPassword.length <= 7) {
    errMsgExt.textContent = 'panjang password minimal 8 angka'
    return
  } else {
    if (confPassword !== newPassword) {
      errMsgConf.textContent = 'password tidak sama'
      return
    }
  }

  const newData = { ...oldData, password: newPassword }
  console.log(newData)
})
