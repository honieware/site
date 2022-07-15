console.log(getCookie("light_mode"))

function toggleMode() {
	var toggleText = document.getElementById("toggle").innerHTML;

	document.body.classList.toggle("light-mode");
	document.getElementById("custom-quote").classList.toggle("custom-quote-light");
	
	switch (toggleText) {
		case "🌚":
			document.getElementById("toggle").innerHTML = "🌞";
			setCookie("light_mode", "false", 365);
			break;
		default:
			document.getElementById("toggle").innerHTML = "🌚";
			setCookie("light_mode", "true", 365);
			break;
	}
}

$(document).ready(function() {
	let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

	if (!matched || getCookie("light_mode") == "true") {
		$('#toggle').html("🌚");
		document.body.classList.toggle("light-mode");
		document.getElementById("custom-quote").classList.toggle("custom-quote-light");
		setCookie("light_mode", "true", 365);
	}
});