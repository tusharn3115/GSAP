// to() and from() method --------------------------------------------------------

// to() method is the animation that takes place from initial to final position

// to() method takes 2 parameters first is the element in which the animation should be used, and in the second we can give properties to that element but within curly brackets

gsap.to("#box1", {
    x:1000,      // x-axis
    duration:2,  // kitne time ke under animation complete hoga(value in seconds)
    delay:1,     // animation start kitne time mai hogi(value in seconds)
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
})


// from() method is the animation that takes place from final to initial position
// what from() method does is it return from the applied animations to its original or initial or default properties 

// parameters are same as the to() method
gsap.from("#box2", {
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"orange",
})


// we can also apply these animations onto text elements also

gsap.from("h1", {
    opacity:0,
    duration:1,
    y:20,
    delay:1,
    stagger:0.3,   // if you have multiple element with same name like here i have 3 h1 and i want them the text to work one by one, so stagger does the job to animation all the elements with same name one by one

    repeat:1,      // you can repeat the animation by using repeat property, * note the animation will run 2 times because firstly it will run default and form the second time because of the repeat property which says repeat 1 more time

    yoyo:true,     // if you want the animation to work like yoyo i.e when we through it forward it come back, the yoyo property also does the same thing the animation moves from initial to final and then final to initial in case of yoyo property 
})


// timeline() method ----------------------------------------------------------------

// Without Timelines, building complex sequences would be far more difficult because you'd need to use a delay for every animation.

// Timeline is a powerful way to control and sequence multiple animations. It allows you to create a timeline of animations that can be played, paused, reversed, or manipulated as a whole.


let tl = gsap.timeline()

tl.from("h2", {
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5,
})
tl.from("h4", {
    y:-20,
    opacity:0,
    duration:0.5,
    // delay:0.5,
    stagger:0.3,
})