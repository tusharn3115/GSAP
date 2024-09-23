gsap.from(".page1 .box", {
    scale: 0,
    delay:1,
    duration:0.5,
    rotate:360,
})
gsap.from(".page2 .box", {
    scale: 0,
    duration:0.5,
    rotate:360,
    // scrollTrigger:".page2 .box"   //direct method
    scrollTrigger:{
        trigger:".page2 .box",
        scroller:"body",
        markers:true,
        start:"top 60%"
    }
})
