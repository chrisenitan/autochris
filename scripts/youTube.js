//Click yes every 3 min if available youtube.com
setInterval(function () {
  if (document.querySelector('tp-yt-paper-button[aria-label="Yes"]')) {
    document.querySelector('tp-yt-paper-button[aria-label="Yes"]').click()
  } else {
    console.log("No confirmation needed")
  }
}, 240000)
