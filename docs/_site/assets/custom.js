$(document).ready(function(){
    $('h2 a').click(function() {
        i = $(this).find('i')
        i.toggleClass('fa-caret-right');
        i.toggleClass('fa-caret-down');
    });
});