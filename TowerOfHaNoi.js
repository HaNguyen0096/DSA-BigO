let n=0;
function HanoiPuzzle(disk, rodA, rodB, rodC) {
    if (disk === 1) {
        console.log('Move disk from rod ', rodA, ' to rod ', rodC);
        ++n;
    }
    else {
        HanoiPuzzle(disk-1, rodA, rodC, rodB);
        console.log('Move disk from rod ', rodA, ' to rod ', rodC);
        ++n;
        HanoiPuzzle(disk-1, rodB, rodA, rodC);
  }
  
  return 'Number of move is ' + n;
}

console.log(HanoiPuzzle(10, "A", "B", "C"));

//O(2^n) Each time we increase the number of desk by 1, the number of move will be double