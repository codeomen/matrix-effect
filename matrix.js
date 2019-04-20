const chars = 'AZﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ123456789'
const emCount = window.innerWidth /
  parseFloat(getComputedStyle(document.querySelector('body'))['font-size']);
const columnCount = Math.floor(emCount / 1.5);

function insertColumns() {
  // Generate empty columns based on width

  for (let c = 0; c < columnCount; c++) {
    let elem = document.getElementById('container');
    let newColDiv = document.createElement('div');
    newColDiv.id = ('col' + c);
    elem.appendChild(newColDiv);
  }
}

insertColumns();


var randCharArray = [];

// generate random character array
function genRandCharArray(len) {
  randCharArray = [];
  for (let i = 0; i < len; i++) {
    randCharArray.push(chars.charAt(Math.random() * 36))
  }
  return randCharArray
}
genRandCharArray(60);

function addCharToDOM(char, contName, idx) {
  // console.log(contName);
  const container = document.getElementById(contName)
  console.log(container)
  const element = document.createElement('div')
  const newDigit = document.createTextNode(char)
  element.appendChild(newDigit)
  container.appendChild(element)  
}

// basic function looping through the Array of characters
function digiStream(charList, col) {

  // index variable for our timed loop
  var idx = 0
  // start loop
  const timedLoop = setInterval(() => {

    addCharToDOM(charList[idx], 'col'+col, idx)
    const currentElement = document.getElementById('col' + col);
    console.log( `current element: ${currentElement}`)
    currentElement.children[idx].classList.add('glow')

    if (idx > 0) {
      currentElement.children[idx - 1].classList.remove('glow');
      if (idx == 45) {
        currentElement.children[idx].classList.remove('glow');
      }

      let bow = Math.round((Math.random() * 10));
      let randElem = Math.round((Math.random() * 47));
      let currentElementChild = currentElement.children[randElem];

      console.log(currentElement);
      if (bow === 3 && currentElementChild) {
        currentElementChild.style.color = 'black';
      }
    }
    if (idx === 48) {
      clearInterval(timedLoop)
    }
    idx++
  }, 50)
}


// Add digiStream to a column randomly every 50ms
var iCol = 0;
const addCol = setInterval(() => {
  let randColumn = Math.floor((Math.random() * columnCount));
  genRandCharArray(50);
  digiStream(randCharArray, randColumn);

  // console.log(iCol);
  if (iCol === columnCount * 2) {
    clearInterval(addCol);
    iCol = 0;
  }
  iCol++;
}, 100)