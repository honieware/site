$(function() {
	var alreadyConsented=getCookie("consent");
	if (!alreadyConsented) {
    $('#adultModal').modal('show');
	}
});

$('#adultModal').on('hidden.bs.modal', function () {
	setCookie("consent", "true", 365);
});