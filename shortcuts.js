// ==UserScript==
// @name        Shortcuts
// @namespace   AMQ Scripts
// @match       https://animemusicquiz.com/*
// @grant       none
// @version     1.6
// @author      GizmoTjaz
// @updateURL   https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/shortcuts.js
// @downloadURL https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/shortcuts.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/script-info.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/essentials.js
// ==/UserScript==

if (document.getElementById("startPage"))
	return;

const shortcuts = {

	// AoT
	"aot 1": "Shingeki no Kyojin",
	"aot 2": "Shingeki no Kyojin Season 2",
	"aot 3": "Shingeki no Kyojin Season 3",
	"aot 4": "Shingeki no Kyojin: The Final Season",
	"snk 1": "Shingeki no Kyojin",
	"snk 2": "Shingeki no Kyojin Season 2",
	"snk 3": "Shingeki no Kyojin Season 3",
	"snk 4": "Shingeki no Kyojin: The Final Season",

	// Food Wars
	"food 1": "Shokugeki no Souma",
	"food 2": "Shokugeki no Souma: Ni no Sara",
	"food 3": "Shokugeki no Souma: San no Sara",
	"food 4": "Shokugeki no Souma: Shin no Sara",
	"food 5": "Shokugeki no Souma: Gou no Sara",
	"sns 1": "Shokugeki no Souma",
	"sns 2": "Shokugeki no Souma: Ni no Sara",
	"sns 3": "Shokugeki no Souma: San no Sara",
	"sns 4": "Shokugeki no Souma: Shin no Sara",
	"sns 5": "Shokugeki no Souma: Gou no Sara",

	// JoJo
	"jojo 1": "JoJo no Kimyou na Bouken",
	"jojo 3": "JoJo no Kimyou na Bouken: Stardust Crusaders",
	"jojo 4": "JoJo no Kimyou na Bouken: Diamond wa Kudakenai",
	"jojo 5": "JoJo no Kimyou na Bouken: Ougon no Kaze",
	"jojo 6": "JoJo no Kimyou na Bouken: Stone Ocean",

	// Higurashi
	"higu 1": "Higurashi no Naku Koro ni",
	"higu kai": "Higurashi no Naku Koro ni Kai",
	"higu rei": "Higurashi no Naku Koro ni Rei",
	"higu kira": "Higurashi no Naku Koro ni Kira",
	"higu out": "Higurashi no Naku Koro ni Kaku: Outbreak",
	"higu outbreak": "Higurashi no Naku Koro ni Kaku: Outbreak",
	"higu gou": "Higurashi no Naku Koro ni Gou",
	"higu sotsu": "Higurashi no Naku Koro ni Sotsu",

	// Steins;Gate
	"s;g 1": "Steins;Gate",
	"s;g 2": "Steins;Gate 0",

	// SAO
	"sao 1": "Sword Art Online",
	"sao 2": "Sword Art Online II",
	"sao alice": "Sword Art Online: Alicization",
	"sao ggo": "Sword Art Online Alternative: Gun Gale Online",

	// Mob Psycho
	"mob 1": "Mob Psycho 100",
	"mob 2": "Mob Psycho 100 II",
	"mob 3": "Mob Psycho 100 III",

	// Boku No Hero Academia
	"bnha": "Boku no Hero Academia",
	"mha": "Boku no Hero Academia",

	// Kaiji
	"kaiji 1": "Gyakkyou Burai Kaiji",
	"kaiji 2": "Gyakkyou Burai Kaiji: Hakairoku-hen",

	// Evangelion
	"eva 1.0": "Evangelion: 1.11 You Are (Not) Alone",
	"eva 2.0": "Evangelion: 2.22 You Can (Not) Advance",
	"eva 3.0": "Evangelion: 3.33 You Can (Not) Redo",
	"eva 4.0": "Evangelion: 3.0+1.0 Thrice Upon a Time",
	"end of eva": "Neon Genesis Evangelion: The End of Evangelion",

	// Misc
	"ngnl": "No Game No Life",
	"opm": "One Punch Man",
	"hxh": "Hunter x Hunter",
	"kanokari": "Kanojo, Okarishimasu",
	"$$$": "Fugou Keiji Balance: Unlimited",
	"dragon 1": "Kobayashi-san Chi no Maid Dragon",
	"dragon 2": "Miss Kobayashi's Dragon Maid S",
	"yagakimi": "Yagate Kimi ni Naru",
	"kake 1": "Kakegurui",
	"kake 2": "Kakegurui××",
	"wep": "Wonder Egg Priority"
  
};

AMQ_UTILS.onGameLoad(() => {
	quiz.answerInput.$input.on("input", e => {

		if (quiz.gameMode === "Ranked")
			return;

		const inputValue = e.target.value.trim();
	
		if (inputValue.length > 0) {
	
			const shortcutSolution = shortcuts[inputValue.toLowerCase()];
	
			if (shortcutSolution) {
				e.target.value = shortcutSolution;
				AMQ_UTILS.submitAnswer();
			}
		}
	});
});

AMQ_addScriptData({
	name: "Show Name Shortcuts",
	author: "Tjizz",
	description: `
		<p>Lets you guess show names more easier with shortcuts.</p>
	`
});