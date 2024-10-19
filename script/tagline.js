var taglines = [
	// "why are you looking at my code",
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
	"all warm and runny", // king gizzard
	"goated with the sauce",
	"the website ever made",
	"evil and a fucked up",
	"the bee with thigh highs and pronouns",
	"add me in vrchat",
	"just a little bee", // marcy
	"buzz buzz motherfucker",
	"buzzing it down insect style",
	"keep refreshing the page for free robux",
	"rated AO",
	"> be me  > me bee",
	"don't check the page's uptime",
	"now with even more honey!",
	"now with additional commission slots!", //commissions
	"pro tip: don't die",
	"did you know that honie backwards is einoh? did you?",
	"new reto coming soon i pinky pwomise",
	"guru meditation",
	"i'm a teapot",
	"hola sofly!!!!",
	"lego legolas"
];

let randomTagline = taglines[Math.floor(Math.random() * taglines.length)];

$(document).ready(function() {
    $('#tagline').html(randomTagline);
});
