function hasTargetSum(array, target) {
  let left = 0;
  let right = array.length - 1;
  array = array.sort();
  // Write your algorithm here
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      // Target found
      return true;
    } else if (sum < target) {
      // Move the left
      left++;
    } else {
      // Move the right
      right--;
    }
  }

  // Target sum not found
  return false;
}

/*
  Write the Big O time complexity of your function here
  O(n log n)
  the sort function takes O(log n) logarithmic time complexity
  while the while loop takes O(n) linear time hence the overall
  time complexity is O(n log n)
*/

/*
  Add your pseudocode here
  sort the the array
  run a while loop through the array while summing the iterated element + last element
  return true if target found else return false
*/

/*
  Add written explanation of your solution here
  sort the the array with the sort() method
  run a while loop through the array while summing the iterated element + last element
  with each iteration move the starting element by increamenting i
  return true if target found else return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
