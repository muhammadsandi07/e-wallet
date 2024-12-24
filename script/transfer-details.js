const getPin = () => {
  return '123456'
}
const transfer = (success) => {
  console.log('proses transfer')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(true)
      } else {
        reject(new Error(success))
      }
    }, 3000)
  })
}

const toogle = document.querySelector('.toggle')
const popUpPin = document.querySelector('main#content  section:nth-child(2) ')
const popUpSuccess = document.querySelector(
  'main#content > section:nth-child(3) '
)
const popUpFailed = document.querySelector(
  'main#content > section:nth-child(4) '
)
console.log(popUpPin)

const dropDown = document.querySelector('.container-dropdown')
const backgroundPopUp = document.querySelector('.relative')

toogle.addEventListener('click', () => {
  dropDown.classList.toggle('active')
})

const inputAmount = document.querySelector('input[type="number"]')
const inputNote = document.querySelector('textarea')
const errorMessage = document.querySelector('.error')
const amountError = document.querySelector('.amount-error')
const btnNext = document.querySelector('.btn-next')
const formValidate = new Event('formValidate')
amountError.addEventListener('formValidate', function () {
  this.style.visibility = 'visible'
})
console.log(inputAmount.value, 'ini amount')
document.querySelector('.btn-submit').addEventListener('click', () => {
  if (amountError.checkVisibility({ visibilityProperty: true })) {
    amountError.style.visibility = 'hidden'
  }
  if (inputAmount.value.length < 1) {
    amountError.dispatchEvent(formValidate)
    amountError.textContent = 'silahkan isi jumlah nilai transfer'
  } else {
    if (Number(inputAmount.value) < 10000) {
      amountError.dispatchEvent(formValidate)
      amountError.textContent = 'jumlah nilai transfer kurang dari Rp.10.000'
      return
    } else {
      backgroundPopUp.classList.remove('hide')
      popUpPin.classList.remove('hide')
    }
  }
})

btnNext.addEventListener('click', async () => {
  const inputs = document.querySelectorAll('input#input-pin')
  const errorMessage = document.querySelector('.error-pin')
  let result = ''
  try {
    inputs.forEach((input) => {
      if (input.value.length === 0) {
        throw Error('silahkan masukkan pin ada terlebih dahulu')
      } else {
        result += input.value
      }
    })
    if (result.length === 6) {
      if (result === getPin()) {
        const success = false
        const transferSuccess = await transfer(success)
        console.log(transferSuccess)
        if (transferSuccess) {
          popUpPin.classList.add('hide')
          popUpSuccess.classList.remove('hide')
        } else {
        }
      } else {
        throw Error('pin yan anda masukkan salah')
      }
    }
  } catch (error) {
    if (error.message === 'false') {
      popUpPin.classList.add('hide')
      popUpFailed.classList.remove('hide')
      return
    }

    errorMessage.textContent = error.message
  }
})

document.querySelector('.btn-try-again').addEventListener('click', () => {
  location.href = '/transfer-details.html'
})
document.querySelector('.btn-back').addEventListener('click', () => {
  location.href = '/dashboard.html'
})
