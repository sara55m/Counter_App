let count=0;
document.getElementById("one").innerHTML=count;
function increase(){
    count+=1;
    document.getElementById("one").innerHTML=count;   
    
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