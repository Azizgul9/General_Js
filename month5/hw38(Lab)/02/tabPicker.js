(function( $ ){

    $.fn.tabPick = function() {

        var tabs = $('.tab');
        //console.log(tabs);
        $('.tab').on('click',
            function() {
                for (var i = 1; i <=tabs.length; i++) {

                    $(".active").removeClass("active");
                    $(this).addClass('active');
                    var k=$(this).data('linking');
                    console.log(k);
                    $('.content_'+i).css({'display':'none'});
                    $("."+k).css({'display':'block'});

                }

            });
        //Этот файл на случай если надо будет плагин

    }
})( jQuery );
