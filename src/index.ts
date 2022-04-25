class StackItem {
  public prevItem: StackItem | undefined
  public data: any
  constructor(prevItem: StackItem | undefined, data: any) {
    this.prevItem = prevItem;
    this.data = data;
  }
}

class Stack {
  public length: number = 0
  private currentItem: StackItem | undefined
  private maxLength: number | undefined
  constructor(maxLength?: number) {
    this.maxLength = maxLength;
  }

  public push(data: any): void {
    // if max there is no more space abort
    if (!this.maxLength && this.length === this.maxLength) {
      throw new RangeError('Stack full.');
    }

    // increase stack length
    this.length += 1;

    // get the current item
    const currentItem = this.currentItem;
    
    // create new item and store
    this.currentItem = new StackItem(currentItem, data);
  }

  public peek(): any {
    // if stack is empty throw error
    if (!this.currentItem) {
      throw new RangeError('Stack is empty.');
    }

    // get current data and return it
    return this.currentItem.data;
  }

  public pop(): any {
    // if stack is empty throw error
    if (!this.currentItem) {
      throw new RangeError('Stack is empty.');
    }

    // decrease length
    this.length -= 1;

    // get current item
    const data = this.currentItem.data;

    // remove the top item from the stack
    // get the previous item
    const prevItem = this.currentItem.prevItem;
    // replace the current item with the previous item
    this.currentItem = prevItem;

    // return the data
    return data;
  }
  
  public isFull(): boolean {
    // return false if not at max length and otherwise return if full 
    return !this.maxLength && this.length === this.maxLength;
  }

  public isEmpty(): boolean {
    return length === 0;
  }
}

export default Stack;
