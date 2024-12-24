const sides = document.querySelectorAll('.aside-navigation')
const containerAsideMobile = document.querySelector('.container-aside-mobile')
const currentUrl = location.pathname

if (window.innerWidth >= 768) {
  containerAsideMobile.classList.add('hide')
}
console.log(currentUrl)
sides.forEach((side) => {
  if (side.attributes.target.value === currentUrl) {
    console.log('object')
    side.classList.add('active')
  }
  side.addEventListener('click', () => {
    sides.forEach((side) => side.classList.remove('active'))
    side.classList.add('active')
    location.href = `${side.attributes.target.value}`
  })
})

document.querySelector('.toggle-mobile').addEventListener('click', () => {
  containerAsideMobile.classList.toggle('hide')
})
