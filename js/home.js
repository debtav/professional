// --------------- CUSTOM GREETING ---------------
// ----- !!!!! ----- SAVE USER NAME OR SET DEFAULT "BESUCHER" https://stackoverflow.com/questions/3262605/how-to-check-whether-a-storage-item-is-set

// // anonymous self-invoking (IIFE) function
(function () {
  userName = prompt("Wen dürfen wir bei Professional Website begrüssen?");
  if (userName) {
    // set first letter to uppercase
    userNameParsed = userName.charAt(0).toUpperCase() + userName.slice(1);
    document.querySelector("#greeting").innerHTML =
      "<p>Herzlich Willkommen " +
      "<em>" +
      userNameParsed +
      "</em>" +
      ", wir begrüssen Sie bei Professional Website!</p>";
  } else {
    document.querySelector("#greeting").innerHTML =
      "<p>Herzlich Willkommen Besucher, wir begrüssen Sie bei Professional Website!</p>";
  }
})();


// --------------- USER'S VIEWPORT WIDTH  ---------------
// https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight
// https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0
);

document.querySelector("#viewportInfo").innerHTML =
  "<p> <strong> Sie betrachten die Website mit einer Auflösung von: </strong> " +
  vh +
  " X " +
  vw +
  " Pixel.</p>";

// --------------- USER'S BROWSER  ---------------
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/userAgent

document.querySelector("#browserInfo").innerHTML =
  "<p> <strong>Ihre Ansicht erfolgt über:</strong> " +
  window.navigator.userAgent +
  ".</p>";

// --------------- EXTRA ---------------
// change botstrap menu toggle icon
// https://www.youtube.com/watch?v=vJ85fm4m7lw

// Lightbox
