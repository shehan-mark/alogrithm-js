/**
 * FIFO - First In First Out data structure
 * [ 1, 2, 3, 4 ]
 * remove one ? 1 will be removed.
 * add 6 ? will be added to the end of the array
 * 
 */

export class Queue {
  
  private items: Record<string, any>;

  /**
   * holding the key of the first element in the queue
   */
  private head: number;

  /**
   * holding the key of last element in the queue
   */
  private tail: number;

  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  /**
   * add item to the queue
   */
  enqueue(item: any) {
    this.items[this.tail] = item;
    this.tail++;
  }

  /**
   * remove item from the queue
   */
  dequeue() {
    if (this.isEmpty()) return null;
    const firstItem = this.peek();
    delete this.items[this.head];
    this.head++;
    return firstItem;
  }

  /**
   * return first item in the queue
   */
  peek() {
    return this.items[this.head];
  }

  /**
   * return size of the queue
   */
  size() {
    return this.tail - this.head;
  }

  /**
   * check if the queue is empty or not
   */
  isEmpty() {
    return this.size() ? false : true;
  }

  clear() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }
}
