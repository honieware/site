$(document).ready(function() {
    var today = new Date();
    today.setHours(0,0,0,0);
    if (today <= Date.parse('11/21/2022 12:00:00 AM')) {
        $('#redirect-notice').show();
    }
});
