console.log("Hello from content script")

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        alert("message recieved from content")
    }
  );