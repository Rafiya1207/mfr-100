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
    .includes(target);

const countElements =
  (array, target) => array
    .flatMap(element => element)
    .reduce((prevCount, element) =>
      element === target ? prevCount + 1 : prevCount,
      0
    );

const satisfiesAtleastOne =
  (array, predicate) => array
    .flatMap(element => element)
    .some(predicate);

const satisfiesAll =
  (array, predicate) => array
    .flatMap(element => element)
    .every(predicate);

const concatElements =
  elements => elements
    .flatMap(element => element)
    .reduce(sum, '');

const reverse =
  elements => elements
    .reduce((reversedElements, element) => {
      reversedElements.unshift(element);
      return reversedElements;
    }, []);

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

const delimiter = () => { console.log('-'.repeat(20)) };

const testAll = () => {
  TESTS.forEach(test);
  delimiter();
  TESTS_HAVING_TARGET.forEach(testContainsAtLeastOnce);
}

testAll();