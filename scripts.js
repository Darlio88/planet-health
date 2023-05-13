

const toggle= document.getElementById("toggle")
toggle.addEventListener("click",()=>{
    const menu = document.getElementById("menu")
    menu.classList.toggle("active")
    const toggler=document.getElementById("toggler")
    toggler.classList.toggle("fa-times")
})

window.addEventListener("scroll",()=>{
    const scrolledHeight = Math.max(
        document.documentElement.scrollTop,
        document.body.scrollTop
      );
    if(scrolledHeight>0){
        const header=document.getElementById("header")
        header.classList.add("scrolling")
    } 
    if(scrolledHeight<=0){
        const header=document.getElementById("header")
        header.classList.toggle("scrolling")
    }      
})

