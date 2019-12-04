// We listen to the resize event
window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Listen to tab events to enable outlines (accessibility improvement)
document.body.addEventListener('keyup', function (e) {
    if (e.which === 9) /* tab */ {
        document.documentElement.classList.remove('no-focus-outline');
    }

    document.body.addEventListener("click", function () {
        document.documentElement.classList.add('no-focus-outline');
    });
});

//Get all the hyperlink elements
var links = document.getElementsByTagName("a");

//Browse the previously created array
Array.prototype.forEach.call(links, function (elem, index) {
    //Get the hyperlink target and if it refers to an id go inside condition
    var elemAttr = elem.getAttribute("href");
    if (elemAttr && elemAttr.includes("#")) {
        //Replace the regular action with a scrolling to target on click
        elem.addEventListener("click", function (ev) {
            ev.preventDefault();
            //Scroll to the target element using replace() and regex to find the href's target id
            document.getElementById(elemAttr.replace(/#/g, "")).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            });
        });
    }
});

