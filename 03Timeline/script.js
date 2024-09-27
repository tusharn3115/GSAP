let open_menu = document.querySelector("#nav i")
let close_menu = document.querySelector("#full i")
let tl = gsap.timeline()

tl.to("#full", {
    right: 0,
    duration:0.5,
})

tl.from("#full h4", {
    x:150,
    duration:0.5,
    stagger:0.2,
    opacity:0,
})

tl.from("#full i", {
    opacity:0,
})

tl.pause()

open_menu.addEventListener("click", () => {
    tl.play()
})

close_menu.addEventListener("click", () => {
    tl.reverse()
})