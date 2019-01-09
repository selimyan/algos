const productExceptSelf = (nums) => {
  if (nums.length < 2) return null

  let productsArr = []
  let memoProduct = {}

  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i]

    if (memoProduct[currentNum]) {
      productsArr.push(memoProduct[currentNum])
    } else {
      let subarray = nums.slice(0, i).concat(nums.slice(i + 1))

      let product = subarray.reduce((accumulator, el) => {
        return accumulator * el
      })

      productsArr.push(product)
      memoProduct[currentNum] = product
    }
  }

  return productsArr
};