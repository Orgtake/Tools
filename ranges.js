const ranges = {
  clamp(min, max, value) {
    return value > max
      ? max
      : value < min
        ? min
        : value
      ;
    ;
  },
  new() {
    console.warn("Use `new Range()` instead! ;)");
    return "Done";
  }
}
class Range {
  constructor(lower, upper) {
    this._range = [lower, upper];
  }
  get lower() {
    return this._range[0];
  }
  get higher() {
    return this._range[1];
  }
  get range() { return this._range; }
  set lower(number) {
    return this._range[0] = number;
  }
  set higher(number) {
    return this._range[1] = number;
  }
  get lowertoupper() {
    const x = [];
    for (let i = this._range[0]; i < this._range[1]; i++) x.push(i);
    return x;
  }
  set range(value) {
    this._range = [value];
  }
}
