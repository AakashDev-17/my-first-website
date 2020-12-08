let box = document.querySelector('.box')
let innerBox = document.querySelector('.inner-box')
let count = 0;


let movement = () =>{
   
   if(count == 0){
      innerBox.classList.add('bottom');
      count = (count+1)%4;
   }
   else if(count == 1){
      innerBox.classList.remove('bottom');
      innerBox.classList.add('right');
      count = (count+1)%4;
   }
   else if(count == 2){
      innerBox.classList.remove('right');
      innerBox.classList.add('top');
      count = (count+1)%4;
   }
   else if(count == 3){
      innerBox.classList.remove('top');
      count = (count+1)%4;
   }
   console.log(count);
}

box.addEventListener('click', movement)