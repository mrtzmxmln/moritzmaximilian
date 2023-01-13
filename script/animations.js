var navBoxes = document.querySelectorAll(".navBox")
var contentBoxes = document.querySelectorAll(".contentBox");

/* Toggle Content */
for (var i = 0; i < navBoxes.length; i++) {
    (function (index) {
        navBoxes[index].addEventListener('click', function (e) {


            var plus = navBoxes[index].querySelector(".plus");
            plus.classList.toggle("spin");


            if (contentBoxes[index].classList.contains("hidden")) {

                contentBoxes[index].classList.toggle("dispNone");
                setTimeout(() => {
                    contentBoxes[index].classList.toggle("hidden");
                }, 10);

            } else {

                contentBoxes[index].classList.toggle("hidden");

                setTimeout(() => {
                    contentBoxes[index].classList.toggle("dispNone");
                }, 1000);
            }

        });
    }(i));
}
