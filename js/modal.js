const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal_close');
const openBtn = document.querySelector('#btn-get');

const openModal = () => {
  modal.style.display = 'block';
}

const closeModal = () => {
  modal.style.display = 'none'
}

openBtn.onclick = openModal;
closeBtn.onclick = closeModal;


modal.onclick = (event) => {
  console.log(event.target)
  // if(event.target == modal){
  //   closeModal()
  // }
}