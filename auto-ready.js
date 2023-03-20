// ==UserScript==
// @name        Auto-ready
// @namespace   AMQ Scripts
// @match       https://animemusicquiz.com/*
// @grant       none
// @version     1.3.2
// @author      GizmoTjaz
// @updateURL   https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-ready.js
// @downloadURL https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-ready.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/essentials.js
// ==/UserScript==

if (document.getElementById("startPage"))
	return;

function setReady () {

	if (quiz.gameMode === "Ranked" || lobby.hostName === selfName || !lobby.inLobby || lobby.isSpectator)
		return;

	if (!lobby.isReady) {
		lobby.fireMainButtonEvent();
	}
}

AMQ_UTILS.onViewChange(() => {
	if (viewChanger.currentView === "lobby") {
		AMQ_UTILS.randomDelay(setReady);
	}
});

AMQ_UTILS.onGameLoad(() => {

	new Listener("Room Settings Changed", () => {
		AMQ_UTILS.randomDelay(setReady);
	}).bindListener();
	
	new Listener("Spectator Change To Player", () => {
		AMQ_UTILS.randomDelay(setReady);
	}).bindListener();
	
	new Listener("Host Promotion", () => {
		AMQ_UTILS.randomDelay(setReady);
	}).bindListener();

});
