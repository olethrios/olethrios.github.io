function animateElement(elementId, startOpacity, endOpacity, duration, easing) {
    var element = document.getElementById(elementId);
    anime.remove(element);
    anime({
        targets: element,
        opacity: [startOpacity, endOpacity],
        duration: duration,
        easing: easing
    });
}

document.getElementById('cipher').addEventListener('mouseenter', function() {
    animateElement('cipher', 0, 1, 2750, "easeInQuad");
}, false);

document.getElementById('cipher').addEventListener('mouseleave', function() {
    animateElement('cipher', 0.75, 0, 1250, "easeOutQuint");
}, false);

document.getElementById('video').addEventListener('mouseenter', function() {
    animateElement('video', 0, 1, 2750, "easeInQuad");
}, false);

document.getElementById('video').addEventListener('mouseleave', function() {
    animateElement('video', 0.75, 0, 1250, "easeOutQuint");
}, false);