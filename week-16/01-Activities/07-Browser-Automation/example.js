var Nightmare = require("nightmare");

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://google.com")
  .type("#lst-ib", "stranger things")
  .click('input[value="Google Search"]')
  .wait("a[href='/search?q=stranger+things&safe=strict&biw=1280&bih=457&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjHiajr877ZAhXR7VMKHROrBwAQ_AUICygC']")
  .click("#hdtb-msb-vis:nth-child(3)")
  .wait("#links a")
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end() //closes the electron window
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
