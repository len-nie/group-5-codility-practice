function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let maxLength = 0;
 
    for (const num of nums) {
     if (!numSet.has(num - 1)) {
       let currentNumber = num;
      let currentLength = 1;
 
      while (numSet.has(currentNumber + 1)) {
       currentNumber +=1;
       currentLength += 1;
      }
      maxLength = Math.max(maxLength, currentLength);
     }
   }
     return maxLength;
    }