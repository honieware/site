// to-do: even if hidden it shows up for a fraction of a second
// to-do: bg is white even in dark mode when modal appears
// Good Enough For Now

const elementToFade = document.getElementById('heads-up');
console.log(elementToFade)

elementToFade.onanimationend = (e) => {
  if (e.target.classList.contains('fade-out')) {
    elementToFade.parentNode.removeChild(elementToFade);
  }
};

$(function() {
	var alreadyConsented = getCookie("consent");

	if (alreadyConsented) {
		unhideBackground();
		elementToFade.hidden = true;
	}

	if (alreadyConsented == "true") {
    	showCensoredElements();
	}
});


function showFullPage(adultContent) {
	elementToFade.classList.add('fade-out');

	unhideBackground();

	setCookie("consent", adultContent, 365);

	if (adultContent) {
		showCensoredElements();
	}
};

function showCensoredElements() {
	elements = Array.from(document.getElementsByClassName('censored'));
		
	for(element of elements){
		console.log(element);
		  element.classList.remove('censored')
	}
}

function unhideBackground() {
	const blurred = document.getElementById('blurred');
	blurred.classList.remove('blurred');
}