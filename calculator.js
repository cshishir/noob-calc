const display=document.getElementById('display');
const image= document.getElementById('dark');
function function1(value){
   display.value+=value;
};
function calculate(){
    try{
const result=eval(display.value);
  if (result === 69 ) {
  display.value = 'Interesting number!';
}else if(result=== 9/11){
  display.value='osama be callin';
  image.style.display='block';
  setTimeout(function(){
    image.style.display='none';
  },5000);
}else {
  display.value = result;
  image.style.display = 'none';
};


}

catch(error){
    display.value='R U SERIOUS ?';
}


};



function functionclear(clr){
  display.value=clr;
   
};