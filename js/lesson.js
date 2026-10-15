const phoneInput = document.querySelector('#phone_input');
const checkBtn = document.querySelector('#phone_button');
const result = document.querySelector('#phone_result');

// const text = 'Johnny'
// console.log(text);

// const regex = /e/g

// console.log(text.replace(regex, '*'))

// console.log(regex.test(text))

const regex = /\+996 \d{3} \d{2}-\d{2}-\d{2}/g;

checkBtn.onclick = () => {
  if(regex.test(phoneInput.value)){
    result.style.color = 'green';
    result.textContent = 'OK'
  }else{
    result.style.color = 'red';
    result.textContent = 'Укажите корректный номер телефона'
  }
}


const tabBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items');

// const hideBlocks = () => {
//   tabBlocks.forEach((item) => {
//     item.classList.remove('active');
//   });
//   tabs.forEach((item) => {
//     item.classList.remove('active')
//   })
// }

// const showBlock = (index = 0) => {
//   tabBlocks[index].classList.add('active');
//   tabs[index].classList.add('active');
// }


// tabsParent.onclick = (event) => {
//   if(event.target.tagName.toLowerCase() == 'button'){
//     const index = [...tabs].indexOf(event.target);
//     hideBlocks();
//     showBlock(index);
//   }
// }

// const array = ['yellow', 'red', 'violet'];

const showBlock = (index = 0) => {
  tabBlocks.forEach((block, i) => block.classList.toggle('active', i == index));
  tabs.forEach((tab, i) => tab.classList.toggle('active', i == index));
}

tabsParent.onclick = (event) => {
  console.log(event.target);
  console.log(event.currentTarget);
  const selectedElement = event.target.closest('.tab_content_item');
  if(!selectedElement) return;

  const index = [...tabs].indexOf(selectedElement);
  showBlock(index);
}