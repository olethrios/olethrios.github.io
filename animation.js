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

document.getElementById('obscured').addEventListener('mouseenter', function() {
    animateElement('obscured', 0, 1, 6000, "easeInQuad");
}, false);

document.getElementById('obscured').addEventListener('mouseleave', function() {
    animateElement('obscured', 0.75, 0, 1250, "easeOutQuint");
}, false);

document.getElementById('invis').addEventListener('mouseenter', function() {
    animateElement('invis', 0, 1, 600, "easeInQuad");
}, false);

document.getElementById('invis').addEventListener('mouseleave', function() {
    animateElement('invis', 0.75, 0, 125, "easeOutQuint");
}, false);