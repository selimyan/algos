const isPermutation = (str1, str2) => {
  let short = str1.length < str2.length ? str1 : str2
  let long = str1.length < str2.length ? str2 : str1
  let longLetters = objectify(long)

  for (let i = 0; i < short.length; i++) {
    let ch = short[i]
    if (longLetters[ch] && longLetters[ch] > 0) {
      longLetters[ch] = longLetters[ch] - 1
    }
    else return false
  }

  return true
}

const objectify = (str) => {
  let obj = {}
  for (let i = 0; i < str.length; i++) {
    let ch = str[i]
    if (obj[ch]) obj[ch] = obj[ch] + 1
    else obj[ch] = 1
  }
  return obj
}