//js file innnterte by google angine throght add to html page 

//Function to get calculate Sum And Average for any array numbers
const calculateSumAndAverage = (numbers) => {
    if (numbers.length === 0) {
        return { sum: 0, average: 0 };
    }

    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    const average = sum / numbers.length;

    return { sum, average };
}

// Example usage:
const numbers = [20, 40, 60];
const { sum, average } = calculateSumAndAverage(numbers);

console.log(`Sum :${sum},average:${average}`);       // Output: Sum: ,avaragee:



const removeDuplicates=(strings) =>
    Array.from(new Set(strings));

// Example usage:
const strings = ["apple", "banana", "apple", "orange", "banana", "grape"];
const uniqueStrings = removeDuplicates(strings);

console.log(uniqueStrings); // Output: ["apple", "banana", "orange", "grape"]
 

























