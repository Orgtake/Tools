const katexhelper = {
  spawn: {
    limit(varName, defaultValue, expression) {
      return `\\lim_{${varName}\\to${defaultValue}}${expression}`;
    },
    integral(upperBound, lowerBound, expression) {
      return `\\int^{${upperBound}}_{${lowerBound}}${expression}`;
    },
    sum(varName, start, count, expression = varName) {
      return `\\sum^{${count}}_{${varName}=${start}}${expression}`;
    },
    factorial(expression) {
      return `${expression}!`;
    },
    prod(varName, start, count, expression = varName) {
      return `\\prod^{${count}}_{${varName}=${start}}${expression}`;
    },
    matrix(name, expression) {
      return `\\begin{${name}matrix}${expression}\\end{${name}matrix}`;
    }
  }
}

export default katexhelper;
