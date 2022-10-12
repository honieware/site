$(document).ready(function() {
    var referrer = document.referrer;
    console.log(referrer);
    if (referrer.includes("honie.buzz")) {
        $('#redirect-notice').show();
    }
});