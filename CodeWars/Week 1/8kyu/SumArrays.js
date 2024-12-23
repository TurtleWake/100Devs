function sum(numbers) {
    let total = 0; // Start with 0
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i]; // Add each number to total
    }
    return total; // Return the sum
}


console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);

// Had to look at solutions to solve. Added to the Anki Deck! 