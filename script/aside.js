const sides = document.querySelectorAll('.aside-navigation')
const currentUrl = location.pathname
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
