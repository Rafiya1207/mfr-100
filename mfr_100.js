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

const TESTS = [
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
    [[2, 3, 2], [4], [1, 1]],
    sumOfElements,
    13,
    '3 runner logs'
  ],
  [
    [["blue", "yellow"], ["yellow", "green"], ["blue"]],
    uniqueElements,
    ["blue", "yellow", "green"],
    '3 color sessions'
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
    [[1, 2], [3], [2, 4, 1]],
    uniqueElements,
    [1, 2, 3, 4],
    "3 groups' chapters"
  ],
  [
    [[1, 2, 1], [3], [2]],
    sumOfElements,
    9,
    '3 water usage logs'
  ],
  [
    [[3, 2], [1], [4]],
    sumOfElements,
    10,
    'total origami cranes'
  ],
  [
    [["apple", "banana"], ["apple"], ["apple", "orange"]],
    uniqueElements,
    ["apple", "banana", "orange"],
    'List unique fruits used'
  ],
  [
    [[2, 3], [1], [3, 2]],
    sumOfElements,
    11,
    'Total pens handed out'
  ],
  [
    [["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]],
    uniqueElements,
    ["Inception", "Dunkirk", "Interstellar"],
    'List unique titles watched'
  ],
  [
    ["A", "B", "A", "C", "B"],
    uniqueElements,
    ['A', 'B', 'C'],
    'Create a unique list of attendees'
  ],
  [
    [["rose", "lily"], ["lily", "tulip"]],
    uniqueElements,
    ["rose", "lily", "tulip"],
    'all unique flowers used'
  ],
  [
    [[10, 20], [5], [15, 10]],
    sumOfElements,
    60,
    'Total repetitions done'
  ],
  [
    ["A", "B", "A", "C", "B"],
    uniqueElements,
    ['A', 'B', 'C'],
    'station names without repeats'
  ],
  [
    [[12, 10], [5], [8, 7]],
    sumOfElements,
    42,
    'total pages read'
  ],
  [
    [[4, 3], [2], [3, 1]],
    sumOfElements,
    13,
    'total fruit Stand Weight'
  ],
  [
    [["idli", "vada"], ["vada", "upma"]],
    uniqueElements,
    ["idli", "vada", "upma"],
    'Unique snacks served'
  ],
  [
    [["sunset", "bird"], ["river"], ["sunset"]],
    uniqueElements,
    ["sunset", "bird", "river"],
    'List unique themes'
  ],
  [
    [[2, 3, 2], [1], [4]],
    sumOfElements,
    12,
    'Compute total Jogging laps'
  ],
  [
    [["cheese", "bread"], ["tomato"], ["bread"]],
    uniqueElements,
    ["cheese", "bread", "tomato"],
    'Unique cafe ingredients needed'
  ],
  [
    [["sky", "blue"], ["night"], ["sky", "dark"]],
    uniqueElements,
    ["sky", "blue", "night", "dark"],
    'List all unique Student Poetry Words'
  ],
  [
    [["toy", "sticker"], ["candy", "sticker"]],
    uniqueElements,
    ["toy", "sticker", "candy"],
    'List unique gift box items used'
  ],
  [
    [[6, 4], [3, 2]],
    sumOfElements,
    15,
    'Total Gym Routine Count'
  ],
  [
    [[1, 2, 3], [2]],
    sumOfElements,
    8,
    'Sum all candies'
  ],
  [
    [["Tom", "Jerry"], ["Jerry", "Spike"]],
    uniqueElements,
    ["Tom", "Jerry", "Spike"],
    'List unique workshop participants'
  ],
  [
    [["Vega", "Sirius"], ["Vega", "Rigel"]],
    uniqueElements,
    ["Vega", "Sirius", "Rigel"],
    'List unique star names'
  ],
  [
    [[10, 12], [15]],
    sumOfElements,
    37,
    'Total Train Car passengers'
  ],
  [
    [[3, 5], [2, 1]],
    sumOfElements,
    11,
    'Weekly Grocery Tally'
  ],
  [
    [["mint", "ginger"], ["lemon"], ["mint"]],
    uniqueElements,
    ["mint", "ginger", "lemon"],
    'Unique Tea Tasting Flavors'
  ],
  [
    [["pencil", "charcoal"], ["ink"], ["pencil"]],
    uniqueElements,
    ["pencil", "charcoal", "ink"],
    'Unique Drawing Class Tools'
  ],
  [
    [[1, 1, 2], [2, 1]],
    sumOfElements,
    7,
    'Toatal Coin Collection Tally'
  ],
  [
    [["salt", "pepper"], ["turmeric"], ["salt"]],
    uniqueElements,
    ["salt", "pepper", "turmeric"],
    'Unique Cooking Class Spices'
  ],
  [
    [["apple", "dog"], ["banana", "elephant"], ["papaya", "frog"]],
    concatElements,
    'appledogbananaelephantpapayafrog',
    'Combine all words written by students on three worksheets'
  ],
  [
    [['comedy', 'sci-fi'], ['history', 'fantasy'], ['comedy', 'fantasy']],
    uniqueElements,
    ['comedy', 'sci-fi', 'history', 'fantasy'],
    'Produce a list of unique movie genres mentioned by a club'
  ],
  [
    [[2, 3], [5, 1], [9, 5]],
    sumOfElements,
    25,
    'Compute the total number of pushups done in all sessions'
  ],
  [
    [["Parrot"], ["Crow", "Crow"], ["Hawk", "Eagle"]],
    uniqueElements,
    ["Parrot", "Crow", "Hawk", "Eagle"],
    'list of all unique bird species'
  ],
  [
    [[5, 10], [5, 3, 2], [15]],
    sumOfElements,
    40,
    'Sum all distances covered during cycling practice'
  ],
  [
    ['vanilla', 'chocolate', 'strawberry', 'chocolate', 'vanilla'],
    uniqueElements,
    ['vanilla', 'chocolate', 'strawberry'],
    'List unique flavors tried in an ice-cream tasting event'
  ],
  [
    [['milk', 'water', 'tea'], ['milk', 'tea'], ['milk', 'tea', 'sugar']],
    uniqueElements,
    ['milk', 'water', 'tea', 'sugar'],
    'Combine the ingredients from all recipe attempts'
  ],
  [
    ['step', 'close', 'heel', 'step', 'hop', 'close'],
    reverse,
    ['close','hop', 'step', 'heel', 'close', 'step'],
    'Reverse the order of dance steps recorded by a choreographer'
  ],
  [
    [[4, 3], [2], [3, 1], [5, 2]],
    sumOfElements,
    20,
    'Sum all weights of parcels recorded in a courier office'
  ],
  [
    [['onion', 'olives'], ['olives', 'cheese'], ['mushroom', 'onion']],
    uniqueElements,
    ['onion', 'olives', 'cheese', 'mushroom'],
    'list distinct toppings chosen by pizza customers'
  ],
  [
    [['red', 'orange'], ['orange', 'maroon'], ['red', 'pink']],
    uniqueElements,
    ['red', 'orange', 'maroon', 'pink'],
    'all color swatches from three design sets'
  ],
  [
    [['Sydney', 'Paris'], ['Sydney', 'Melbourne'], ['Japan', 'Paris']],
    uniqueElements,
    ['Sydney', 'Paris', 'Melbourne', 'Japan'],
    'List unique destinations chosen in a travel club survey'
  ],
  [
    [[1], [2, 1], [3]],
    sumOfElements,
    7,
    'Sum all hours spent practicing an instrument'
  ],
  [
    [['Aloe Vera', 'Egg Plant'], ['Aloe Vera', 'Pothos'], ['Pothos']],
    uniqueElements,
    ['Aloe Vera', 'Egg Plant', 'Pothos'],
    'Find all distinct types of plants noted during fieldwork'
  ],
  [
    [['Pokemon', 'Mickey Mouse'], ['Doremon', 'We Bear Bears'], ['Pokemon', 'Mickey Mouse']],
    uniqueElements,
    ['Pokemon', 'Mickey Mouse', 'Doremon', 'We Bear Bears'],
    'List unique cartoon characters favored by children'
  ],
  [
    [['Dark', 'White'], ['Nutty', 'Dark'], ['Nutty']],
    uniqueElements,
    ['Dark', 'White', 'Nutty'],
    'Count unique flavors tasted in a chocolate workshop'
  ],
  [
    [[3, 5, 2], [5, 2, 5], [1, 2, 1]],
    sumOfElements,
    26,
    'Sum all minutes of meditation logged across sessions'
  ],
  [
    [['hammer', 'nails'], ['saw'], ['screwdrivers', 'nails'], ['tape', 'saw']],
    uniqueElements,
    ['hammer', 'nails', 'saw', 'screwdrivers', 'tape'],
    'Identify every unique tool used in a repair workshop'
  ],
  [
    [['coffee', 'milk'], ['coffee', 'water'], ['coffee', 'water', 'milk', 'sugar']],
    uniqueElements,
    ['coffee', 'milk', 'water', 'sugar'],
    'Gather all ingredients used in three versions of the same dish'
  ],
  [
    [['Baby Shark', 'Twinkle Twinkle Little Star'], ['ABCD', 'Baby Shark'], ['Twinkle Twinkle Little Star']],
    uniqueElements,
    ['Baby Shark', 'Twinkle Twinkle Little Star', 'ABCD'],
    'Create a list of distinct songs hummed by children on a bus ride'
  ]
];

const TESTS_HAVING_TARGET = [
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
  [
    ["red", "blue", "red", "green", "red", "blue"],
    'blue',
    countElements,
    2,
    'how many blue ribbons were cut'
  ],
  [
    ["Dune", "Dune", "Foundation", "Dune"],
    'Dune',
    countElements,
    3,
    'Count how many times “Dune” was returned'
  ],
  [
    ["deer", "deer", "rabbit", "deer"],
    'deer',
    countElements,
    3,
    'Count how many times “deer” was seen'
  ],
  [
    [["vanilla", "chocolate"], ["strawberry"], ["chocolate"]],
    'chocolate',
    countElements,
    2,
    'how many orders were "chocolate"'
  ],
  [
    [[22, 23], [25, 24, 22], [29]],
    temp => temp < 32,
    satisfiesAll,
    true,
    'are all temperatures below 32'
  ],
  [
    [[3, 4], [5, 2], [1]],
    value => value > 0,
    satisfiesAll,
    true,
    'are all values positive'
  ],
  [
    [[110, 115], [118], [109]],
    reading => reading < 120,
    satisfiesAll,
    true,
    'Check if all readings are below 120'
  ],
  [
    ["track1", "track2", "track1"],
    'track1',
    countElements,
    2,
    'Count occurrences of "track1"'
  ],
  [
    [[5, 6], [7], [6]],
    measurement => measurement > 7,
    satisfiesAtleastOne,
    false,
    'Check if any measurement is above 7'
  ],
  [
    [[2, 3], [1], [4, 2]],
    4,
    containsAtLeastOne,
    true,
    'Photography Exposure Values'
  ],
  [
    [['apple', 'banana'], ['banana'], ['banana', 'grapes']],
    'banana',
    countElements,
    3,
    'Count how many times “banana” appears'
  ],
  [
    [['good', 'excellent'], ['bad'], ['excellent']],
    'excellent',
    containsAtLeastOne,
    true,
    'Determine whether any student wrote the word “excellent”'
  ],
  [
    [[20, 34], [11, 45], [19], [49, 35]],
    value => value < 50,
    satisfiesAll,
    true,
    'Check whether all recorded rainfall values are under 50'
  ],
  [
    [["red", "orange"], ["orange", "red"], ["red", "red"]],
    'red',
    countElements,
    4,
    'Count how many tiles in a mosaic were listed as “red”'
  ],
  [
    [[80, 100], [0, 99], [12, 50]],
    score => score > 90,
    satisfiesAtleastOne,
    true,
    'Check if any participant scored above 90 in tests'
  ],
  [
    [20, 18, 21, 23, 24, 30],
    age => age >= 18,
    satisfiesAll,
    true,
    'Verify if all ages listed for an event are 18 or above'
  ],
  [
    [["mi", "fa", "so"], ["do", "mi"], ["fa"]],
    'fa',
    containsAtLeastOne,
    true,
    'Determine whether the note “fa” appears in any music sheet'
  ],
];

const delimiter = () => { console.log('-'.repeat(20)) };

const testAll = () => {
  TESTS.forEach(test);
  delimiter();
  TESTS_HAVING_TARGET.forEach(testContainsAtLeastOnce);
}

testAll();