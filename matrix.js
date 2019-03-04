const chars = 'AZﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍ123456789'
var randCharArray = []

// generate random character array
function genRandCharArray(len) {
  for (let i=0; i < len;i++) {
    randCharArray.push(chars.charAt(Math.random() * 36))
  }
  return randCharArray
}  

// basic function looping through the Array of characters
function digiStream(charList) {

  function addCharToDOM(char) {
    let container = document.querySelector('.container')
    let column = document.createElement('div')
    let newDigit = document.createTextNode(char)
    
    column.appendChild(newDigit)
    container.insertBefore(column,container.childNodes[0])
  }

  // index variable for our timed loop
  var i = 0
  // start loop
  var timedLoop = setInterval( function() {
    // console.log(charList[i])
    addCharToDOM(charList[i])
    
    if (i > 1) {
      let bow = Math.round((Math.random() * 10));
      let currentElement = document.querySelector('.container');
      let currentElementChild = currentElement.firstChild;
      if (bow === 3) {
        currentElementChild.style.color = 'black'
      }
    }
    i++
    if (i === 30) { 
      clearInterval(timedLoop)
    } 
  }, 50)
}

genRandCharArray(32)

digiStream(randCharArray)

