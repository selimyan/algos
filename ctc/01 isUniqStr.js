const isUniq = (str) => {

  let uniq = {}

  for (let i = 0; i < str.length; i++) {

    let ch = str[i]

    if (uniq[ch]) return false
    else uniq[ch] = true
  }

  return true
}