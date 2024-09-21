// to() method takes 2 parameters first is the element in which the animation should be used, and in the second we can give properties to that element but within curly brackets

gsap.to("#box", {
    x: 1236,   // x-axis
    duration: 2,  // kitne time ke under animation complete hoga(value in seconds)
    delay: 1    // animation start kitne time mai hogi(value in seconds)
})