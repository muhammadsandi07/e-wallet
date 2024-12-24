const getPin = () => {
  return '123456'
}
document.querySelector('.btn-next').addEventListener('click', () => {
  console.log('click')
  const inputs = document.querySelectorAll('input')
  const errorMessage = document.querySelector('.error-pin')
  let result = ''
  console.log(inputs, 'ini inputs')
  inputs.forEach((input) => {
    console.log(input.children)
    if (input.value.length === 0) {
      errorMessage.textContent = 'silahkan isi pin terlebih dahulu'
      return
    } else {
      result += input.value
    }
  })
  if (result.length === 6) {
    if (result === getPin()) {
      errorMessage.textContent = 'pin baru tidak boleh sama dengan pin lama'
      return
    }
    console.log('Anda berhasil mengganti pin')
  }
})
