const addUnique = (array, element) => {
  if (!array.includes(element)) {
    array.push(element);
  }
  return array;
}

const sum = (a, b) => a + b;

const blueRibbonsCut = (ribbons) => ribbons.reduce(
  (prevCount, ribbon) => ribbon === 'blue' ? prevCount + 1 : prevCount,
  0
);

const allConstellations = (observations) =>
  observations.reduce((constillations, observation) =>
    observation.reduce(addUnique, constillations),
    []
  );

const uniqueBirds = (birds) => birds.reduce(addUnique, []);

const studentsAttendedAtLeastOnce = (records) =>
  records.reduce((resultValue, record) =>
    record.reduce(addUnique, resultValue),
    []
  );

const countCandies = (logs) =>
  logs.reduce((total, log) =>
    log.reduce(sum, total),
    0
  );

const didSangDo = (fragment) => fragment.some(
  (notes) => notes.some(
    (note) => note === 'do'
  )
);

const areAllTempBelow32 = (sheets) => sheets.every(
  (sheet) => sheet.every(
    (temperature) => temperature < 32
  )
);

const totalMiles = (logs) => logs.reduce(
  (total, log) => log.reduce(sum, total),
  0
);

const uniqueColors = (colorList) => colorList.reduce(
  (reducedColors, colors) => colors.reduce(addUnique, reducedColors),
  []
);

const countDune = (books) => books.reduce(
  (prevCount, book) => book === 'Dune' ? prevCount + 1 : prevCount,
  0
);

const distinctIngredients = (ingredients) =>
  ingredients.reduce((reducedIngredients, currIngredients) =>
    currIngredients.reduce(addUnique, reducedIngredients), []
  );

const didSangSo = (fragment) => fragment.some(
  (notes) => notes.some(
    (note) => note === 'so'
  )
);

const sumWeights = (crateWeights) => crateWeights.reduce(
  (total, weights) => weights.reduce(sum, total),
  0
);

const uniqueParcelSizes = (sizes) => sizes.reduce(addUnique, []);

const countDeers = (animals) => animals.reduce(
  (prevCount, animal) => animal === 'deer' ? prevCount + 1 : prevCount,
  0
);

const uniqueChapters = (groupsChapters) => groupsChapters.reduce(
  (reducedChapters, chapters) => chapters.reduce(addUnique, reducedChapters),
  []
);

const isArray = array => Array.isArray(array);

const areArraysEqual = function (array1, array2) {
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

const areDeepEqual = function (array1, array2) {
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (isArray(array1) && isArray(array2)) {
    return areArraysEqual(array1, array2);
  }
  return array1 === array2;
}

const details = function (integers, expected, actual) {
  const inputMessage = `input : [${integers}]\n`;
  const resultMessage = `expected: ${expected}\nactual: ${actual}`;
  return `${inputMessage}${resultMessage}`;
}

const composeMessage = function (integers, expected, actual, description) {
  const isPass = areDeepEqual(expected, actual);
  const symbol = isPass ? '✅' : '❌';
  const message = symbol + description + '\n';
  const testDetails = isPass ? '' : details(integers, expected, actual);

  return message + testDetails;
}

const test = function (testCase) {
  const array = testCase[0];
  const expression = testCase[1];
  const expected = testCase[2];
  const description = testCase[3];

  const actual = expression(array);
  return console.log(composeMessage(array, expected, actual, description));
}

const TESTS = [
  [["red", "blue", "red", "green", "red", "blue"], blueRibbonsCut, 2, '2 blue ribbons are cut'],
  [["red", "red", "green", "red"], blueRibbonsCut, 0, '0 blue ribbons are cut'],
  [
    [["Orion", "Leo"], ["Taurus"], ["Orion", "Gemini"]],
    allConstellations,
    ["Orion", "Leo", "Taurus", "Gemini"],
    "3 observations of constellations"
  ],
  [
    ["sparrow", "crow", "sparrow", "eagle", "crow"],
    uniqueBirds,
    ["sparrow", "crow", "eagle"],
    '2 duplicate birds'
  ],
  [
    [["Asha", "Ravi", "Neel"],
    ["Ravi"],
    ["Asha", "Meera"]
    ],
    studentsAttendedAtLeastOnce,
    ["Asha", "Ravi", "Neel", "Meera"],
    "3 periods' attendence"
  ],
  [
    [[5, 3], [2], [4, 1]],
    countCandies,
    15,
    '3 candy refill records'
  ],
  [
    [["mi", "fa", "so"], ["do", "mi"], ["fa"]],
    didSangDo,
    true,
    'notes has "do"'
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
    totalMiles,
    13,
    '3 logs'
  ],
  [
    [["blue", "yellow"], ["yellow", "green"], ["blue"]],
    uniqueColors,
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
    distinctIngredients,
    ["rice", "lentils", "curd"],
    '3 lists of ingredients'
  ],
  [
    [["mi", "fa", "so"], ["do", "mi"], ["fa"]],
    didSangSo,
    true,
    'notes has "so"'
  ],
  [
    [[4, 6], [2, 3, 1], [5]],
    sumWeights,
    21,
    '3 crates'
  ],
  [
    ["small", "large", "medium", "small"],
    uniqueParcelSizes,
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
    uniqueChapters,
    [1, 2, 3, 4],
    "3 groups' chapters"
  ],
]

const testAll = function () {
  TESTS.forEach(test);
}

testAll();