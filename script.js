document.addEventListener("DOMContentLoaded", () => {
    let botton=document.querySelector(".botton")
let hrefs=["./mempage.html","./mempage1.html","./mempage2.html","./mempage3.html","./mempage4.html"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function random_mem(){
    let a=getRandomInt(hrefs.lenght)
    window.location.href = hrefs[a]

}
botton.addEventListener("click",random_mem)
  });

