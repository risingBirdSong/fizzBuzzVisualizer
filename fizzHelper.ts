enum FizzStatus {
  "fizz",
  "buzz",
  "fizzbuzz",
  "notfizzorbuzz"
}

const fizzHelper = (num: number): FizzStatus => {
  if (num % 15 === 0) {
    return FizzStatus["fizzbuzz"]
  } else if (num % 3 === 0) {
    return FizzStatus["fizz"]
  } else if (num % 5 === 0) {
    return FizzStatus["buzz"]
  }
  return FizzStatus["notfizzorbuzz"];
}

const fizzColorHelper = (num: number) => {
  if (num % 15 === 0) {
    return "brown";
  } else if (num % 3 === 0) {
    return "purple"
  } else if (num % 5 === 0) {
    return "chocolate";
  }
  return "";
}

export { fizzHelper, fizzColorHelper };