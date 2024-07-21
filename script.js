const containerEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
  const colorContainer = document.createElement('div');
  colorContainer.classList.add('color-container');
  containerEl.appendChild(colorContainer);
  
}

const colorContainerEls = document.querySelectorAll('.color-container');

generateColors();

function generateColors(){
  colorContainerEls.forEach((elem)=>{
    const newColor = randomColor();
    elem.style.backgroundColor = '#' + newColor;
    elem.innerText = '#' + newColor;
  })
}

function randomColor(){
  const chars = '0123456789abcdef';
  const colorLength = 6;
  let colorCode = '';
  for (let index = 0; index < colorLength; index++) {
    const randomNum = Math.floor(Math.random() * colorLength);
    colorCode += chars.substring(randomNum, randomNum +1);
    
  }
  return colorCode;
}

let reload = document.querySelector('.refresh');
reload.addEventListener('click',()=>{
  location.reload();
})