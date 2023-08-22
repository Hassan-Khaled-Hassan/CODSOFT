let span = document.querySelector("header .ham-burger"),
  nav = document.querySelector("header .nav"),
  links = document.querySelectorAll("header .nav ul li a"),
  blink = [...links],
  accord = document.querySelectorAll(".service .content .accordian-container"),
  bark = [...accord],
  fady = document.querySelectorAll(".service .content .accordian-container .head .fa"),
  ffady=[...fady];
console.log(ffady)
span.onclick = function(){
    nav.classList.toggle("open");
    span.classList.toggle("active");
}
links.forEach((link) => {
    link.addEventListener("click", function () {
        for (let i = 0; i < blink.length; i++) {
          blink[i].classList.remove("active");
        }
        link.classList.toggle("active");
    });
});
accord.forEach((e)=>{
    e.addEventListener("click",function(){
        for (let i = 0; i < bark.length; i++) {
          bark[i].classList.remove("active");
        }
        for (let i = 0; i < ffady.length; i++) {
            ffady[i].className = "fa fa-angle-up";
        }
        e.classList.toggle("active");
        e.firstElementChild.lastElementChild.className = "fa fa-angle-down";   
    });
});

var spann = document.querySelector("#go-top ");
window.onscroll = function () {
  if (this.scrollY >=400) {
    spann.classList.add("show");
  } else {
    spann.classList.remove("show");
  }
};