import "./style.css";

function addFadeInAnimation(
    triggerElement,
    targets,
    duration = 1000,
    triggerHook = 0.5
) {
    const timeline = anime.timeline({ autoplay: false }).add({
        targets: targets,
        opacity: [0, 1],
        translateY: [10, 0],
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
    const section2Scene = addFadeInAnimation("#section2", "#p1", 1000, 0.7);
    const section3Scene = addFadeInAnimation("#p3", "#p3", 1000, 0.5);
    // section3Scene.addIndicators();

    const section41Scene = addFadeInAnimation(
        "#section4-text",
        "#section4-1",
        1000,
        1
    );

    const section42Scene = addFadeInAnimation(
        "#section4-1",
        "#section4-2",
        1000,
        0.7
    );

    const section43Scene = addFadeInAnimation(
        "#section4-2",
        "#section4-3",
        1000,
        0.4
    );

    const section45Scene = addFadeInAnimation(
        "#section45",
        "#section45-text",
        1000,
        0.7
    );

    const section5Scene = addFadeInAnimation(
        "#section5",
        "#section5-text",
        1000,
        0.7
    );

    const controller = new ScrollMagic.Controller();
    controller.addScene(section2Scene);
    controller.addScene(section3Scene);
    controller.addScene(section41Scene);
    controller.addScene(section42Scene);
    controller.addScene(section43Scene);
    controller.addScene(section45Scene);
    controller.addScene(section5Scene);
});

// Wrap every letter in a span
// var headlineWrapper = document.querySelector(".headline");
// headlineWrapper.innerHTML = headlineWrapper.textContent.replace(
//     /\S/g,
//     "<span class='letter'>$&</span>"
// );

anime
    .timeline({ loop: false })
    .add({
        targets: ".logo",
        opacity: [0, 1],
        easing: "linear",
        duration: 2000,
    })
    .add({
        targets: ".scroll-section",
        backgroundColor: "#000", // Change background color to black
        color: "#fff", // Change text color to white
        duration: 500, // Duration of the color inversion animation
        easing: "easeInOutExpo",
        complete: function (anim) {
            runTaglineAnimation();
            // If you need to perform any action after the color inversion, you can do it here.
        },
    });

function runTaglineAnimation() {
    anime.timeline({ loop: false }).add({
        targets: ".tagline",
        opacity: [0, 1],
        easing: "linear",
        duration: 500,
    });
}
