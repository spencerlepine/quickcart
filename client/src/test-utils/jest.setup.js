const CONSOLE_FAIL_TYPES = ['error', 'warn']

CONSOLE_FAIL_TYPES.forEach((type) => {
  console[type] = (message) => (
    `Failing due to console.${type} while running test!\n\n${message}`
  )
})