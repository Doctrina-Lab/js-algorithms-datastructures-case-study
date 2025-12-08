function fibMemoization(n, mem = [undefined, 1, 1]) {
  if (mem[n] !== undefined) { return mem[n] }
  mem[n] = fibMemoization(n - 1) + fibMemoization(n - 2)
  return mem[n]
}

// Bottom-Up approach
function fibTabulation(n) {
  if (n <= 2) { return 1 }
  let fibNumbers = [0, 1, 1]
  for (let i = 3; i <= n; i++) {
    fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2]
  }
  return fibNumbers[n]
}

module.exports = { fibMemoization, fibTabulation }