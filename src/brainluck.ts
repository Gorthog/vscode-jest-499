// https://www.codewars.com/kata/526156943dfe7ce06200063e/train/typescript

export function brainLuck(code: string, input: string) {
  return new Interpreter(code, input).interpret();
}

class Interpreter {
  instructionsPointer = 0;
  data = [0];
  dataPointer = 0;
  output = '';
  inputPointer = 0;

  constructor(private instructions: string, private input: string) {}

  interpret() {
    while (this.instructionsPointer < this.instructions.length) {
      switch (this.instructions[this.instructionsPointer]) {
        case '>':
          this.incrementDataPointer();
          break;
        case '<':
          this.decrementDataPointer();
          break;
        case '+':
          this.incrementData();
          break;
        case '-':
          this.decrementData();
          break;
        case '.':
          this.outputData();
          break;
        case ',':
          this.readInput();
          break;
        case '[':
          this.jumpForward();
          break;
        case ']':
          this.jumpBackward();
          break;
        default:
          throw new Error('invalid instructions');
      }

      this.instructionsPointer++;
    }

    return this.output;
  }

  incrementDataPointer() {
    this.dataPointer++;
    if (this.data.length <= this.dataPointer) {
      this.data.push(0);
    }
  }
  decrementDataPointer() {
    this.dataPointer--;
  }
  incrementData() {
    this.data[this.dataPointer] = ++this.data[this.dataPointer] % 256;
  }
  decrementData() {
    this.data[this.dataPointer]--;
    if (this.data[this.dataPointer] === -1) {
      this.data[this.dataPointer] = 255;
    }
  }
  outputData() {
    this.output += String.fromCharCode(this.data[this.dataPointer]);
  }

  private readInput() {
    this.data[this.dataPointer] = this.input.charCodeAt(this.inputPointer++);
  }

  jumpForward() {
    if (this.data[this.dataPointer] === 0) {
      this.instructionsPointer = this.findMatchingBracket('[', ']', 1);
    }
  }

  jumpBackward() {
    if (this.data[this.dataPointer] !== 0) {
      this.instructionsPointer = this.findMatchingBracket(']', '[', -1);
    }
  }

  findMatchingBracket(
    openingBracket: string,
    closingBracket: string,
    indexModifier: number
  ) {
    const stack: string[] = [];
    for (
      let i = this.instructionsPointer;
      i >= 0 && i < this.instructions.length;
      i += indexModifier
    ) {
      if (this.instructions[i] === openingBracket) {
        stack.push(openingBracket);
      } else if (this.instructions[i] === closingBracket) {
        stack.pop();
      }

      if (stack.length === 0) {
        return i;
      }
    }

    throw new Error('invalid instructions');
  }
}
