// Queue class for use in JavaSript

// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = this.head;
    }

    enqueue(data) {
        // Create new node
        const newNode = new _Node(data, null);

        // If queue is empty, make new node the head
        if (this.head === null) {
            this.head = newNode;
        }

        // If queue has tail, point tail to new node
        if (this.tail) {
            this.tail.next = newNode;
        }

        // Make new node the tail
        this.tail = newNode;
    }

    dequeue() {
        // If queue is empty, return nothing
        if (this.head === null) {
            return;
        }
        // Else, remove head from queue, point head to next node, return data
        else {
            const node = this.head;

            this.head = node.next;

            // If node was last item in queue, point tail to null
            if (node === this.tail) {
                this.tail = null;
            }

            return node.data;
        }
    }

    print() {
        // Start at head, then print each value until tail of queue
        let node = this.head;
        while (node !== null) {
            console.log(node.data);
            node = node.next;
        }
    }
}

const superQueue = new Queue();

superQueue.enqueue("first");
superQueue.enqueue("second");
superQueue.enqueue("third");
superQueue.print();
console.log(superQueue.dequeue() + "\n");
console.log(superQueue.dequeue() + "\n");
console.log(superQueue.dequeue() + "\n");
console.log(superQueue);
superQueue.print();

// console.log(superQueue);
