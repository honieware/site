var taglines = [
	"what do you mean this character turns me on?!",
	"jacked at all trades",
	"the queen bee",
	"master of the hive",
	"the bee's knees",
	"peaked at neco-arc", // @gurenya
	"graphic design is my passion",
	"lowercase liege",
	"would you smooch a bee?", // undertale
	"the bee that turns you gay (no clickbait)",
	"sexoooooo",
	"hiveborn homewrecker", // lia edit
	"banger tweets only",
	"my little corner of the 'net",
	"ayyy i'm a fucken' bee", // bebe
	"menace to society",
	"that one person who uses gimp",
	"a whole ass they/them", // hivecord
	"all warm and runny" // king gizzard
];

let randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

$(document).ready(function() {
    $('#tagline').html(randomTagline);
});