const parent = document.querySelector('.parent_block');
const child = document.querySelector('.child_block');

let moveX = 0; 
let moveY = 0;
const limitX = parent.clientWidth - child.offsetWidth;
const limitY = parent.clientHeight - child.clientHeight;

const moveBlock = () => {
  requestAnimationFrame(moveBlock);
  child.style.left = `${moveX}px`;
  child.style.top = `${moveY}px`

  if(moveX < limitX) moveX++
  else if(moveX >= limitX && moveY < limitY) moveY++
}

moveBlock();