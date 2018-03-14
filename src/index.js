class SmartCalculator {

  constructor(initialValue) {
    this.inputData = [];
    this.inputData.push(initialValue);
  }

  add(number) {
    if (number.length == 0) {
      return (this);
    }
    this.inputData.push('+');
    this.inputData.push(number);
    return (this);
  }

  subtract(number) {
    if (number.length == 0) {
      return (this);
    }
    this.inputData.push('-');
    this.inputData.push(number);
    return (this);
  }

  multiply(number) {
    if (number.length == 0) {
      return (this);
    }
    this.inputData.push('*');
    this.inputData.push(number);
    return (this);
  }

  devide(number) {
    if (number.length == 0) {
      return (this);
    }
    this.inputData.push('/');
    this.inputData.push(number);
    return (this);
  }

  pow(number) {
    if (number.length == 0) {
      return (this);
    }
    this.inputData.push('^');
    this.inputData.push(number);
    return (this);
  }

  getAnswer() {
    while (this.inputData.length > 1) {
      for (var p = this.inputData.length - 1; p > 0; p--) {
        if (this.inputData[p] == '^') {
          var pow = Math.pow(this.inputData[p - 1], this.inputData[p + 1]);
          this.inputData.splice(p - 1, 3, pow);
          p = this.inputData.length - 1;
        }
      }
      for (var m = 0; m < this.inputData.length; m++) {
        if (this.inputData[m] == '*') {
          var multiplication = this.inputData[m - 1] * this.inputData[m + 1];
          this.inputData.splice(m - 1, 3, multiplication);
          m = 0;
        }
      }
      for (var d = 0; d < this.inputData.length; d++) {
        if (this.inputData[d] == '/') {
          var divide = Math.round(this.inputData[d - 1] / this.inputData[d + 1]);
          this.inputData.splice(d - 1, 3, divide);
          d = 0;
        }
      }
      for (var s = 0; s < this.inputData.length; s++) {
        if (this.inputData[s] == '+') {
          var addition = this.inputData[s - 1] + this.inputData[s + 1];
          this.inputData.splice(s - 1, 3, addition);
          s = 0;
        }
        if (this.inputData[s] == '-') {
          var substraction = this.inputData[s - 1] - this.inputData[s + 1];
          this.inputData.splice(s - 1, 3, substraction);
          s = 0;
        }
      }
    }
    return (this.inputData[0]);
  }

  valueOf() {
    var answer = this.getAnswer();
    return (answer);
  }
}
module.exports = SmartCalculator;
