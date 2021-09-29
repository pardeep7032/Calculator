const answers = document.querySelector(".answerboard");
const typingboard = document.querySelector(".typingboard");
let typing = document.querySelector(".typing");
const keys =document.querySelectorAll(".keys");
let special = document.querySelectorAll(".spl");
let open = document.querySelector(".open");

let screenValue = "";
let typTxt;
for(item of keys){
    item.addEventListener('click',(e)=>{
        let buttonText = e.target.innerText;
        // console.log(screenValue);
        if(buttonText=='X'){
            buttonText = "*";
            screenValue+=buttonText;
            typing.innerHTML = screenValue;
        }
        else if(buttonText=='C'){
            screenValue="";
            typing.innerHTML = screenValue;
            answers.innerHTML = screenValue;
        }
        else if(buttonText=='x'){
            screenValue=screenValue.slice(0,-1);
            typing.innerHTML = screenValue;
        }
        else if(buttonText=="="){
            // eval is use to string value calculation
            screenValue = eval(screenValue);
            answers.innerHTML = eval(screenValue);
            // typing.innerHTML = eval(screenValue);
        }
        else if(buttonText=="log"){
            screenValue = Math.log(screenValue);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="sin"){
            screenValue = Math.sin(screenValue);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="cos"){
            screenValue = Math.cos(screenValue);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="tan"){
            screenValue = Math.tan(screenValue);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="PI"){
            screenValue = Math.PI;  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="sqr"){
            screenValue = Math.pow(screenValue,2);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="cube"){
            screenValue = Math.pow(screenValue,3);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="sqrt"){
            screenValue = Math.sqrt(screenValue);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="F!"){
            screenValue = factorial(screenValue);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="F!"){
            screenValue = Math.exp(screenValue);  //log 
            answers.innerHTML = screenValue;
        }
        else if(buttonText=="%"){
            screenValue = screenValue/100;
            answers.innerHTML = screenValue; 
        }
        else if(buttonText=="OP"){
           f1();
           open.innerText="H";
        }
        else if(buttonText=="H"){
           f2();
           open.innerText="OP";
        }
        else{
            screenValue+=buttonText;
            typing.innerHTML = screenValue;
        }
    })
}



function factorial(n){
    if(n==0){
        return 1;
    }
    
    return n*factorial(n-1);
    
}

function f1(){
    var spl = document.querySelectorAll(".spl");
    var key = document.querySelectorAll(".keys");
    for(let index=0;index<spl.length;index++){
        spl[index].style.display="inline-flex";
    }
    for(let index=0;index<key.length;index++){
        key[index].style.padding="14px 14px";
        key[index].style.margin="8px 7px";
    }
}

function f2(){
    var spl = document.querySelectorAll(".spl");
    var key = document.querySelectorAll(".keys");
    for(let index=0;index<spl.length;index++){
        spl[index].style.display="none";
    }
    for(let index=0;index<key.length;index++){
        key[index].style.padding="18px 18px";
        key[index].style.margin="8px 10.5px";
    }
}



