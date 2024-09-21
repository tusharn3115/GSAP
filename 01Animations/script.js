// to() method is the animation that takes place from initial to final position

// to() method takes 2 parameters first is the element in which the animation should be used, and in the second we can give properties to that element but within curly brackets

gsap.to("#box1", {
    x: 1000,   // x-axis
    duration: 2,  // kitne time ke under animation complete hoga(value in seconds)
    delay: 1,    // animation start kitne time mai hogi(value in seconds)
})


// from() method is the animation that takes place from final to initial position

// parameters are same as the to() method
gsap.from("#box2", {
    x: 1000,
    duration: 2,
    delay: 1,
})