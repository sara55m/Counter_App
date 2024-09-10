function increase(){
    let count=0; 
    let count1=0;
    document.getElementById("main").innerHTML=++count;
    document.getElementById("increase").innerHTML=++count1;
    if(count>20){
        alert("change");
    }

    

}