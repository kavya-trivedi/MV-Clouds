// Create a local text file that contains words in it. Using JavaScript read the words from a text file and create a recursive function that identifies the very first item that has recurred in the word. It returns the identified item with the index where it first appeared and the very next index where it reappeared - entirely as an object.
// Ex.first word from file - “BTEJHBERSD” ➞ {“E”: [2, 6]}
// 2nd word from file - “JPDETRETXD” ➞ {“E”: [3, 6]}
// … and go on.


const fs = require('fs')

function findFirstRecurring(word, index = 0, seen = {}) {
    if (index >= word.length) return null;

    const char = word[index];
    if (seen[char] !== undefined) {
        return { [char]: [seen[char], index] };
    }

    seen[char] = index;

    return findFirstRecurring(word, index + 1, seen);
}
    
const lines = fs.readFileSync("Random.txt").toString().split('\n').map(word => word.trim()).filter(Boolean);
console.log(lines)

lines.forEach((line, lineIndex) => {
    const words = line.split(' ').filter(Boolean);
    words.forEach((word, wordIndex) => {
        const result = findFirstRecurring(word);
        console.log(`Line ${lineIndex + 1}, Word ${wordIndex + 1} (${word}):`, result);
    });
});