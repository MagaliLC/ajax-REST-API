$(document).ready(function() {
    $("#getJoke").click(function() {
        $.get("http://api.icndb.com/jokes/random", function(data) {
            $("p").html(data.value.joke);
        });
    });
});