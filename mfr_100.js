const addUnique = (array, element) => {
  if (!array.includes(element)) {
    array.push(element);
  }
  return array;
}

const sum = (a, b) => a + b;

const uniqueElements =
  elements => elements
    .flatMap(element => element)
    .reduce(addUnique, []);

const sumOfElements = 
  elements => elements
    .flatMap(element => element)
    .reduce(sum, 0);

const containsAtLeastOne = 
  (array, target) => array
    .flatMap(element => element)
    .some(element => element === target);

const blueRibbonsCut = ribbons => ribbons.reduce(
  (prevCount, ribbon) => ribbon === 'blue' ? prevCount + 1 : prevCount,
  0
);

const areAllTempBelow32 = sheets => sheets.every(
  (sheet) => sheet.every(
    (temperature) => temperature < 32
  )
);

const countDune = books => books.reduce(
  (prevCount, book) => book === 'Dune' ? prevCount + 1 : prevCount,
  0
);

const countDeers = animals => animals.reduce(
  (prevCount, animal) => animal === 'deer' ? prevCount + 1 : prevCount,
  0
);

const isArray = array => Array.isArray(array);

const areArraysEqual = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let index = 0; index < array1.length; index++) {
    if (!areDeepEqual(array1[index], array2[index])) {
      return false;
    }
  }
  return true;
}

const areDeepEqual = (array1, array2) => {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }
  return array1 === array2;
}

const details = (integers, expected, actual) => {
  const inputMessage = `input : [${integers}]\n`;
  const resultMessage = `expected: ${expected}\nactual: ${actual}`;
  return `${inputMessage}${resultMessage}`;
}

const composeMessage = (integers, expected, actual, description) => {
  const isPass = areDeepEqual(expected, actual);
  const symbol = isPass ? '✅' : '❌';
  const message = symbol + description + '\n';
  const testDetails = isPass ? '' : details(integers, expected, actual);

  return message + testDetails;
}

const test = (testCase) => {
  const array = testCase[0];
  const expression = testCase[1];
  const expected = testCase[2];
  const description = testCase[3];

  const actual = expression(array);
  return console.log(composeMessage(array, expected, actual, description));
}

const testContainsAtLeastOnce = (testCase) => {
  const array = testCase[0];
  const target = testCase[1];
  const expression = testCase[2];
  const expected = testCase[3];
  const description = testCase[4];
  
  const actual = expression(array, target);
  return console.log(composeMessage(array, expected, actual, description));
}

const TESTS = [
  [["red", "blue", "red", "green", "red", "blue"], blueRibbonsCut, 2, '2 blue ribbons are cut'],
  [["red", "red", "green", "red"], blueRibbonsCut, 0, '0 blue ribbons are cut'],
  [
    [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]],
    uniqueElements,
    ["Orion", "Leo", "Taurus", "Gemini"],
    "3 observations of constellations"
  ],
  [
    ["sparrow", "crow", "sparrow", "eagle", "crow"],
    uniqueElements,
    ["sparrow", "crow", "eagle"],
    '2 duplicate birds'
  ],
  [
    [["Asha", "Ravi", "Neel"],
    ["Ravi"],
    ["Asha", "Meera"]
    ],
    uniqueElements,
    ["Asha", "Ravi", "Neel", "Meera"],
    "3 periods' attendence"
  ],
  [
    [[5, 3], [2], [4, 1]],
    sumOfElements,
    15,
    '3 candy refill records'
  ],
  [
    [[22, 23], [25, 24, 22], [29]],
    areAllTempBelow32,
    true,
    'all are below 32'
  ],
  [
    [[22, 23], [25, 24, 22], [29], [40, 45]],
    areAllTempBelow32,
    false,
    'all are not below 32'
  ],
  [
    [[2, 3, 2], [4], [1, 1]],
    sumOfElements,
    13,
    '3 logs'
  ],
  [
    [["blue", "yellow"], ["yellow", "green"], ["blue"]],
    uniqueElements,
    ["blue", "yellow", "green"],
    '3 color sessions'
  ],
  [
    ["Dune", "Dune", "Foundation", "Dune"],
    countDune,
    3,
    'Dune repeated more than 1'
  ],
  [
    [["rice", "lentils"], ["rice"], ["curd", "lentils"]],
    uniqueElements,
    ["rice", "lentils", "curd"],
    '3 lists of ingredients'
  ],
  [
    [[4, 6], [2, 3, 1], [5]],
    sumOfElements,
    21,
    '3 crates'
  ],
  [
    ["small", "large", "medium", "small"],
    uniqueElements,
    ["small", "large", "medium"],
    '3 sizes'
  ],
  [
    ["deer", "deer", "rabbit", "deer"],
    countDeers,
    3,
    '3 Deers'
  ],
  [
    [[1, 2], [3], [2, 4, 1]],
    uniqueElements,
    [1, 2, 3, 4],
    "3 groups' chapters"
  ],
  [
    [[1, 2, 1], [3], [2]],
    sumOfElements,
    9,
    '3 usage logs'
  ]
];

const TESTS_CONTAINS_ATLEAST_ONE = [
[
    [["mi", "fa", "so"], ["do", "mi"], ["fa"]],
    'do',
    containsAtLeastOne,
    true,
    'notes has "do"'
  ],
  [
    [["mi", "fa", "so"], ["do", "mi"], ["fa"]],
    'so',
    containsAtLeastOne,
    true,
    'notes has "so"'
  ],
  [
    [["step", "tap"], ["turn", "step"]],
    'turn',
    containsAtLeastOne,
    true,
    '2 sequences'
  ],
];

const delimiter = () => { console.log('-'.repeat(20)) };

const testAll = () => {
  TESTS.forEach(test);
  delimiter();
  TESTS_CONTAINS_ATLEAST_ONE.forEach(testContainsAtLeastOnce);
}

testAll();