var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var closeBtn = document.getElementById("closeBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
closeBtn.onclick = function () {
  menu.classList.remove("active");
  menuBtn.classList.remove("active");
  body.classList.remove("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// scroll start
let anchor = document.getElementById("arrow");
function getWindowHeight() {
  let body = document.body,
    html = document.documentElement;

  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  return height;
}
function scrollFunc() {
  if (window.pageYOffset >= 50) {
    anchor.classList.add("active");
  } else {
    anchor.classList.remove("active");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end

// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// // wow start
// var wow = new WOW({
//   boxClass: "wow",
//   animateClass: "animated",
//   offset: 0,
//   mobile: true,
//   live: true,
//   scrollContainer: null,
//   resetAnimation: true,
// });
// wow.init();
// // wow end
 
