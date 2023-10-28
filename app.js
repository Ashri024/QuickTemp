
// function convert(){
//     let form=document.getElementById("convForm");
//     form.addEventListener("submit",(e)=>{
//         e.preventDefault();
//         console.log(e);
//     });
// }
// convert();
function infoBox(){

}

function selectOptions1() {
    let selection1 = document.getElementById("selection1");
    let selection2 = document.getElementById("selection2");
    let options = ["celsius", "fahrenheit", "kelvin", "rankine"];

    let arr = options.filter((option) => {
        if (selection1.value !== option) return true;
    })
    console.log(arr);

    selection2.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        selection2.innerHTML += `<option value="${arr[i]}" selected>${arr[i]}</option>`
    }

}

function preventDef() {
    let temp = document.getElementById("temp").value;
    console.log(temp.value);

    let selection1 = document.getElementById("selection1").value;
    let selection2 = document.getElementById("selection2").value;

    console.log(selection1);
    console.log(selection2);

    let result = "";
    if (selection1 === 'celsius' && selection2 === 'fahrenheit') {
        result = celToFah(temp);
    }
    else if (selection1 === 'celsius' && selection2 === 'kelvin') {
        console.log("Here");
        result = celToKel(temp);
    }
    else if (selection1 === 'celsius' && selection2 === 'rankine') {
        result = celToRan(temp);
    }
    else if (selection1 === 'fahrenheit' && selection2 === 'celsius') {
        result = fahToCel(temp);
    }
    else if (selection1 === 'fahrenheit' && selection2 === 'kelvin') {
        result = fahToKel(temp);
    }
    else if (selection1 === 'fahrenheit' && selection2 === 'rankine') {
        result = fahToRan(temp);
    }
    else if (selection1 === 'kelvin' && selection2 === 'celsius') {
        result = kelToCel(temp);
    }
    else if (selection1 === 'kelvin' && selection2 === 'fahrenheit') {
        result = kelToFah(temp);
    }
    else if (selection1 === 'kelvin' && selection2 === 'rankine') {
        result = kelToRan(temp);
    }
    else if (selection1 === 'rankine' && selection2 === 'fahrenheit') {
        result = ranToFah(temp);
    }
    else if (selection1 === 'rankine' && selection2 === 'celsius') {
        result = ranToCel(temp);
    }
    else if (selection1 === 'rankine' && selection2 === 'kelvin') {
        result = ranToKel(temp);
    }
    else {
        console.log("Sorry! invalid input");
    }

    displayRes(result);
    displayVisual(result);
    return false;
}

function displayRes(result) {
    let form = document.getElementById("convForm");
    let converter = document.getElementById("converter");
    // converter.style.height = ";
    
    let myPromise = new Promise((resolve, reject) => {
        // console.log("Hello");
        let selection2 = document.getElementById("selection2").value;
        let eleResult="";
        if(document.getElementById("resItems")){
            eleResult = document.createElement("div");
            form.removeChild(document.getElementById("resItems"));
            eleResult.classList.add("convItems");
        }else{
            eleResult = document.createElement("div");
            eleResult.classList.add("convItems");
            eleResult.classList.add("id","resOpacity");
        }
        
        eleResult.setAttribute("id", "resItems");
        eleResult.innerHTML = `
            <span id="result" class="sizeC1 shiftRight">Result: </span>
            <span id="resultValue" class="sizeC1">${result} ${capitalizeFirstWord(selection2)}</span>
            `;
        form.appendChild(eleResult);
        console.log(`Result: ${result} ${selection2}`);

        setTimeout(() => {
            resolve();
        }, 500);
        
    });
    myPromise.then(() => {
        let resItems = document.getElementById("resItems");
        resItems.style.opacity = "1";
    });
}

function capitalizeFirstWord(inputString) {
    // Check if the input string is not empty
    if (inputString.length === 0) {
      return inputString;
    }
  
    // Split the string into words
    const words = inputString.split(" ");
  
    // Capitalize the first word
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
  
    // Join the words back together
    const capitalizedString = words.join(" ");
  
    return capitalizedString;
  }
//Fahrenheit conversions
function celToFah(temp) {
    temp=Number(temp);
    let result = temp *(9/5)+32;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function kelToFah(temp) {
    temp=Number(temp);
    let result = 1.8 *(temp-273.15)+32;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function ranToFah(temp) {
    temp=Number(temp);
    let result = temp-459.67;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}

//Celsius conversions
function fahToCel(temp) {
    temp=Number(temp);
    let result = (temp-32)*(5/9);
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function kelToCel(temp) {
    temp=Number(temp);
    let result = temp-273.15;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function ranToCel(temp) {
    temp=Number(temp);
    let result = (temp-491.67)*(5/9);
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}

//Kelvin Conversions
function celToKel(temp) {
    temp=Number(temp);
    let result = temp +273.15;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function fahToKel(temp) {
    temp=Number(temp);
    let result = (temp-32)*(5/9)+273.15;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function ranToKel(temp) {
    temp=Number(temp);
    let result = temp/1.8;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}

//Rankine conversion
function celToRan(temp) {
    temp=Number(temp);
    let result = temp*(9/5)+491.67;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function kelToRan(temp) {
    temp=Number(temp);
    let result = temp*(9/5);
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}
function fahToRan(temp) {
    temp=Number(temp);
    let result = temp+459.67;
    console.log(result);
    Number.isInteger(result)?(result=result): (result=result.toFixed(3));
    return result;
}

function displayVisual(result){
    let mercury=document.getElementById("mercury");
    let selection2 = document.getElementById("selection2").value;
    if(selection2=='fahrenheit'){
        result=fahToCel(result);
    }else if(selection2=='kelvin'){
        result=kelToCel(result);
    }else if(selection2=='rankine'){
        result=ranToCel(result);
    }
    console.log(result);

    if(result>100){

        mercury.style.height="55%";
        mercury.style.background="#FE0000";
        document.body.style.backgroundColor="rgb(255 158 158)";


    }else if(result<0){

        document.body.style.backgroundColor="#CCCCEB";
        mercury.style.height="0%";
        // mercury.style.background="#BF00FF";

    }else{

        mercury.style.height=`${result*0.55}%`;

        if(result>=0 && result <=25){
            mercury.style.background="#0b0af5";
            document.body.style.backgroundColor="#DBDAFE";

        }else if(result>=26 && result<=50){
            mercury.style.background="#99FFFF";
            document.body.style.backgroundColor="#EBFFFF";
        }else if(result>=51 && result<=75){
            mercury.style.background="#FF8200";
            document.body.style.backgroundColor="#FFE6CC";
        }else{
            mercury.style.background="#FF3800";
            document.body.style.backgroundColor="#FFD7CC";

        }

    }
}

function vanishMessage(){
    let infoMain= document.getElementById("infoMain");
    infoMain.style.display="none";
}

const temp = document.getElementById("temp");
const errorMessage = document.getElementById("error-message");

temp.addEventListener("input", function () {
  const inputValue = temp.value;
  const numericValue = inputValue;

  if (isNaN(numericValue) && inputValue!=="") {
    errorMessage.style.display="flex";

    errorMessage.innerHTML = `<img src="./images/info-circle.svg" alt="info"> Please enter only numeric characters.`;
    temp.value = "";
  } else {
    errorMessage.textContent = "";
    errorMessage.style.display="none";
  }
});