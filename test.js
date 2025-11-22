const inputRef = document.querySelectorAll("input")   
const inputEl = document.querySelector("#name-input"); 
const outputRef = document.querySelector("#name-output");
const textRef = document.querySelector("#validation-input");
const controlRef = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputRef.forEach((input, i) =>{
input.addEventListener("change", (e) => {
    console.log(e.target.value)
    
    if (i=== 0) {
       document.body.style.backgroundColor = "red";
    } else if (i === 1) {
      document.body.style.backgroundColor = "white";
    } else if (i === 2) {
      document.body.style.backgroundColor = "green";
    }
})
})





inputEl.addEventListener("input", (evt) => {
  console.log(evt.target.value);
  
  if(evt.target.value !== "") {
     outputRef.textContent = evt.target.value;
  }else{
    outputRef.textContent = "незнайомець";
  }
})





const requiredLength = Number(textRef.dataset.length);
textRef.addEventListener("blur", (event) => {
  const value = event.target.value;

  if (value.length === requiredLength) {
    textRef.classList.add("valid");
  } else {
    textRef.classList.add("invalid");
  }
});








controlRef.addEventListener("input", (event) => {
  textEl.style.fontSize = event.target.value;
});