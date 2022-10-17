const loginBtn = document.getElementById('login')
const loginArea = document.getElementById('login-area')
const transArea = document.getElementById('transaction-area')
const depositBtn = document.getElementById('addDeposit')
const withdrawBtn = document.getElementById('addWithdraw')
const depositAmount = document.getElementById('depositAmount')
const withdrawAmount = document.getElementById('withdrawAmount')
// const currentDeposit = document.getElementById('currentDeposit')
// const currentBalance = document.getElementById('currentBalance')

loginBtn.addEventListener('click', () => {
  loginArea.style.display = 'none'
  transArea.style.display = 'block'
})

function updateSpanText(id, depositNumber) {
  const current = document.getElementById(id)
  const currentNumber = parseFloat(current.innerText)
  const totalAmount = depositNumber + currentNumber
  current.innerHTML = totalAmount
}

depositBtn.addEventListener('click', () => {
  const depositNumber = parseFloat(depositAmount.value)

  if (depositNumber < 0) {
    alert('Deposit number cannot be negative!')
  } else {
    updateSpanText('currentDeposit', depositNumber)

    updateSpanText('currentBalance', depositNumber)
  }

  document.getElementById('depositAmount').value = ''
})

withdrawBtn.addEventListener('click', () => {
  const withdrawNumber = parseFloat(withdrawAmount.value)

  updateSpanText('currentWithdraw', withdrawNumber)

  updateSpanText('currentBalance', -1 * withdrawNumber)

  document.getElementById('withdrawAmount').value = ''
})
