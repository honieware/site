var taglines = [
	"what do you mean this character turns me on?!",
	"jacked at all trades",
	"the queen bee",
	"master of the hive",
	"the bee's knees",
	"peaked at neco-arc",
	"graphic design is my passion",
	"lowercase liege",
	"would you smooch a bee?",
	"the bee that turns you gay (no clickbait)",
	"sexoooooo",
	"hiveborn homewrecker",
	"banger tweets only",
	"my little corner of the 'net",
	"ayyy i'm a fucken' bee",
	"menace to society"
];

let randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

$(document).ready(function() {
    $('#tagline').html(randomTagline);
});