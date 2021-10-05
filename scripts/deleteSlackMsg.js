//simple console script to delete all slaack messages in a chat.
/* 
not stable
the dom gets element loaded in view so once a while you have to scroll up to preload new classes. 
can fix with scroll event on else statements but i dont have time for that. 
*/

function myFunction() {
  var hover = new Event("mouseover", { bubbles: true })
  document.querySelectorAll(".c-message_kit__gutter__right")[2].dispatchEvent(hover)

  //define selectors
  const allMenu = document.querySelectorAll('[data-qa="more_message_actions"]')
  const deleteButton = document.querySelectorAll(".c-menu_item__label")[6]
  const confirmDelete = document.querySelectorAll(".c-button--focus-visible")[0]

  //click the menu icon on message
  if (allMenu) {
    allMenu[0].click()
    console.log("found and clicked menu")
  } else {
    console.log("could not find menu, please refresh")
  }

  //click delete on sub menu options
  if (deleteButton) {
    deleteButton.click()
    console.log("found and clicked delete from menu")
  } else {
    console.log("could not find delete, please refresh")
  }

  //confirm deletion from dialog
  setTimeout(function () {
    if (confirmDelete) {
      confirmDelete.click()
      console.log("found and clicked confirm delete")
    } else {
      console.log("could not find confirm delete, please refresh")
    }
  }, 1000)
}

//run function every 4 sec to compensate for network requests
setInterval(function () {
  myFunction()
}, 4000)
