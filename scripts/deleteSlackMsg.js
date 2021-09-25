//simple console script to delete all slaack messages in a chat.
//not stable:
/* 
not stable
the dom gets element loaded in view so once a while you have to scroll up to preload new classes. 
can fix with scroll event but i dont have time for that. 
*/

function myFunction() {
  var x = new Event("mouseover", { bubbles: true })
  document.querySelectorAll(".c-message_kit__gutter__right")[2].dispatchEvent(x)

  //click the menu icon on message
  if (document.querySelectorAll('[data-qa="more_message_actions"]')) {
    const allMenu = document.querySelectorAll('[data-qa="more_message_actions"]')
    allMenu[0].click()
    console.log("found and clicked menu")
  } else {
    console.log("could not find menu, please refresh")
  }

  //click delete on sub menu options
  if (document.querySelectorAll(".c-menu_item__label")[6]) {
    document.querySelectorAll(".c-menu_item__label")[6].click()
    console.log("found and clicked delete froom menu")
  } else {
    console.log("could not find delete, please refresh")
  }

  //confirm deletion from dialog
  setTimeout(function () {
    if (document.querySelectorAll(".c-button--focus-visible")[0]) {
      document.querySelectorAll(".c-button--focus-visible")[0].click()
      console.log("found and clicked confirm delete")
    } else {
      console.log("could not find confirm deelete, please refresh")
    }
  }, 1000)
}

//run function eveery 4 sec to compensate for network requests
setInterval(function () {
  myFunction()
}, 4000)
