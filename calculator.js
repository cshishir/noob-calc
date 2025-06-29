const display = document.getElementById("display");

//input 
function appendCharacter(character){
    display.value += character;
}

// Display clear
function clearDisplay(){
    display.value=("");
} 

//You know what this function does
function calculateResult(){
  try{
    display.value = eval(display.value);
  } 
  catch{
    display.value= "Error";
  }
}

// kills the last character
function eraseLastCharacter(){
    if(display.value){
 display.value = display.value.slice(0, -1);
    }
}

//% calc
function calculatePercentage(){
  try{
    display.value = eval(display.value) / 100;
  } catch{
    display.value = "Error"
  } 
}

// read keyboard input
document.addEventListener("keydown", function(event) {
  const key = event.key;

  if (!isNaN(key) || "+-*/.".includes(key)) {
      appendCharacter(key); 
  } else if (key === "Enter") {
      calculateResult(); 
  } else if (key === "Backspace") {
      eraseLastCharacter(); 
  } else if (key === "Escape") {
      clearDisplay(); 
  }
});

