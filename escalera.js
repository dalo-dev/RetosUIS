"use strict";

const ladder = function (lvl) {
  let count = 1;
  let numPerLadder = 1;
  const oddNumbersColumn = new Array(lvl).fill(0);
  const evenNumbersColumn = new Array(lvl).fill(0);

  for (let i = 0; i < lvl; i++) {
    const currentLadderNumbers = [];
    for (let j = 0; j < numPerLadder; j++) {
      currentLadderNumbers.push(count);
      if (count % 2 === 0) oddNumbersColumn[j] += count;
      else {
        evenNumbersColumn[j] ||= 1;
        evenNumbersColumn[j] *= count;
      }
      count++;
    }
    console.log(currentLadderNumbers.join(" "));
    numPerLadder++;
  }

  console.log(`${oddNumbersColumn.join(" ")} Sum`);
  console.log(`${evenNumbersColumn.join(" ")} Mul`);
};

ladder(7);
