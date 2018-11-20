const isPermutation = (str1, str2) => {
  if (str1.length !== str2.length) return false

  let letters1 = objectify(str1)

  for (let i = 0; i < str2.length; i++) {
    let ch = str2[i]
    if (letters1[ch] && letters1[ch] > 0) {
      letters1[ch] = letters1[ch] - 1
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