(function( $ ){

    $.fn.myAlert = function(title,message,btnMessage) {

        // нет необходимости писать $(this), так как "this" - это уже объект jQuery
        // выражение $(this) будет эквивалентно $($('#element'));


            var alertContainer = $('<div>').addClass('alert-function');
            var alertTitle = $('<h3>').addClass('title');
            alertTitle.text(title);

            var alertMessage = $('<p>').addClass('some_alert_text');
            alertMessage.html(message);

            var alertButton = $('<button>').addClass('confirmation');
            alertButton.text(btnMessage);

            alertContainer.append(alertTitle, $('<hr>'), alertMessage, alertButton);
            this.append(alertContainer);

            // Making backDrop
            $('.backDrop').css({'background':'rgba(0,0,0,0.5)'});


            alertButton.on('click',function(){
                window.open('https://www.google.com/');
            });


    }
})( jQuery );

