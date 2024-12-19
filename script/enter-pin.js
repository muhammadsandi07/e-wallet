const savePin = (pin) => {
  console.log('pin anda adalah ', pin)
  return { pin: pin }
}
document.querySelector('button').addEventListener('click', () => {
  const inputs = document.querySelectorAll('input')
  const errorMessage = document.querySelector('.error')
  let result = ''

  inputs.forEach((input) => {
    if (input.value.length === 0) {
      errorMessage.textContent = 'silahkan isi pin terlebih dahulu'
      return
    } else {
      result += input.value
    }
  })
  if (result.length === 6) {
    savePin(result)
  }
})
