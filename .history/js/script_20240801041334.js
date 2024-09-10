let count=0;
document.getElementById("one").innerHTML=count;
function increase(){
    count+=1;
    document.getElementById("one").innerHTML=count;   
    document.getElementById("increase2").innerHTML.style.font-size=" 50px";
}

function reset_1(){
    count=0;   
    document.getElementById("one").innerHTML=count;   
}

count=0;
document.getElementById("one").innerHTML=count;
function decrease(){
    count-=1;
    document.getElementById("one").innerHTML=count;
    
}