function twoNumberSum(nums, target) {
  let numsObj = {}
  for (let i = 0; i < nums.length; i++) {
    let currentNum = nums[i]
    let pair = target - currentNum
    if (numsObj[pair] > -1) return [pair, currentNum].sort((a, b) => b < a)
    numsObj[currentNum] = i
  }
  return []
}