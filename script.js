/* =================
  TESTS, LOOK AT THESE
  Reading tests will always help you discover your requirements.
  You can make this window bigger. 
   ===================
*/

const {
  core: { test, expect, run },
  prettify
} = window.jestLite;

/* =================
  FIND ELEMENTS
  These are all the elements we will look for.
   ===================
*/
const getHeader = document.querySelectorAll("header"),
  getH1 = document.querySelectorAll("h1"),
  getSiteHeader = document.querySelectorAll(".c-site-header"),
  getAria = document.querySelectorAll('nav[aria-label="Main Site Links."]'),
  getMain = document.querySelectorAll("main"),
  getFooter = document.querySelectorAll("footer"),
  getSiteFooter = document.querySelectorAll(".c-site-footer"),
  getIFrame = document.querySelectorAll("iframe"),
  getImage = document.querySelectorAll("img"),
  getWords = document.body.innerText;
  var x, total, randomArray, totalNumber;

  // Describe this function...
  function updateInfoSpan(x) {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_info = document.getElementById('info');
    element_info.innerText = x;
  }
  
  // Describe this function...
  function displayRolls() {
    if(--window.LoopTrap <= 0) throw "Infinite loop.";
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');

    if(total.length > 0){
       new_li.innerText = total.slice(-1)[0];
    }
   
    element_list.appendChild(new_li);
  }
  
  function randomInt(n) {
    // Return a random number from in [0, n[
    return Math.floor(Math.random()*n);
  }
  
  function randomMember(arr) {
    // Return a random member of the array
    return arr[randomInt(arr.length)]
  }
  
  
  total = [];
  randomArray = [1, 2, 3, 4, 5, 6];
  displayRolls();
  
  
  document.getElementById('button_roll').addEventListener('click', (event) => {
    total.push(randomMember(randomArray));
    let element_total = document.getElementById('total');
    element_total.innerText = total.reduce((a,b) => a+b, 0);
    totalNumber = total.reduce((a,b) => a+b, 0);
    if (totalNumber == 11) {
      updateInfoSpan('You Won!');
    } else if (totalNumber > 11) {
      updateInfoSpan('You Lost!');
    } else if (totalNumber < 11) {
      updateInfoSpan('Keep playing!');
    }
    displayRolls();
  
  });
  
  document.getElementById('button_remove').addEventListener('click', (event) => {
    total.pop();
    totalNumber = total.reduce((a,b) => a+b, 0);
    let element_total2 = document.getElementById('total');
    element_total2.innerText = total.reduce((a,b) => a+b, 0);
    updateInfoSpan('Keep playing!');
  
  });
  
  document.getElementById('button_restart').addEventListener('click', (event) => {
    total = [];
    totalNumber = 0;
    let element_total3 = document.getElementById('total');
    element_total3.innerText = total.reduce((a,b) => a+b, 0);
    updateInfoSpan('Keep playing!');
  
  });
