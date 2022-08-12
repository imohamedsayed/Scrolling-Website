let stars = document.getElementById("stars");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let moon = document.getElementById("moon");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mso = document.querySelector(".mso");

onscroll = () => {
  let val = scrollY;
  stars.style.left = val + "px";
  moon.style.top = val * 4 + "px";
  mountains3.style.top = val * 2 + "px";
  mountains4.style.top = val * 1.5 + "px";
  river.style.top = val + "px";
  boat.style.top = val + "px";
  boat.style.left = val * 3 + "px";
  mso.style.fontSize = val + "px";
  if (scrollY >= 80) {
    mso.style.fontSize = 80 + "px";
    mso.style.position = "fixed";
    if (scrollY >= 478) {
      mso.style.display = "none";
    } else {
      mso.style.display = "block";
    }
    if (scrollY >= 127) {
      document.getElementById("main").style.background =
        "linear-gradient(#376281, #10001f)";
    } else {
      document.getElementById("main").style.background =
        "linear-gradient(#200016, #10001f)";
    }
  }
};
//"linear-gradient(#376281, #10001f);";
