let count=0;
let count1=0;
function increase(){
    count+=1;
    count1+=1;
    document.getElementById("increase").innerHTML=count;
    document.getElementById("main").innerHTML=count1;
    
}



function reset_1(){
    let count=0; 
   
    let x=document.getElementById("main").innerHTML=count;
    console.log(x);
   
}