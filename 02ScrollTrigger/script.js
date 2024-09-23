// scrollTrigger animation ---------------------------------------------------------------------------
// gsap.from(".page1 .box", {
//     scale: 0,
//     delay:1,
//     duration:0.5,
//     rotate:360,
// })
// gsap.from(".page2 .box", {
//     scale: 0,
//     duration:0.5,
//     rotate:360,
//     // scrollTrigger:".page2 .box"   //direct method
//     scrollTrigger:{
//         trigger:".page2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }
// })



// scroll animation with start and end point -----------------------------------------------------
// gsap.from(".page2 h1", {
//     opacity:0,
//     duration:2,  
//     x:500,
//     scrollTrigger: {
//         trigger:".page2 h1",
//         scroller:"body",
//         markers:true,
//         start:"top 50%"
//     }
// })




// scrollTrigger pin animation --------------------------------------------------------------------------

//  pin property mai hm trigger per target krte hai parent ko only in case of pin

 gsap.to(".page2 h1", {
    transform:"translateX(-150%)",
    scrollTrigger: {
        trigger:".page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
 })