// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data,next=null){
    this.data=data
    this.next=next
  }
}

class LinkedList {
  constructor(){
    this.head=null
  }
  insertFirst(data){
    // this.head=new Node(data,this.head)
    this.insertAt(data,0)
  }
  size(){
    let counter=0
    let node=this.head
    while (node) {
      counter++
      node=node.next
    }
    return counter
  }
  getFirst(){
    return this.head
  }
  getLast(){
    let node=this.head
    while (node&&node.next) {
      node=node.next
    }
    return node
  }
  clear(){
    this.head=null
  }
  removeFirst(){
    this.head=this.head&&this.head.next
  }
  removeLast(){
    if (this.size()===0) {
      return
    }
    if (this.size()===1) {
      this.head=null
      return
    }
    let node=this.head
    while (node.next.next) {
      node=node.next
    }
    node.next=null
  }
  insertLast(data){
    this.insertAt(data,this.size())
    // if (this.head) {
    //   this.getLast().next=new Node(data)
    // }else {
    //   this.head=new Node(data)
    // }
  }
  getAt(num){
    let counter=0
    let node=this.head
    while (counter<num) {
      if (node&&node.next) {
        node=node.next
      }else {
        return null
      }
      counter++
    }
    return node
  }
  removeAt(num){
    if (!this.head) {
      return
    }
    if (num===0) {
      this.head=this.head.next
      return
    }
    const previous=this.getAt(num-1)
    if (previous&&previous.next) {
      previous.next=previous.next.next
    }
  }
  insertAt(data,index){
    if (!this.head) {
      this.head=new Node(data)
    }
    else if (index===0) {
      this.head=new Node(data,this.head)
    }
    else {
      const previous=this.getAt(index-1)||this.getLast()
      previous.next=new Node(data,previous.next)
    }
  }
  forEach(fn){
    let counter=0
    let node=this.head
    while (node) {
      fn(node,counter)
      node=node.next
      counter++
    }
  }
  *[Symbol.iterator](){
    let counter=0
    let node=this.head
    while (node) {
      yield(node)
      node=node.next
    }
  }
}

module.exports = { Node, LinkedList };
