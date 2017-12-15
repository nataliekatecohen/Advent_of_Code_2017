let input = 347991;

//PART 1
let x = 0, y = 0;
let steps = 1, direction = 1;
let value = 1;

while (value <= input){
  x += steps * direction;
  value += steps;
  if (value > input)
    break;
  y += steps * direction;
  value += steps;
  ++steps;
  direction *= -1;
}

let dist = Math.abs(x) + Math.abs(y);
dist -= value -input;
console.log(dist);
