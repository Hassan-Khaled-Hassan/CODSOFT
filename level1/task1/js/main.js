var toggleButton = document.querySelector("header .top-bar .menu-toggle"),
  nav = document.querySelector("header nav .main-navigation");

toggleButton.onclick = function (e){
    e.preventDefault();
    toggleButton.classList.toggle("is-clicked");
    nav.classList.toggle('display')
};
//--------------------------------------------
var lastt = document.querySelector("#go-top");
window.onscroll=function(){
  if (window.scrollY >= 300) {
    console.log("11");
    lastt.classList.add("show");
    if (window.scrollY >= "1900") {
      if (!start) {
        stats.forEach((num) => startcount(num));
      }
      start = true;
    }
  } else {
    lastt.classList.remove("show");
  }
}
// ---------------------------------------
let stats = document.querySelectorAll("#stats .stat-count"),
    section= document.querySelector("#stats"),
    start=false;
// window.onscroll =function(){
  
//   if(window.scrollY >=  "1900"){
//     if(!start){
//       stats.forEach((num) => startcount(num));
//     }
//     start=true;
//   }
// }
function startcount(num){
  let goal= num.dataset.goal;
  let  count=setInterval(()=>{
        num.textContent++;
        if(num.textContent == goal){
          clearInterval(count);
        }
      },4/goal)
  
}


// var windowWidth = window.innerWidth,
//   sevicess = document.querySelector("#services .services-list");

// console.log("Window width: " + windowWidth);
// let x=0;
// function translateY(element, pixels) {
//   element.style.transform = `translateY(${pixels}%)`;
// }
// if(windowWidth <= "767"){
//   window.onload = function () {
//     setInterval(() => {
//       x += -107.5;
//       translateY(sevicess, x);
//       if (x <= "-537") {
//         x = 0;
//       }
//       if(sevicess.onclick){
//         clearInterval();
//       }
//     }, 2500);
//   };
//     sevicess.onclick=function(){
//       clearInterval();
//       if(x>"-537")
//         x += -107.5;
//         translateY(sevicess,x);
//     }
// }
    
let windowWidth = window.innerWidth;
let x = 0;
let intervalId; // Store the interval ID to clear it later

function translateY(element, pixels) {
  element.style.transform = `translateY(${pixels}%)`;
}
function translateX(element, pixels) {
  element.style.transform = `translateX(${pixels}%)`;
}

function startTranslation() {
  intervalId = setInterval(() => {
    x -= 107.5;
    translateY(sevicess, x);
    if (x <= -537) {
      x = 107.5;
    }
  }, 2500);
}
function startsecondTranslation() {
    setInterval(() => {
    x -= 46;
    translateX(sevicess, x);
    if (x <= -46) {
      x = 46;
    }
  }, 2500);
}

function stopTranslation() {
  clearInterval(intervalId);
  setTimeout(() => {
    startTranslation();
  }, 5000);
}

const sevicess = document.querySelector("#services .services-list");

if (windowWidth <= 767) {
  window.onload = function () {
    startTranslation(); // Start the initial translation
    // sevicess.onclick = function () {
    //   stopTranslation(); // Pause and restart translation on click
    //   if (x > -537) {
    //     x -= 107.5;
    //     translateY(sevicess, x);
    //   }
    // };
  };
}
else{
  window.onload = function () {
    startsecondTranslation(); 
  }
}
