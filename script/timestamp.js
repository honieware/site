
$(document).ready(function() {
    $('#datestamp').html(new Date(1679767200 * 1000).toLocaleDateString("default"));
    $('#timestamp').html(new Date(1679767200 * 1000).toLocaleTimeString("default", {hour: '2-digit', minute:'2-digit'}));
});