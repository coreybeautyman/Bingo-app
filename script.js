const nextBtn = document.querySelector('.next');
const resetBtn = document.querySelector('.reset');
const bingoCall = document.getElementById('bingo-call');
const onTheCard = document.getElementById('current-number-value');
const prevCall1 = document.getElementById('previous-number-value-01');
const prevCall2 = document.getElementById('previous-number-value-02');
const prevCall3 = document.getElementById('previous-number-value-03');
const countEl = document.getElementById('count');
const bingoTable = document.getElementById('bingo-table');
const blankTable = bingoTable.innerHTML;
const prevNumText = document.querySelector('.prev-num-text');

let currCall, currNum, prevNum01, prevNum02, prevNum03, originalBingoData;
let count = 0;

let bingoData = {
  1: "Kelly's Eye",
  2: 'One Little Duck',
  3: 'Little Marie',
  4: 'Knock at the Door',
  5: 'Man Alive',
  6: 'Chopping sticks',
  7: 'Lucky 7',
  8: 'Garden Gate',
  9: 'Shearer',
  10: 'Downing Street',
  11: 'Legs Eleven',
  12: 'One Dozen',
  13: 'Unlucky for Some',
  14: "Valentine's Day",
  15: 'Young and Keen',
  16: 'Sweet Sixteen',
  17: 'Dancing Queen',
  18: 'Grab Us A Pint',
  19: 'Goodbye Teens',
  20: 'One Score',
  21: 'Key of the Door',
  22: 'Two Little Ducks',
  23: 'The Lord is My Shepherd',
  24: 'Knock at the Door',
  25: 'Duck and Dive',
  26: 'Pick and Mix',
  27: 'Gateway to Heaven',
  28: 'Overweight',
  29: 'Rise and Shine',
  30: 'Dirty Gertie',
  31: 'Get Up and Run',
  32: 'Buckle My Shoe',
  33: 'Dirty Knee',
  34: 'Ask for More',
  35: 'Jump and Jive',
  36: 'Three Dozen',
  37: 'More than Eleven',
  38: 'Christmas Cake',
  39: 'Bruuuuuuunnnnnnnnoooooo',
  40: 'Naughty Forty',
  41: 'Time for Fun',
  42: 'Four and Two',
  43: 'Down on Your Knees',
  44: 'Droopy Drawers',
  45: 'Halfway There',
  46: 'Rossi Up To Tricks',
  47: 'Four and Seven',
  48: 'Mass Debate',
  49: 'PC (Police Constable)',
  50: 'Blind 50',
  51: 'Tweak of the Thumb',
  52: 'Danny La Rue',
  53: 'Stuck in the Tree',
  54: 'Clean the Floor',
  55: 'Snakes Alive',
  56: 'Was She Worth It?',
  57: 'Heinz Varieties',
  58: 'Make Them Wait',
  59: 'Brighton Line',
  60: `Have A Whiskey It's Number`,
  61: 'Bakers Bun',
  62: 'Turn the Screw',
  63: 'Tickety Boo',
  64: 'Red Raw',
  65: 'Old Age Pension',
  66: 'Clickety Click',
  67: 'Made in Heaven',
  68: 'Saving Grace',
  69: 'Either Way Up',
  70: 'Three Score and Ten',
  71: 'Bang on the Drum',
  72: 'Seven and Two',
  73: 'Queen Bee',
  74: 'Seven and Four',
  75: 'Strive and Strive',
  76: 'Trombones',
  77: 'Sunset Strip',
  78: "Heaven's Gate",
  79: 'One More Time',
  80: 'Eight and Blank',
  81: 'Stop and Run',
  82: 'Straight On Through',
  83: 'Time for Tea',
  84: 'Eight and Four',
  85: 'Staying Alive',
  86: 'Between the Sticks',
  87: 'Torquay in Devon',
  88: 'Two Fat Lasses',
  89: 'Nearly There',
  90: 'Top of the Shop',
};

originalBingoData = { ...bingoData };

function getRandomBingoItem() {
  const keys = Object.keys(bingoData);
  if (keys.length === 0) return 0;

  const randomKey = keys[Math.floor(Math.random() * keys.length)];

  const randomItem = [randomKey, bingoData[randomKey]];

  delete bingoData[randomKey];

  return randomItem;
}

function reset() {
  currNum = prevNum01 = prevNum02 = prevNum03 = '';
  count = 0;

  //   Dom
  prevCall1.innerHTML = '';
  prevCall2.innerHTML = '';
  prevCall3.innerHTML = '';
  bingoCall.innerHTML = '';
  onTheCard.innerHTML = '';
  countEl.innerHTML = '';
  bingoTable.innerHTML = blankTable;
  bingoData = originalBingoData;
  currCall = '';
  currNum = '';
  prevNumText.setAttribute('hidden', false);
}

function nextBingoCall() {
  if (prevNum01) prevNumText.removeAttribute('hidden');

  const currItem = getRandomBingoItem();
  if (currItem === 0) return console.log('out of numbers');
  currNum = currItem[0];
  currCall = currItem[1];

  if (prevNum01 !== undefined) {
    prevCall1.innerHTML = prevNum01;
  }

  if (prevNum02 !== undefined) {
    prevCall2.innerHTML = prevNum02;
  }
  if (prevNum03 !== undefined) {
    prevCall3.innerHTML = prevNum03;
  }

  bingoCall.innerHTML = currCall;
  onTheCard.innerHTML = currNum;

  const tdElement = document.getElementById(`${currNum}`);
  if (!tdElement) return;

  tdElement.classList.add('green');

  prevNum03 = prevNum02;
  prevNum02 = prevNum01;
  prevNum01 = currNum;

  count++;
  countEl.innerHTML = count;
}

nextBtn.addEventListener('click', nextBingoCall);

resetBtn.addEventListener('click', reset);
