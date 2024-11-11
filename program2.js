var romanToInt = function(s) {
    // Map each Roman numeral character to its corresponding integer value
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    
    for (let i = 0; i < s.length; i++) {
        const current = romanMap[s[i]];    
        const next = romanMap[s[i + 1]];   // Next Roman numeral value (or undefined if it's the last character)

        // If the current value is less than the next value, subtract the current value
        if (current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
};

module.exports = { romanToInt };
