let container = document.querySelector('#container');
let addBox = () => {
  const box = document.createElement('div');
  box.classList.add('box');
  container.appendChild(box);
}
let printMapLine = () => {
  for(i = 0; i < 16; i++){
    addBox();
  }
}
let printMap = () => {
  for(j = 0; j < 16; j++){
    printMapLine();
  }
}
