(function() {
    var kitties = document.getElementsByClassName("kitty");
    var dots = document.getElementsByClassName("dot");
    var timer;
    var current = 0;
    var moveNow = 0;

    setTimeout(moveKitties, 5000);
    document.addEventListener("transitionend", function(event) {
        if (event.target.classList.contains("exit")) {
            event.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 5000);
            moveNow = false;
        }
    });

    var i;
    for (i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", getDotClickHandler(i));
    }

    function getDotClickHandler(x) {
        return function(event) {
            if (event.target.classList.contains("filled")) {
                return;
            }

            if (moveNow) {
                return;
            }

            clearTimeout(timer);
            moveKitties(x);
        };
    }

    function moveKitties(next) {
        moveNow = true;
        dots[current].classList.remove("filled");
        kitties[current].classList.add("exit");
        kitties[current].classList.remove("onscreen");

        if (typeof next == "undefined") {
            current++;
            if (current >= kitties.length) {
                current = 0;
            }
        } else {
            current = next;
        }

        kitties[current].classList.add("onscreen");
        dots[current].classList.add("filled");
    }
})();
