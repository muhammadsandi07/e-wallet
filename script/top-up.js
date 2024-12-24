const errorAmount = document.querySelector('.error-amount ')
const errorMethod = document.querySelector('.error-method ')
const amount = document.querySelector('input[type="number"]')
const methods = document.querySelectorAll('input[type="radio"]')
const formValidate = new Event('formValidate')

const toogle = document.querySelector('.toggle')
const dropDown = document.querySelector('.container-dropdown')
toogle.addEventListener('click', () => {
  dropDown.classList.toggle('active')
  console.log('active')
})
document.querySelector('.btn-submit').addEventListener('click', () => {
  errorAmount.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  errorMethod.addEventListener('formValidate', function () {
    this.style.visibility = 'visible'
  })
  if (errorAmount.checkVisibility({ visibilityProperty: true })) {
    errorAmount.style.visibility = 'hidden'
  }
  if (errorMethod.checkVisibility({ visibilityProperty: true })) {
    errorMethod.style.visibility = 'hidden'
  }
  if (amount.value == '') {
    errorAmount.dispatchEvent(formValidate)
    errorAmount.textContent = 'silahkan isi jumlah nilai top up'
  } else {
    if (Number(amount.value) < 10000) {
      errorAmount.dispatchEvent(formValidate)
      errorAmount.textContent = 'jumlah nilai top up kurang dari Rp.10.000'
    }
  }
  let selected = false
  methods.forEach((method) => {
    if (method.checked) {
      selected = true
      return
    }
  })
  if (!selected) {
    errorMethod.dispatchEvent(formValidate)
    errorMethod.textContent = 'silahkan isi metode pembayaran'
  }

  // if (!methods.checked) {
  //   console.log(methods.checked, 'ini checked')
  //   errorAmount.dispatchEvent(formValidate)
  //   errorMethod.textContent = 'silahkan isi metode pembayaran'
  //   return
  // }

  console.log('selesai')
})
