$(function(){
    $.getJSON('https://restcountries.eu/rest/v2/all?fields=name;flag', function (countries) {
        var options = {
            data: countries,
            getValue: "name",
            template: {
                type: "iconLeft",
                fields: {
                    iconSrc: "flag"
                }
            },
            theme: "square",
            list: {match: {enabled: true}},
        };
        $("#country").easyAutocomplete(options);
    }
);
}
);