//main js file
window.addEventListener("load", function(){

    var allChecks = document.querySelectorAll(".cols")
    for (var i = 0; i < allChecks.length; i++) {
        //set initially to black on DOM
        allChecks[i].style.backgroundColor = "black";
        //attach listener to all divs
        document.querySelectorAll(".cols")[i].addEventListener("click", function(){
            //get specific div ID
            var colId = this.id;
            //get initial color
            var initialColor = document.getElementById(colId).style.backgroundColor;
            switch (initialColor){
                case "black":
                    document.getElementById(colId).style.backgroundColor = "white";
                break;
                case "white":
                    document.getElementById(colId).style.backgroundColor = "black";
                break;
                default:
                    document.getElementById(colId).style.backgroundColor = "black";
            }
            //get new color and log changes
            var newColor = document.getElementById(colId).style.backgroundColor;
            console.log(`Changed background for box ${colId} from ${initialColor} to ${newColor}`)
        
        })
      }

})