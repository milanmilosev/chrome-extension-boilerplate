chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "FETCH_IMAGE") {
    // Listener
    chrome.runtime.sendMessage({
      message: "",
      results: {}
    });
  }
});
