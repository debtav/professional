// ---------------GREETING ACCORDING TO TIME OF DAY ---------------

(function () {
  const greeting = document.getElementById("greeting");
  const time = new Date().getHours();
  let standardText =
    "  - das Team von Professional Website begleitet Sie durch den Tag!";
  let welcome = " ";
  if (time >= 1 && time <= 9) {
    // 1‐9 Uhr Guten Morgen
    welcome = "Guten Morgen";
  } else if (time >= 9 && time <= 18) {
    // 10‐18 Uhr Guten Tag
    welcome = "Guten Tag";
  } else if (time >= 18) {
    // 19‐23 Uhr Guten Abend
    welcome = "Guten Abend";
  } else {
    welcome = "Herzlich Willkommen";
  }
  greeting.innerHTML = welcome + standardText;
})();

// --------------- EMAIL SPAM PROTECTION ---------------
// https://ultimatecourses.com/blog/email-address-spam-protection-with-javascript
// https://stackoverflow.com/questions/4537963/what-are-alternatives-to-document-write


function emailSpam(a) {
  let mailContainer = document.querySelector("#email-container");
  mailContainer.insertAdjacentHTML( "beforeend" , "<a href='mailto:" + a + "@professional-website.com" + "'>" + a + "@professional-website.com" + "</a>");
}
emailSpam("maincast");
emailSpam("team1");
emailSpam("team2");
emailSpam("team3");
emailSpam("team4");


// --------------- EXTRA ---------------
// lightbox gallery
// https://lokeshdhakar.com/projects/lightbox2/
