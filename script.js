let botton=document.querySelector(".botton")
let hrefs=["./mempage","./mempage1","./mempage2","./mempage3","./mempage4"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function random_mem(){
    let a=getRandomInt(hrefs.lenght)
    window.location.href = hrefs[a]

}
botton.addEventListener("click",random_mem)
