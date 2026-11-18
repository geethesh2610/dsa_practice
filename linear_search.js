function linearSearch(num, arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = array[index];
        if (element === num){
            return `Found at ${index}`
        }   
    }
    return "Not found"
}

const number = 378
const array = [17, 42, 89, 156, 234, 378, 451, 592, 703, 845]
const result = linearSearch(number, array)

console.log(result);

/*
Linear Search Algorithm

Linear Search works by traversing the array from the first element
to the last element, comparing each element with the target value.
The search stops when the target element is found or when the end
of the array is reached.

Time Complexity (Big O):
- Best Case: O(1)
  The target element is found at the first position.

- Average Case: O(n)
  On average, the target element is found somewhere in the middle
  of the array, requiring multiple comparisons.

- Worst Case: O(n)
  The target element is at the last position or does not exist
  in the array, so every element must be checked.

Space Complexity:
- O(1)
  No extra memory is used apart from a few variables.
*/