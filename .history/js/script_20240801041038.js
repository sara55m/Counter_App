let count=0;
document.getElementById("one").innerHTML=count;
function increase(){
    count+=1;
    document.getElementById("one").innerHTML=count;   
    document.getElementById("one").innerHTML.style="font-weight:bolder";
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