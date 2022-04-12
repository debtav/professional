// --------------- ON RELOAD RANDOM IMG AND TEXT ---------------
// https://developer.mozilla.org/de/docs/Web/API/Window/DOMContentLoaded_event
// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math 

document.addEventListener("DOMContentLoaded", () => {
  const log =  array = [
      "../img/banner1.jpg",
      "../img/banner2.jpg",
      "../img/banner3.jpg",
      "../img/banner4.jpg",
      "../img/banner5.jpg",
      "../img/banner6.jpg",
      "../img/banner7.jpg"
    ],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("targetImg");
  target.src = `${array[random]}`;
  log(target);
});

document.addEventListener("DOMContentLoaded", () => {
  const log = array = [
      "Skriptsprachen im Zusammenspiel!",
      "Das Portal geht online!",
      "Es ist soweit!",
      "Erleben und entdecken Sie die Welt des WWW",
    ],
    random = Math.floor(Math.random() * array.length),
    target = document.getElementById("targetText");
  target.innerText = `${array[random]}`;
  log(target);
});
