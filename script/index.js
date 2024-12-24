const toggle = document.querySelector('.toggle')
const dropDown = document.querySelector('.dropdown-landing')
toggle.addEventListener('click', () => {
  dropDown.classList.toggle('hide')
})
document.querySelector('.signIn').addEventListener('click', () => {
  console.log('signin')
  location.href = '/login.html'
})
document.querySelector('.signUp').addEventListener('click', () => {
  console.log('sign up')
  location.href = '/register.html'
})
document.querySelector('.signIn-mobile').addEventListener('click', () => {
  console.log('signin')
  location.href = '/login.html'
})
document.querySelector('.signUp-mobile').addEventListener('click', () => {
  console.log('sign up')
  location.href = '/register.html'
})
