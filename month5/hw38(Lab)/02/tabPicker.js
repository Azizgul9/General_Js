(function( $ ){

    $.fn.tabPick = function(content_prefixer) {

        // нет необходимости писать $(this), так как "this" - это уже объект jQuery
        // выражение $(this) будет эквивалентно $($('#element'));
        $('.active').removeClass('active');
        this.addClass('active');

        var tabs=$('.tab').length;
        for(var i=0;i<tabs;i++){
            $('.tab').on('click',$('.tab').addClass('active'));
        }


    }
})( jQuery );
