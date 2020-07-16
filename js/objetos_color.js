var click=Boolean (false);
function addRates(value){ 
    for(var i=1; i<=value; i++) {
        document.getElementById("autobus" +i).classList.add("active");
    }
}
function reset(value){
    if(click===false){
        for(var i=1; i<=value; i++){
            document.getElementById("autobus" +i).classList.remove("active");
        }
    }
    else{

    }
    
} 
function clickar(){
    click=Boolean (true);
}
function clickReset(){
    click=Boolean (false);
}