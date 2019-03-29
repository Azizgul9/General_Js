(function( $ ){

    $.fn.datePicker = function() {

        var currentDate=new Date();
        Date.prototype.daysInMonth = function() {
            return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
        };
        alert(currentDate.daysInMonth());

        function daysInMonth(month, year) {
            return new Date(year, month, 0).getDate();
        }

        console.log(daysInMonth(2, 1999)); // February in a non-leap year
        console.log(daysInMonth(2, 2000)); // February in a leap year

    }
})( jQuery );

