$(document).ready(function(){

    $('h2 a').click(function(e) {
        // caret change
        i = $(this).find('i')
        i.toggleClass('fa-caret-right');
        i.toggleClass('fa-caret-down');
    });

    $('ul.sticky a').click(function(e) {
        // scrolling
        var url = e.target.href;
        var hash = url.substring(url.indexOf("#")+1);
        $('html, body').animate({
            scrollTop: $('#'+hash).offset().top
        }, 500);
        return false;
    });
});