export function emailValidate(email, errorMessage) {
  if (email === '' || email === undefined) {
    errorMessage.textContent = 'email is required'
    return
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      errorMessage.textContent = 'email tidak valid '
      return
    }
  }
}
