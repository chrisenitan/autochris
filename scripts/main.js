//main js file
window.addEventListener("load", function () {
  //checked scripts
  var allChecks = document.querySelectorAll(".cols")
  for (var i = 0; i < allChecks.length; i++) {
    //set initially to black on DOM
    allChecks[i].style.backgroundColor = "black"
    //attach listener to all divs
    document
      .querySelectorAll(".cols")
      [i].addEventListener("click", function () {
        //get specific div ID
        var colId = this.id
        //get initial color
        var initialColor = document.getElementById(colId).style.backgroundColor
        switch (initialColor) {
          case "black":
            document.getElementById(colId).style.backgroundColor = "white"
            break
          case "white":
            document.getElementById(colId).style.backgroundColor = "black"
            break
          default:
            document.getElementById(colId).style.backgroundColor = "black"
        }
        //get new color and log changes
        var newColor = document.getElementById(colId).style.backgroundColor
        console.log(
          `Changed background for box ${colId} from ${initialColor} to ${newColor}`
        )
      })
  }
})

//custom brightness level for checked 

let customLevel = (req) =>{
  var checks = document.querySelectorAll(`.${req}`)
  for (var i = 0; i < checks.length; i++){    
    let getCurrentColor = checks[1].style.backgroundColor
    switch (getCurrentColor){
      case "black":
        checks[i].style.backgroundColor = "white"
        break;
        case "white":
          checks[i].style.backgroundColor = "black"
          break;
          default:
            checks[i].style.backgroundColor = "black"
    }
  }
  /* switch (req){
    case "mini":
      document.querySelectorAll("mini")
      break;
      case "medi":
        document.getElementById("3").style.backgroundColor = "white"
        break;
        case "maxi":
          document.getElementById("3").style.backgroundColor = "white"
          break;
          default:
            document.getElementById("3").style.backgroundColor = "white"

  } */
}
