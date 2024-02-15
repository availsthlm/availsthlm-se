function addFadeInAnimation(
    triggerElement,
    targets,
    duration = 1000,
    triggerHook = 0.5
) {
    const timeline = anime.timeline({ autoplay: false }).add({
        targets: targets,
        opacity: [0, 1],
        easing: "easeInOutExpo",
    });

    const scene = new ScrollMagic.Scene({
        triggerElement: triggerElement, // starting scene, when reaching this element
        duration: duration,
        reverse: false,
        triggerHook: triggerHook, // trigger at the middle of the viewport
    }).on("enter", function () {
        timeline.play(); // Play the animation when the scene enters
    });

    return scene;
}

document.addEventListener("DOMContentLoaded", function () {
    const controller = new ScrollMagic.Controller();

    /* 
    Section 2 
    */

    // /*
    // Section 3
    // */

    // const s3t4 = anime.timeline({ autoplay: false }).add({
    //     targets: ["#p3"],
    //     opcity: [0, 1],
    //     translateX: [-2000, 0], // transition to black
    //     duration: 1000, // 1 second
    //     easing: "easeInQuint", // For a steady transition
    // });

    // const section3scene = new ScrollMagic.Scene({
    //     triggerElement: "#section3", // starting scene, when reaching this element
    //     reverse: false,
    //     triggerHook: 0.8, // trigger at the middle of the viewport
    // }).on("enter", function () {
    //     s3t4.play();
    // });

    // controller.addScene(section3scene);
    const s2t = addFadeInAnimation("#section2", "#p1", 1000, 0.7);
    controller.addScene(s2t);
    const s3t1 = addFadeInAnimation("#section3", "#p3", 1000, 0.7);
    controller.addScene(s3t1);
    const s4t1 = addFadeInAnimation("#section4", "#section4-text", 1000, 0.9);
    controller.addScene(s4t1);
    const s5t1 = addFadeInAnimation("#section5", "#section5-text", 1000, 0.7);
    controller.addScene(s5t1);
});

// Wrap every letter in a span
var headlineWrapper = document.querySelector(".headline");
headlineWrapper.innerHTML = headlineWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime
    .timeline({ loop: false })
    .add({
        targets: ".headline .letter",
        scale: [5, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeInOutExpo",
        duration: 500,
        delay: (el, i) => 90 * i,
    })
    .add({
        targets: ".tagline",
        opacity: [0, 1],
        translateY: [1000, 0],
        easing: "easeInQuint",
        duration: 700,
    })
    .add({
        targets: ".scroll-section",
        backgroundColor: "#000", // Change background color to black
        color: "#fff", // Change text color to white
        duration: 1000, // Duration of the color inversion animation
        easing: "easeInQuint",
        delay: 500,
        complete: function (anim) {
            console.log("Color inversion complete");
            // If you need to perform any action after the color inversion, you can do it here.
        },
    });
