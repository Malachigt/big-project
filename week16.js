// Write code inside the functions
// You will have to figure out what parameters to include
// All functions must use recursion

function lengthOfString(str, len = 0) {
  // If the length is 0 (base case), return len (0).
  // if (str.length === 0) return len;
  if (!str.length) return len;

  // Remove the first letter of the string
  let restOfString = str.substring(1)

  // Call function again, with updated string and len
  return lengthOfString(restOfString, ++len);
}

function sumOfArray(ArrayOne, sum = 0) {
  // This function returns the sum of all of the numbers in a given array.
  if (!ArrayOne.length) return sum;
  let elements = ArrayOne .pop()
  return sumOfArray(ArrayOne, sum + elements)
}

function findMax(MaxFound, Max = Number.NEGATIVE_INFINITY) {
  // This function returns the largest number in a given array.
if (!MaxFound.length)
return Max
let element = MaxFound.pop()
return findMax(MaxFound, Math.max(element, Max))

}

function factorial(ans,n) {
  // This function returns the factorial of a given number.
  if (n === 0) return 1;
  return n * factorial(ans, n-1);
}

function fibonacci(n,ans= 1, prev= 1) {
  if (n=== 0) return prev
  return fibonacci(n-1, ans + prev,ans)
  // This function returns the Nth number in the fibonacci sequence.
  // https://en.wikipedia.org/wiki/Fibonacci_number
  // For this function, the first two fibonacci numbers are 1 and 1
}

function coinFlips(n, str= "",arr=[]) {
  if (n ===0) return arr
  hstr = str + "H"
  tstr = str + "T"
  arr.push(hstr)
  arr.push(tstr)
  arr= coinFlips(n-1, hstr,arr)
  return coinFlips(n-1,tstr,arr)
  
  // This function returns an array of all possible outcomes from flipping a coin N times.
  // Input type: Integer
  // For example, coinFlips(2) would return the following:
  // ["HH", "HT", "TH", "TT"]
  // H stands for Heads and T stands for tails
  // Represent the two outcomes of each flip as "H" or "T"
}

function letterCombinations(letters,str="",arr = []) {
  if (letters.length=== 0)return arr
  for(const letter of letter)
  arr.push(str + letter)
for(const index in letters){
const Ls =array.from (letters)
Ls.slice(idx,idx+1)
arr = letterCombinations(Ls,str + letters[idx], arr)
  }
return arr

  // This function returns an array of all combinations of the given letters
  // Input type: Array of single characters
  // For example, letterCombinations(["a","b","c"]) would return the following:
  // ["a","b","c","ab","ac","ba","bc","ca","cb","abc","acb","bac","bca","cab","cba"]
}

module.exports = {
  lengthOfString,
  sumOfArray,
  findMax,
  factorial,
  fibonacci,
  coinFlips,
  letterCombinations,
};