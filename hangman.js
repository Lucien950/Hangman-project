//Touch These
var wordBank = [
	"abruptly",
	"absurd",
	"abyss",
	"affix",
	"askew",
	"avenue",
	"awkward",
	"axiom",
	"azure",
	"bagpipes",
	"bandwagon",
	"banjo",
	"bayou",
	"beekeeper",
	"bikini",
	"blitz",
	"blizzard",
	"boggle",
	"bookworm",
	"boxcar",
	"boxful",
	"buckaroo",
	"buffalo",
	"buffoon",
	"buxom",
	"buzzard",
	"buzzing",
	"buzzwords",
	"caliph",
	"cobweb",
	"cockiness",
	"croquet",
	"crypt",
	"curacao",
	"cycle",
	"daiquiri",
	"dirndl",
	"disavow",
	"dizzying",
	"duplex",
	"dwarves",
	"embezzle",
	"equip",
	"espionage",
	"euouae",
	"exodus",
	"faking",
	"fishhook",
	"fixable",
	"fjord",
	"flapjack",
	"flopping",
	"fluffiness",
	"flyby",
	"foxglove",
	"frazzled",
	"frizzled",
	"fuchsia",
	"funny",
	"gabby",
	"galaxy",
	"galvanize",
	"gazebo",
	"giaour",
	"gizmo",
	"glowworm",
	"glyph",
	"gnarly",
	"gnostic",
	"gossip",
	"grogginess",
	"haiku",
	"haphazard",
	"hyphen",
	"iatrogenic",
	"icebox",
	"injury",
	"ivory",
	"ivy",
	"jackpot",
	"jaundice",
	"jawbreaker",
	"jaywalk",
	"jazziest",
	"jazzy",
	"jelly",
	"jigsaw",
	"jinx",
	"jiujitsu",
	"jockey",
	"jogging",
	"joking",
	"jovial",
	"joyful",
	"juicy",
	"jukebox",
	"jumbo",
	"kayak",
	"kazoo",
	"keyhole",
	"khaki",
	"kilobyte",
	"kiosk",
	"kitsch",
	"kiwifruit",
	"klutz",
	"knapsack",
	"larynx",
	"lengths",
	"lucky",
	"luxury",
	"lymph",
	"marquis",
	"matrix",
	"megahertz",
	"microwave",
	"mnemonic",
	"mystify",
	"naphtha",
	"nightclub",
	"nowadays",
	"numbskull",
	"nymph",
	"onyx",
	"ovary",
	"oxidize",
	"oxygen",
	"pajama",
	"peekaboo",
	"phlegm",
	"pixel",
	"pizazz",
	"pneumonia",
	"polka",
	"pshaw",
	"psyche",
	"puppy",
	"puzzling",
	"quartz",
	"queue",
	"quips",
	"quixotic",
	"quiz",
	"quizzes",
	"quorum",
	"razzmatazz",
	"rhubarb",
	"rhythm",
	"rickshaw",
	"schnapps",
	"scratch",
	"shiv",
	"snazzy",
	"sphinx",
	"spritz",
	"squawk",
	"staff",
	"strength",
	"strengths",
	"stretch",
	"stronghold",
	"stymied",
	"subway",
	"swivel",
	"syndrome",
	"thriftless",
	"thumbscrew",
	"topaz",
	"transcript",
	"transgress",
	"transplant",
	"triphthong",
	"twelfth",
	"twelfths",
	"unknown",
	"unworthy",
	"unzip",
	"uptown",
	"vaporize",
	"vixen",
	"vodka",
	"voodoo",
	"vortex",
	"voyeurism",
	"walkway",
	"waltz",
	"wave",
	"wavy",
	"waxy",
	"wellspring",
	"wheezy",
	"whiskey",
	"whizzing",
	"whomever",
	"wimpy",
	"witchcraft",
	"wizard",
	"woozy",
	"wristwatch",
	"wyvern",
	"xylophone",
	"yachtsman",
	"yippee",
	"yoked",
	"youthful",
	"yummy",
	"zephyr",
	"zigzag",
	"zigzagging",
	"zilch",
	"zipper",
	"zodiac",
	"zombie"
]
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

//Final Answer
let answer = '';
//wordSpotlight
let wordStatus = null;
let wins = 0;
let games = 0;


//MidGame Functions
function handleGuess(chosenLetter) {
	//Check if it doesn't exist
	guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
	//Disable buttons
	document.getElementById(chosenLetter).setAttribute('disabled', true);

	if (answer.indexOf(chosenLetter) >= 0) {
		guessedWord();
		checkIfGameWon();
	}

	else if (answer.indexOf(chosenLetter) === -1) {
		mistakes++;
		checkIfGameLost();
		document.getElementById('mistakes').innerHTML = mistakes;
		document.getElementById('hangmanPic').src = './images/' + mistakes + '.png';;
	}
}
//Update the wordSpotlight
function guessedWord() {
	wordStatus = answer.split('').map(letter => (letter == " " ? "&nbsp" : guessed.indexOf(letter) >= 0 ? letter : "_")).join('');
	document.getElementById('wordSpotlight').innerHTML = wordStatus.split("").join(" ");
}



//ENDGAME FUNCTIONS
function checkIfGameWon() {
	if (wordStatus.replace("&nbsp", " ") === answer) {
		wins += 1;
		disableAll();
		document.getElementById("win").style.display = "flex";
		popUp("win")
		setTimeout(()=>{document.getElementById("win").style.display = "none";}, 3000);
	}
}
function checkIfGameLost() {
 	if (mistakes === maxWrong) {
		disableAll();
		document.getElementById('wordSpotlight').innerHTML = 'The answer was: ' + answer;
		document.getElementById("lose").style.display = "flex";
		popUp("lose")
		setTimeout(()=>{document.getElementById("lose").style.display = "none";}, 3000);
	}
}
function popUp(popID){
	games += 1;
	document.getElementById("ratio").innerHTML = (wins/games)*100;
	setTimeout(()=>{document.getElementById(popID).style.bottom = "3em";},0);
	setTimeout(()=>{document.getElementById(popID).style.bottom = "-5em";}, 2000);
}
function disableAll(){
	list = document.querySelectorAll(".keys");
	for (i = 0; i < list.length; i++) {
		if (list[i].innerText != "Reset"){
			list[i].disabled = true;
		}
	}
}


//Driver Code
//Generate Keyboard
function generateButtons() {
	//Button Styles here
	let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'.split('').map(letter =>
		`<button class="keys" id="` + letter + `" onClick="handleGuess('` + letter + `')"><span id = "inLet">` + letter.toUpperCase() + `</span></button>`
	).join('');
	document.getElementById('keyboard').innerHTML = buttonsHTML + "<button class=\"keys resetKey\" onClick=\"reset()\">Reset</button>";
}
function reset() {
  mistakes = 0;
  document.getElementById('mistakes').innerHTML = mistakes;
  guessed = [];
  document.getElementById('hangmanPic').src = './images/0.png';

  answer = wordBank[Math.floor(Math.random() * wordBank.length)];
  guessedWord();
  generateButtons();
}

//Update MaxWrongs
document.getElementById('maxWrong').innerHTML = maxWrong;
reset()
