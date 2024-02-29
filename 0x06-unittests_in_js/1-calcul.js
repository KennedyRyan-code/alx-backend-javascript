function calculateNumber(type, a, b) {
    const firstArg = Math.round(a);
    const secondArg = Math.round(b);
  
    if (type === 'SUBTRACT') {
      return firstArg - secondArg;
    }
  
    if (type === 'DIVIDE') {
      if (secondArg === 0) {
        return 'Error';
      }
      return firstArg / secondArg;
    }
  
    return firstArg + secondArg;
  }
  
  module.exports = calculateNumber;