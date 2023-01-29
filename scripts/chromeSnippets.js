const system = {
  invokeSteps: (steps) => {
    for (const property in steps) {
      const { selector, arrayIndex, log, delay } = steps[property]
      setTimeout(function () {
        const button = document.querySelectorAll(selector)[arrayIndex]
        if (button) {
          button.click()
          console.log(`found and clicked ${log}`)
        } else {
          console.log(`could not find ${log}`)
        }
      }, delay)
    }
  },

  gaurdUrl: (url) => {
    if (document.location.href === url) return true
  },
}

//slack. simple script to delete all slack messages in private chat
//! not stable. threaded messages still breaks or delays flow.
const slackSteps = {
  clickMenu: {
    selector: '[data-qa="more_message_actions"]',
    arrayIndex: 0,
    log: "menu button",
    delay: 500,
  },
  clickDelete: {
    selector: ".c-menu_item__label",
    arrayIndex: 6,
    log: "delete button",
    delay: 500,
  },
  clickConfirmDelete: {
    selector: ".c-button--focus-visible",
    arrayIndex: 0,
    log: "confirm delete button",
    delay: 1000,
  },
}

async function deleteSlackMessages() {
  if (system.gaurdUrl("https://app.slack.com/client/T8XCT0DDW/D04K1F6L3A7")) {
    const randInt = Math.floor(Math.random() * 6) + 1
    const hover = new Event("mouseover", { bubbles: true })
    document.querySelectorAll(".c-message_kit__gutter__right")[randInt].click()
    document.querySelectorAll(".c-message_kit__gutter__right")[randInt].dispatchEvent(hover)
    system.invokeSteps(slackSteps)
  }
}
setInterval(deleteSlackMessages, 4500)

//trading view.
const tradingViewSteps = {
  clickCloseMini: {
    selector: "[class*=close-button]",
    arrayIndex: 0,
    log: "mini close button",
    delay: 500,
  },
  clickClosePopup: {
    selector: "[class*=close-icon]",
    arrayIndex: 0,
    log: "dialog close button",
    delay: 1500,
  },
}

async function dismissTradingViewAds() {
  if (system.gaurdUrl("https://www.tradingview.com/chart/0MCMRG7T/")) system.invokeSteps(tradingViewSteps)
}
setInterval(dismissTradingViewAds, 60000)
