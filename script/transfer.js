const toogle = document.querySelector('.toggle')
const dropDown = document.querySelector('.container-dropdown')
toogle.addEventListener('click', () => {
  dropDown.classList.toggle('active')
  console.log('active')
})
