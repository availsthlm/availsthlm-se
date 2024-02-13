document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();
    // Add timeline
    let s2t = anime.timeline({ autoplay: false });
    // Add animations
    let s2a1 = {
        targets: "#p1",
        opacity: [0, 1],
        duration: 1500,
        easing: "easeInOutExpo",
    };

    // Add children
    s2t.add(s2a1);

    var section2scene = new ScrollMagic.Scene({
        triggerElement: "#section2", // starting scene, when reaching this element
        duration: 1000,
        reverse: false,
        triggerHook: 0.5, // trigger at the middle of the viewport
    }).on("enter", function () {
        s2t.play(); // Play the animation when the scene enters
    });

    // Add Scene to ScrollMagic Controller
    controller.addScene(section2scene);

    // Add timeline
    let s4t = anime.timeline({ autoplay: false }).add({
        targets: "#p4",
        opacity: [0, 1],
        duration: 1500,
        easing: "easeInExpo",
    });

    const section4scene = new ScrollMagic.Scene({
        triggerElement: "#section4", // starting scene, when reaching this element
        duration: 1000,
        reverse: false,
        triggerHook: 0.5, // trigger at the middle of the viewport
    }).on("enter", function () {
        s4t.play(); // Play the animation when the scene enters
    });
    controller.addScene(section4scene);

    // Add timeline
    let s4t1 = anime.timeline({ autoplay: false }).add({
        targets: "#img2",
        scale: [0, 1],
        opacity: [0, 1],
        duration: 2000,
        easing: "easeInExpo",
    });

    const section41scene = new ScrollMagic.Scene({
        triggerElement: "#section4", // starting scene, when reaching this element
        reverse: false,
        triggerHook: 0.8, // trigger at the middle of the viewport
    }).on("enter", function () {
        s4t1.play(); // Play the animation when the scene enters
    });

    controller.addScene(section41scene);
});

// Wrap every letter in a span
var headlineWrapper = document.querySelector(".headline");
headlineWrapper.innerHTML = headlineWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
    targets: ".headline .letter",
    scale: [5, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeInOutExpo",
    duration: 1000,
    delay: (el, i) => 110 * i,
});

anime.timeline({ loop: false }).add({
    targets: ".contact",
    opacity: [0, 1],
    translateY: [1000, 0],
    easing: "spring(1, 75, 20, 10)",
    duration: 1500,
    delay: 1500,
});

// anime.timeline({ loop: false }).add({
//     targets: "#section2",
//     opacity: [0, 1],
//     translateZ: -200,
//     easing: "easeInExpo",
//     duration: 1000,
//     delay: 3500,
// });
