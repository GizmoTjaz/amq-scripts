// ==UserScript==
// @name        Auto-submit
// @namespace   AMQ Scripts
// @match       https://animemusicquiz.com/*
// @grant       none
// @version     1.5.0
// @author      GizmoTjaz
// @updateURL   https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-submit.js
// @downloadURL https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-submit.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/script-info.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/essentials.js
// ==/UserScript==

if (document.getElementById("startPage"))
	return;

let submitInterval = null;
let previousAnswer = "";

AMQ_UTILS.onViewChange(() => {
	if (viewChanger.currentView === "quiz" && !submitInterval) {
		submitInterval = setInterval(() => {

			const currentAnswer = quiz.answerInput.$input[0].value;

			if (
				quiz.gameMode !== "Ranked" && quiz.inQuiz && !lobby.isSpectator
				&& !window.AMQ_SA_MODE
				&& previousAnswer !== currentAnswer && currentAnswer.trim().length > 0
			) {
				previousAnswer = currentAnswer
				AMQ_UTILS.submitAnswer();
			}
		}, 300);
	} else {
		clearInterval(submitInterval);
		submitInterval = null;
	}
});

AMQ_addScriptData({
	name: "Auto-submit answers",
	author: "Tjizz",
	description: `
		<p>Automatically submits your answer as you type.</p>
	`
});
