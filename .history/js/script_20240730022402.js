function increase(){
    let count=0; 
    let count1=0;
    let x=document.getElementById("main").innerHTML=++count;
    console.log(x);
    let y=document.getElementById("increase").innerHTML=++count1;
    console.log(y);
    if(count>20){
        alert("change");
    }
}



function reset_1(){
    let count=0; 
   
    let x=document.getElementById("main").innerHTML=count;
    console.log(x);
   
}