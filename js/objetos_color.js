
function addRates(value){
        for(var i=1; i<=value; i++) {
        document.getElementById("autobus"+i).classList.add("active");
        }
}
function removeRates(){
    for(var i=1; i<=5; i++) {
        document.getElementById("autobus"+i).classList.remove("active");
    }

} 
$('.bus').on('click', function(e) {
    if (e.target !== this)
      return;  
    removeRates();
});
