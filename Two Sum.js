/** Two Sum - Leetcode
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	  // Get Length of array
      arrayLength = nums.length
	  
	  // New array of nums less or equal to target
	  lessOrEqualNums = []
	  
	  // Indexes of less or equal nums in original list
	  lessOrEqualNumsIndexes = []
	  
	  // Loop through to find options
	  for (i = 0; i < arrayLength; i++) {
		  if (nums[i] <= target) {
			  // if less or equal, push index and location to new arrays
			  lessOrEqualNums.push(nums[i])
			  lessOrEqualNumsIndexes.push(i)
			  i++
		  } else {
			  // if less or equal, skip and go to the next one
			  i++
		  }
	  }
	  
	  // Length of new array of numbers
	  lessOrEqualNumsLength = lessOrEqualNums.length
	  
	  // Target Num 1
	  targetNum1 = 0
	  // Target Num 1 Index
	  targetNum1Index = 0
	  
	  // Target Num 2
	  targetNum2 = 0
	  // Target Num 2 Index
	  targetNum2Index = 0
	  
	  // Difference
	  difference = 0
	  
	  // Loop through to find target combo
	  for (j = 0; j < lessOrEqualNumsLength; j++) {
		  targetNum1 = lessOrEqualNums[j]
		  targetNum1Index = lessOrEqualNumsIndexes[j]
		  
		  // Finding the other value that we need
		  difference = target - targetNum1
		  
		  for (k = 0; k < lessOrEqualNumsLength; k++) {
			  
			  // if the value is equal to the difference, we found our number
			  if (difference == lessOrEqualNums[k]) {
				  // storing target num 2 value and location in original array 
				  targetNum2 = lessOrEqualNums[k]
				  targetNum2Index = lessOrEqualNumsIndexes[k]
				  { break; }
			  } else {
				  k++
			  }
		  }
	  }
	  
	  // Output Array
	  outputArray = []
	  
	  // Push and return target values and locations
	  outputArray.push(targetNum1Index)
	  outputArray.push(targetNum2Index)
	  
	  console.log(outputArray)
	  return outputArray
};


// -----

input1 = [2,7,11,15]
target1 = 9


twoSum(input1,target1)


// NOT WORKING AS OF 3/26/2022