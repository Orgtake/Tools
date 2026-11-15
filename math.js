// NEW UPDATES!
// BIGGEST UPDATE OF THE DAY! 2026/11/15
// Square root and new other root functions now use expotentation!!! :D
// New functions! :D
// Renamed functions! :D
// New errors! :D

class InvalidVectorError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "InvalidVector";
  }
}
class ZeroOperatorError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "ZeroImpactOnOperator";
  }
}
class NumberOperatorError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "NumberImpactOnOperator";
  }
}

const math = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
  div(a, b) {
    if (b === 0) throw new ZeroOperatorError("Division by zero, undefined");
    return a / b;
  },
  square(x) {
    return x * x;
  },
  split(x, canHaveFloat) {
    if (canHaveFloat) {
      return x / 2;
    } else {
      return Math.floor(x / 2);
    }
  },
  circle(x) {
    return Math.PI * x * x;
  },
  triangle(base, height) {
    return 0.5 * base * height;
  },
  pi() {
    return Math.PI;
  },
  powerOf(a, b) {
    return a ** b;
  },
  sine(x) {
    return Math.sin(x);
  },
  radian(deg) {
    return deg * Math.PI / 180;
  },
  degree(rad) {
    return rad * 180 / Math.PI;
  },
  tan(x) {
    return Math.tan(x);
  },
  cosine(x) {
    return Math.cos(x);
  },
  regularLog(x) {
    if (x === 0) throw new ZeroOperatorError("Logarithm met with 0")
    else if (x < 0) throw new NumberOperatorError("Arg is negative");
    return Math.log(x);
  },
  log_10(x) {
    if (x === 0) throw new ZeroOperatorError("Logarithm met with 0");
    else if (x < 0) throw new NumberOperatorError("Arg is negative");
    return Math.log10(x);
  },
  ln(x) {
    if (x === 0) throw new ZeroOperatorError("Logarithm met with 0")
    else if (x < 0) throw new NumberOperatorError("Arg is negative");
    return Math.log(x);
  },
  squareRoot(x) {
    if (x < 0) throw new NumberOperatorError("Square root met with negative, complex");
    return x**(1/2);
  },
  infinite() {
    return Infinity;
  },
  arcsine(x) {
    return Math.asin(x);
  },
  arccosine(x) {
    return Math.acos(x);
  },
  arctan(x) {
    return Math.atan(x);
  },
  isEqualTo(a, b) {
    return a === b;
  },
  isNotEqualTo(a, b) {
    return a !== b;
  },
  isGreaterThan(a, b) {
    return a > b;
  },
  isLessThan(a, b) {
    return a < b;
  },
  powerOf10(x) {
    return 10 ** x;
  },
  exp(x) {
    return Math.exp(x);
  },
  powerOf2(x) {
    return x ** 2;
  },
  float(a, b) {
    return Number(a + "." + b);
  },
  factorial(x) {
    if (x < 0 || !Number.isInteger(x)) { return NaN; }
    let start = 1;
    for (let i = 2; i <= x; i++) { start *= i }
    return start;
  },
  fraction(a, b) {
    return a + "⁄" + b;
  },
  floor(x) {
    return Math.floor(x);
  },
  percent(x) {
    return x / 100;
  },
  abs(x) {
    return Math.abs(x);
  },
  sum(a, b) {
    let result = 0;

    for (let i = a; i <= b; i++) {
      result += i;
    }
    
    return result;
  },
  negative(x) {
    return -x;
  },
  vector(a, b, c, env) {
    switch (env) {
      case "2d":
        return {
          "x": a,
          "y": b
        };
      case "3d":
        return {
          "x": a,
          "y": b,
          "z": c
        };
      default:
        console.warn("There's not a valid vector called " + env + " so please enter 2d or 3d.");
        throw new InvalidVectorError("No vector");
    }
  },
  unall(x) {
    return x + (x+1) - (x+2) * (x+3) / (x+4);
  },
  unallSome(a, b, c, d) {
    return a + b - c * d;
  },
  cAbout(degree) {
    if (degree < 10) {
      return "Cold";
    } else if (degree > 30) {
      return "Hot";
    } else {
      return "Warm";
    }
  },
  fAbout(degree) {
    if (degree < 50) {
      return "Cold";
    } else if (degree > 85) {
      return "Hot";
    } else {
      return "Warm";
    }
  },
  kAbout(degree) {
    if (degree < 283) {
      return "Cold";
    } else if (degree > 303) {
      return "Hot";
    } else {
      return "Warm";
    }
  },
  cubeRoot(x) {
    return Math.cbrt(x);
  },
  cube(x) {
    return x*x*x;
  },
  nthRoot(n, x) {
    return x**(1/n);
  },
  log_(b, x) {
    if (x === 0) throw new ZeroOperatorError("Logarithm met with 0")
    else if (b === 0 || b === 1) throw new NumberOperatorError("Base is 0 or 1")
    else if (b < 0 || x < 0) throw new NumberOperatorError("Base or arg is negative");
    return Math.log(x) / Math.log(b);
  },
  ceil(x) {
    return Math.ceil(x);
  },
  round(x) {
    return Math.round(x);
  },
  mod(a, b) {
    return a % b;
  },
  log_2(x) {
    if (x === 0) throw new ZeroOperatorError("Logarithm met with 0")
    else if (x < 0) throw new NumberOperatorError("Arg is negative");
    return Math.log2(x);
  },
  delta(...changeNumbers) {
    const array = [];
    for (const [index, number] of changeNumbers.entries()) {
      if (index % 2 === 0) continue;
      array.push(changeNumbers[index-1]-number);
    }
    return array;
  },
  divAndRemainder(a, b) {
    if (b === 0) throw new ZeroOperatorError("Division by zero, undefined");
    return {quotient: Math.trunc(a / b), remainder: a % b};
  },
  truncate(x) {
    return Math.trunc(x);
  },
  fixed(x, places) {
    return Number(x.toFixed(places));
  },
  isBasicDiv(dividend, divisor) {
    if (divisor === 0) return false;
    return divisor < dividend;
  },
  isPrime(x) {
    if (number % 1 !== 0 || x <= 1) return false;
  },
  isEven(x) {
    return x % 2 === 0;
  },
  isOdd(x) {
    return x % 1 === 0 && x % 2 !== 0;
  },
  norEvenOdd(x) {
    return x % 2 !== 1;
  },
  isInteger(x) {
    return x % 1 === 0;
  },
  notInteger(x) {
    return x % 1 !== 0;
  }
};

export {
  math,
  InvalidVectorError,
  ZeroOperatorError,
  NumberOperatorError
};
