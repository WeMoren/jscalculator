const displayInput = document.getElementById("display");

const display = (input) => {
displayInput.value += input;
}


const deleteInput = () => {
    displayInput.value = displayInput.value.slice(0, -1)
};

const clearInput = () => {
    displayInput.value = "";
}

const calculate = () => {
   try{
    displayInput.value = eval(displayInput.value);
   }catch(error){
    displayInput.value = "Syntax Error! Consult WeMoren!";
   };
    
//    if(displayInput.value === eval(displayInput.value)){
//         eval(displayInput.value).text.align = "right"
//    }
   }  
    
        
    
