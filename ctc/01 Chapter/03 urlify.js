const urlify = (str, num) => {
  let lastCh = '%20'
  let url = ''
  let urlLength = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ' && lastCh === '%20') {
      continue
    }
    else if (str[i] === ' ' && url.length > 0 && urlLength < num) {
      lastCh = '%20'
      url = url + lastCh
      urlLength++
    }
    else if (urlLength < num) {
      lastCh = str[i]
      url = url + str[i]
      urlLength++
    }
  }

  return url
}