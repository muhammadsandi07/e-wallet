const width = window.innerWidth
const sectionCashFlow = document.querySelector('.section-cash-flow')
const cashFlow = document.querySelector('.cash-flow')
console.log(cashFlow)
if (width >= 768) {
  cashFlow.classList.add('active')
  console.log('oi')
}

const toogle = document.querySelector('.toggle')
const dropDown = document.querySelector('.container-dropdown')
toogle.addEventListener('click', () => {
  dropDown.classList.toggle('active')
  console.log('active')
})
