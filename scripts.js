const allIcons = document.querySelectorAll('.foods-icons i');

let i = 0;

setInterval(function () {
    const activeIcon = document.querySelector('.foods-icons i.active');
    activeIcon.classList.remove('active');
    console.log(activeIcon)

    allIcons[i].classList.add('active');

    if (i == allIcons.length - 1) {
        i = 0;
    }
    i++;
}, 3000)