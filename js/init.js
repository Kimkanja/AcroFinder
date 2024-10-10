//Hook up the tweet display

$(document).ready(function() {
                           
    $(".countdown").countdown({
                date: "4 October 2024 4:20:00",
                format: "on"
            },
            
            function() {
                // callback function
            });

}); 
