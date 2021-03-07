//main js file
window.addEventListener("load", function(){
    document.querySelector(".cols").style.backgroundColor = "yellow";

    var allChecks = document.querySelectorAll(".cols")
    for (var i = 0; i < allChecks.length; i++) {
        document.querySelectorAll(".cols")[i].addEventListener("click", function(){
            var colId = this.id;
            document.getElementById(colId).style.backgroundColor = "green";
            console.log(`Changed background for box ${colId}`)
        })
      }

})
