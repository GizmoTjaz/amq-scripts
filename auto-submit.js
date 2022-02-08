// ==UserScript==
// @name        Auto-submit
// @namespace   AMQ Scripts
// @match       https://animemusicquiz.com/*
// @grant       none
// @version     1.0
// @author      GizmoTjaz
// @updateURL	https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-submit.js
// @downloadURL	https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-submit.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/script-info.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/essentials.js
// ==/UserScript==

let submitInterval = null;

AMQ_UTILS.onViewChange(() => {
	if (viewChanger.currentView === "quiz") {
		submitInterval = setInterval(() => {
			if (
				quiz.gameMode !== "Ranked"
				&& quiz.inQuiz
				&& !lobby.isSpectator
				&& quiz.answerInput.$input[0].value.trim().length > 0
			) {
				AMQ_UTILS.submitAnswer();
			}
		}, 300);
	} else {
		clearInterval(submitInterval);
	}
});

AMQ_addScriptData({
	name: "Auto-submit answers",
	author: "Tjizz",
	description: `
		<p>Automatically submits your answer as you type.</p>
	`
});