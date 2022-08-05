let container = document.querySelector('#container');
let stopSmart = document.querySelector('#stopSmart');
let working = false;
let work = () => working ? working = false : working = true;
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
  stopSmart.classList.toggle('no-show');
}
let smartNow = () => {
  smartStop();
  if(working == true){
    drawing();
  }else{
    console.log('stop please!');
  }
}
printMap();
