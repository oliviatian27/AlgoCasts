// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor(){
    this.dataA=new Stack()
    this.dataB=new Stack()
  }

  add(record){
    this.dataA.push(record)
  }
  peek(){
    while (this.dataA.peek()) {
      this.dataB.push(this.dataA.pop())
    }
    const record=this.dataB.peek()
    while (this.dataB.peek()) {
      this.dataA.push(this.dataB.pop())
    }
    return record
  }
  remove(){
    while (this.dataA.peek()) {
      this.dataB.push(this.dataA.pop())
    }
    const record=this.dataB.pop()
    while (this.dataB.peek()) {
      this.dataA.push(this.dataB.pop())
    }
    return record
  }

}

module.exports = Queue;
