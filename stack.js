// Stack class for use in JavaSript

// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        // If stack is empty, create new node with data, put it on top of stack
        if (this.top === null) {
            this.top = new _Node(data, null);
        }
        // Else create new node with data, point it to node beneath it
        else {
            this.top = new _Node(data, this.top);
        }
        // return this.top;
    }

    pop() {
        // Save current top
        const tempNode = this.top;

        // Change top to node beneath top
        this.top = this.top.next;

        // Return data from node that was removed
        return tempNode.data;
    }

    peek() {
        return this.top.data;
    }

    isEmpty() {
        return this.head === null;
    }

    display() {
        // Start at top, then print each value until bottom of stack
        let node = this.top;
        while (node !== null) {
            console.log(node.data);
            node = node.next;
        }
    }
}

class Stack2 {
    constructor() {
        this.stack = [];
        this.top = null;
    }

    push(data) {
        this.top = this.stack.push(data) - 1;
    }

    pop() {
        this.top -= this.top;
        return this.stack.pop();
    }

    print() {
        console.log(this.stack);
    }
}

// const starTrek = new Stack();
// starTrek.push("Kirk");
// starTrek.push("Spock");
// starTrek.push("McCoy");
// starTrek.push("Scotty");

// const superStack = new Stack();

// superStack.push("first");
// superStack.push("second");
// superStack.push("third");
// superStack.print();
// console.log(superStack.pop());
// superStack.print();

// const awesomeStack = new Stack2();

// awesomeStack.push("First");
// awesomeStack.push("Second");
// awesomeStack.push("Third");
// awesomeStack.print();
// console.log(awesomeStack.pop());
// awesomeStack.print();
// awesomeStack.push("Fourth");
// awesomeStack.print();

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-za-z0-9]/g, "");
    // Your code goes here
    const letters = new Stack();

    const even = s.length % 2 === 0 ? true : false;

    const halfLimit = Math.floor(s.length / 2);

    // Add first half of string to stack
    for (let i = 0; i < halfLimit; i++) {
        letters.push(s.charAt(i));
    }
    // letters.display();

    // Define start of second half, depending on whether of not length is even
    const start = even ? halfLimit : halfLimit + 1;

    // Go through second half of string, checking if letters match
    for (let i = start; i < s.length; i++) {
        const c = letters.pop();
        if (c !== s.charAt(i)) {
            return false;
        }
    }
    return true;
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));
console.log(is_palindrome("Taco cat"));
