let input = [11,	11,	13,	7,	0,	15,	5,	5,	4,	4,	1,	1,	7,	1,	15,	11];

//PART 1
const getMaxIndex = (list) => list.reduce((currMax, num, i) => (list[currMax] < num) ? i : currMax, 0);
const getState = (list) => list.join(" ");

let seenStates = new Set();
let count = 0;
let state = getState(input);
while (!seenStates.has(state)){
  seenStates.add(state);
  let maxIndex = getMaxIndex(input);
  let max = input[maxIndex];
  input[maxIndex] = 0;
  let i = (maxIndex + 1) % input.length;
  while (max > 0){
    ++input[i];
    ++i;
    i %= input.length;
    --max;
  }
  state = getState(input);
  ++count;
}

console.log(count);

//PART 2
