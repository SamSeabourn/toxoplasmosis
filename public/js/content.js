//Todo split into seperate files
const catUrl = "https://www.placecage.com";
const quoteAPI = "https://type.fit/api/quotes";
let inspirationalQuote = "";
let catName = "Mr Cuddles"; //TODO: Get random cat name

const getQuote = () => {
  fetch(quoteAPI)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      inspirationalQuote = data[Math.floor(Math.random() * data.length)].text;
    });
};
getQuote();

const randomBit = () => Math.floor(Math.random() * 2);

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
        image.src = `${catUrl}/${image.width}/${image.height}`;
      }
    }
  }, 1000);
};

const showInspirationalModal = () => {
  getQuote();
  //TODO: Refactor into a styles sheet and append to head instead of inline
  let modal = document.createElement("div");
  const s = modal.style;
  s.width = "100vw";
  s.height = "100vh";
  s.position = "fixed";
  s.zIndex = 5050;
  s.top = 0
  s.display = "grid";
  s.placeItems = "center";
  s.overflow = "hidden";
  s.backgroundColor = "rgba(0,0,0,0.5)";
  modal.onclick = () => {
        modal.parentElement.removeChild(modal);
    }
  modal.innerHTML = `
            <div style="width:80vw;height: 80vh;background-color: white;border-radius: 10px;box-shadow: 0px 0px 24px 4px rgba(0,0,0,0.35);display:grid;overflow:hidden;">
            <img src="${catUrl}/${window.innerWidth * 0.8 + randomBit()}/${window.innerHeight * 0.8 + randomBit()}" />
                <div style="position: absolute;">
                    <p style="font-style: italic; color: white; font-size: 2.5rem; text-shadow: #000 3px 3px 9px;margin:0px;">${inspirationalQuote}</p>
                    <p style="font-family: san-serif;color: white; font-size: 2.5rem; text-shadow: #000 3px 3px 9px;margin:0px;">${catName}</p>
                </div>
            </div>
            `;
  document.body.appendChild(modal);
};

const fullSendIt = () => {
    turnOnCats();
    const catFontCDN = document.createElement('link');
    catFontCDN.type = 'text/css';
    catFontCDN.rel = 'stylesheet';
    document.querySelectorAll("head")[0].appendChild(catFontCDN);
    catFontCDN.href = 'http://fonts.cdnfonts.com/css/meow-paw'

    document.head.insertAdjacentHTML("beforeend", `
        <style>
            *{
                font-family: 'Meow Paw', sans-serif !important;
            }
            body {
                background-image: url("https://st2.depositphotos.com/5746754/9893/v/950/depositphotos_98936132-stock-illustration-repeating-pattern-with-grey-paw.jpg");
                background-repeat: repeat;
            }
        </style>
    `)
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
