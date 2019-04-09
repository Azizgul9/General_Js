var figlet = require("figlet");

figlet.text('Hello AZI!', function(error, data) {

    if (error)

        console.log(error);

    else

        console.log(data);

});