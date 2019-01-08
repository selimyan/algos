function pairSum(arr, k) {
  // initiate an object to hold elements
  let potentialPairs = {}

  // iterate through array
  for (let i = 0; i < arr.length; i++) {
    // for each element, calculate the difference with k
    let currentNum = arr[i]
    let pair = k - currentNum

    // if diff is found in the object, return true, else add key to object
    if (potentialPairs[pair]) return true

    potentialPairs[currentNum] = true
  }

  // return false if no elements are left in array
  return false
}