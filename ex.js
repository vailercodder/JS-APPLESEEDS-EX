//ex 1
function boolToWord(bool) {
  if (bool) {
    return "Yes";
  } else {
    return "No";
  }
}

//ex 2.1 lowest sum of the 2

function lowestSum(array) {
  // CR - There is a mistake in the variable name in sort function. It should be 'array' not 'numbers'.
  numbers.sort((a, b) => a - b);

  return numbers[0] + numbers[1];
}

//ex 2.2
function binaryArrayNumber(arr) {
  const binaryString = arr.join("");

  return parseInt(binaryString, 2);
}

//ex 2.4
// CR - A more efficient approach using frequency map could reduce the complexity
function findUniq(arr) {
  let majority;
  if (arr[0] === arr[1]) {
    majority = arr[0];
  } else {
    if (arr[2] === arr[0]) {
      majority = arr[0];
    } else {
      majority = arr[1];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== majority) {
      return arr[i];
    }
  }
}

// CR - This function efficiently finds the unique number in an array using a frequency map.
function findUniq2(arr) {
  const frequency = {};

  // Build the frequency map
  arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  // Find and return the unique number by searching for a frequency of 1
  for (const num in frequency) {
    if (frequency[num] === 1) {
      return Number(num); // Convert the property key back to a number
    }
  }
}

// Usage Example
console.log(findUniq2([1, 1, 1, 2, 1, 1])); // Output: 2
console.log(findUniq2([0, 0, 0.55, 0, 0])); // Output: 0.55


//ex 2.5

function summation(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
} /* loops until reaches "num", sums up everything to total.



//ex 2.6  */

function centuryFromYear(year) {
  const century = Math.floor(year / 100);

  if (year % 100 === 0) {
    return century;
  } else {
    return century + 1;
  }
}

//ex 2.7

function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return "unknown, go away.";
  }
}

//ex 3.1

function nb_year(p0, percent, aug, p) {
  let currentPopulation = p0;

  for (let years = 0; true; years++) {
    if (currentPopulation >= p) {
      return years;
    }
    currentPopulation += currentPopulation * (percent / 100) + aug;
  }
}

// ex 3.2

function numberOfPeopleInBus(busStops) {
  let totalPeople = 0;
  for (let i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
}

//ex 4.1

function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}


//ex 4.2

nction tribonacci(signature, n) {
    if (n === 0) return [];

    if (n < signature.length) return signature.slice(0, n);

    let trib = signature.slice(); 

  
    for (let i = 3; i < n; i++) {
        trib[i] = trib[i-1] + trib[i-2] + trib[i-3];
    }

    return trib;
}




//ex 5.1 


function removeChar(str) {
    
    return str.slice(1, -1);
}


//ex 5.2
function repeatStr(count, src) {
    return src.repeat(count);
} /*  i googled if there was   a method to duplicate strings, xd



//ex 5.3 */


function toCamelCase(str) {
  if (typeof str !== "string") {
    console.error("Input must be a string."); 
    return null;
  }
  if (str.trim() === "") {
    return ""; 
  }

  const words = str.split(/-|_/);
  if (words.length > 1) {
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  }

  if (str[0] === str[0].toUpperCase()) {
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  } else {
    words[0] = words[0].charAt(0).toLowerCase() + words[0].slice(1);
  }

  return words.join("");
}

// already did this in code wars xd//


//ex 5.4 

function toWeirdCase(str) {
    const words = str.split(' ');

    const weirdCaseWords = words.map(word => {
  
        const chars = word.split('');
        const weirdCaseChars = chars.map((char, index) => {
            if (index % 2 === 0) {

                return char.toUpperCase();
            } else {
                //lower
                return char.toLowerCase();
            }
        });
        // characters back into a word
        return weirdCaseChars.join('');
    });

    return weirdCaseWords.join(' ');
}





//ex 5.5


function convertNameToInitials(name) {
    const parts = name.split(' ');
    let initials = '';


    initials += parts[0][0].toUpperCase(); 
    initials += '.'; 
    initials += parts[1][0].toUpperCase(); 
    return initials;
}



//ex 5.6

function maskify(str) {
    if (str.length <= 4) {
        return str;
    } else {
        const masked = str.slice(0, -4).replace(/./g, '#') + str.slice(-4);
        return masked;
    }
}



//ex 5.7


function findShortestWordLength(s) {
    const words = s.split(' ');
    let minLength = Infinity; 

    for (let word of words) {
        if (word.length < minLength) {
            minLength = word.length;
        }
    }

    return minLength;
}



//ex 5.8 


function findLongestWords(s) {
    const words = s.split(' ');
    let maxLength = 0;
    let longestWords = [];

 
    for (let word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
            longestWords = [word]; 
        } else if (word.length === maxLength) {
            longestWords.push(word); 
        }
    }

    return longestWords; 

}


//ex 6.1



function accum(s) {

    let result = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        let transformedPart = char.toUpperCase();

        for (let j = 0; j < i; j++) {
            transformedPart += char.toLowerCase();
        }

        result.push(transformedPart);
    }


    return result.join('-');
}

//ex 6.2 


function countDuplicates(inputString) {

    inputString = inputString.toLowerCase();

    const frequency = {};

    for (const char of inputString) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

  
    let duplicates = 0;
    for (const char in frequency) {
        if (frequency[char] > 1) {
            duplicates++;
        }
    }

    return duplicates;
}
