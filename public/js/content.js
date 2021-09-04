const baseUrl = "https://www.placecage.com";

const turnOnCats = () => {
  setInterval(() => {
    const images = document.querySelectorAll("img");
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      if (
        image.height !== 0 &&
        image.width !== 0 &&
        !image.src.includes("placecage.com")
      ) {
        image.src = `${baseUrl}/${image.width}/${image.height}`;
      }
    }
  }, 1000);
};

const showInspirationalModal = () => {
    //TODO: create modal here
};

const fullSendIt = () => {
  console.log("Sending it");
};

const processRequest = (control) => {
  switch (control) {
    case "catPic":
      turnOnCats();
      break;
    case "insp":
      showInspirationalModal();
      break;
    case "sendIt":
      fullSendIt();
      break;
    default:
      break;
  }
};

chrome.runtime.onMessage.addListener((request) => {
  processRequest(request.control);
});
