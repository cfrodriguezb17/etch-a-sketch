let container = document.querySelector('#container');
let buttonStart = document.querySelector('#buttonStart'); 
let working = false;
let work = () => working ? working = false : working = true;
let addBox = (w) => {
  let breadth = 960 / w;
  console.log(breadth);
  const box = document.createElement('div');
  box.style.cssText = `width: ${breadth}px; height: ${breadth}px;`;
  box.classList.add('box');
  container.appendChild(box);
}
let printMapLine = (x) => {
  for(i = 0; i < x; i++){
    addBox(x);
  }
}
let printMap = (x = 16, y = 16) => {
  for(j = 0; j < y; j++){
    printMapLine(x);
  }
}
let selectGrid = () => {
  container.innerHTML = '';
  let x = Number(prompt('How many rows do you want?'));
  let y = Number(prompt('How many columns do you want?'));
  if (y > 100) y = 100
  if (x > 100) x = 100
  container.style.cssText = `grid-template-columns: repeat(${y}, 1fr);
  grid-template-rows: repeat(${x}, 1fr);`;
  printMap(x, y);
}
let drawing = () => {
  container.addEventListener('mouseover', (event) => {
    if(event.target.classList == 'box'){
      if(working){
        event.target.classList.add('box-black');
      }
    }
  })
}
let smartStop = () => {
  work();
}
let smartNow = () => {
  smartStop();
  if(buttonStart.textContent == 'Smart Now'){
    buttonStart.textContent = 'Smart Stop';
  }else{
    buttonStart.textContent = 'Smart Now';
  }
  if(working == true){
    drawing();
  }
}
let resetMap = () => {
  let divs = container.querySelectorAll('div');
  for (let div of divs){
    div.style.background = 'grey';
  }
}
printMap();
