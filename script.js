// Slideshow accueil
var i = 0;

setInterval(() => {
    $('.myslide1').css('opacity', 0);
    $('.myslide1').eq(i).css('opacity', 1);
    i++;
    if (i === 4) {
        i = 0;
    }
}, 6000);

// Cookies
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return false;
}

var locate = prompt('Location : ');
setCookie('location', locate, 1);

// Changer l'icone du modal
function change(type) {
    var icon = '';
    var back = '';
    if (type == 'electro') {
        icon = '<span class="fa fa-desktop"></span>';
        back = 'linear-gradient(to left, rgb(70, 70, 70),rgb(40, 40, 40) )';
    }
    if (type == 'mode') {
        icon = '<span class="fa fa-tshirt"></span>';
        back = 'linear-gradient(to left, rgb(255, 112, 112),rgb(225, 62, 62) )';
    }
    if (type == 'spa') {
        icon = '<span class="fa fa-spa"></span>';
        back = 'linear-gradient(to left, rgb(0, 144, 106),rgb(0, 104, 66) )';
    }
    if (type == 'design') {
        icon = '<span class="fa fa-home"></span>';
        back = 'linear-gradient(to left, rgb(0, 140, 240),rgb(0, 80, 180))';
    }
    if (type == 'enfant') {
        icon = '<span class="fa fa-baby-carriage"></span>';
        back = 'linear-gradient(to left, rgb(255, 38, 251),rgb(175, 8, 201))';
    }
    if (type == 'repas') {
        icon = '<span class="fa fa-utensils"></span>';
        back = 'linear-gradient(to left, rgb(255, 163, 101),rgb(225, 133, 71))';
    }

    var out = [icon, back];

    return out;
}

$('#back').click(function() {
    $('.modal').css({ 'opacity': '0' });

    setTimeout(() => {
        $('.backmodal').css('display', 'none');
    }, 500);
    $('.container').css({ 'overflow-y': 'scroll', 'height': 'auto' });
});

// List show modal

$('.toList').click(function(e) {
    e.preventDefault();

    var type = $(this).attr('data-type');
    var typeName = $(this).children().eq(1).html();

    $('.modal-title').html(typeName);

    $('.icont').html(change(type)[0]);
    $('.modal-header').css('background-image', change(type)[1]);

    $('.modal-body').html('');

    $('.backmodal').css({ 'display': 'inline-block' });
    $('.modal').animate({ 'opacity': '1' });

    $('.container').css({ 'overflow': 'hidden', 'height': '95vh' });

    $.ajax({
        type: "GET",
        url: "prods/list.php",
        data: "type=" + type,
        success: function(response) {

            $('.modal-body').html(response);
            var height;
            $('.getDetail').click(function() {

                if ($(this).attr('data-opt') == 'no') {

                    height = $(this).parent().parent().height();

                    $(this).parent().parent().prev().css('filter', 'brightness(40%)');

                    $(this).parent().parent().css({ 'margin-top': '-200px' });
                    $(this).parent().animate({ 'height': '280px' });
                    $(this).html('&times;');

                    $(this).next().next().css('display', 'inline-block');
                    setTimeout(() => {
                        $(this).next().next().animate({ "opacity": '1' });
                    }, 500);

                    $(this).attr('data-opt', 'yes');

                } else {

                    $('.imgCard').css('filter', 'brightness(100%)');

                    $(this).parent().parent().css({ 'margin-top': '0px' });
                    $(this).parent().animate({ 'height': (height - 16) + 'px' });
                    $(this).html('<span class="fa fa-info-circle"></span>');

                    $(this).next().next().animate({ "opacity": '0' });
                    setTimeout(() => {
                        $(this).next().next().css('display', 'none');
                    }, 400);
                    $(this).attr('data-opt', 'no');

                }


            });

            $('.locate').val(getCookie('location'));

        }
    });
});

$(document).on('click', 'label', function() {
    $(this).next().focus();
});

$(document).on('focus', 'input', function() {
    $(this).prev().css({ 'color': 'rgb(37, 152, 106)' });
});

$(document).on('blur', 'input', function() {
    $(this).prev().css({ 'color': 'grey' });
});