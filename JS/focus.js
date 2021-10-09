$(function () {
    const element = $("#vertical_line");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animateMe");
        } else {
            element.removeClass("animateMe")
        }
    });

});









$(function () {
    const element = $("#faber");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animateFaber");
        } else {
            element.removeClass("animateFaber")
        }
    });
});
$(function () {
    const element = $("#fit");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animateFit");
        } else {
            element.removeClass("animateFit")
        }
    });
});
$(function () {
    const element = $("#chat");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animateChat");
        } else {
            element.removeClass("animateChat")
        }
    });
});
$(function () {
    const element = $("#restra");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animateRestra");
        } else {
            element.removeClass("animateRestra")
        }
    });
});
$(function () {
    const element = $("#infogit");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animateInfogit");
        } else {
            element.removeClass("animateInfogit")
        }
    });
});
$(function () {
    const element = $("#openweather");
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
            element.addClass("animateWeather");
        } else {
            element.removeClass("animateWeather")
        }
    });
});

const icons = document.querySelectorAll('.icon');
icons.forEach (icon => {
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
    });
});

