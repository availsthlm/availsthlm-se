document.addEventListener("DOMContentLoaded", function () {
    var controller = new ScrollMagic.Controller();
    // Add timeline
    let s2t = anime.timeline({ autoplay: false });
    // Add animations
    let s2a1 = {
        targets: "#pinned-section2",
        opacity: [0, 1],
        duration: 1500,
        easing: "easeInOutSine",
    };
    // Add children
    s2t.add(s2a1);

    var scene = new ScrollMagic.Scene({
        triggerElement: "#section2", // starting scene, when reaching this element
        duration: 1000,
        triggerHook: 0.5, // trigger at the middle of the viewport
    })
        .addIndicators({
            colorTrigger: "black",
            colorStart: "blue",
            colorEnd: "red",
            indent: 10,
        })
        .on("enter", function () {
            s2t.play(); // Play the animation when the scene enters
        });

    // Add Scene to ScrollMagic Controller
    controller.addScene(scene);
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
        easing: "easeInExpo",
        duration: 1000,

        delay: (el, i) => 110 * i,
    })
    .add({
        targets: ".headline .letter",
        translateY: -200,
        delay: 2000,
        duration: 1000,
    });

anime.timeline({ loop: false }).add({
    targets: ".contact",
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeInExpo",
    duration: 1000,

    delay: 3500,
});
