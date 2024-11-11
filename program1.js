var isValid = function(s) {
    // Map for matching closing brackets
    const matchingBracket = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    let stack = [];

    for (let char of s) {
        if (matchingBracket[char]) {
            // If it's an opening bracket, push onto the stack
            stack.push(char);
        } else {
            // If it's a closing bracket, check the stack
            const lastOpen = stack.pop();
            if (matchingBracket[lastOpen] !== char) {
                // If it doesn't match the expected closing bracket
                return false;
            }
        }
    }

    // If the stack is empty, all brackets are matched
    return stack.length === 0;
};

module.exports = { isValid };
