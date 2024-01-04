// ==UserScript==
// @name        Auto-submit
// @namespace   AMQ Scripts
// @match       https://animemusicquiz.com/*
// @grant       none
// @version     1.5.3
// @author      GizmoTjaz
// @updateURL   https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-submit.js
// @downloadURL https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/auto-submit.js
// @require     https://raw.githubusercontent.com/GizmoTjaz/amq-scripts/master/utils/essentials.js
// ==/UserScript==

if (document.getElementById("startPage"))
	return;

let submitInterval = null;
let previousAnswer = "";

AMQ_UTILS.onViewChange(() => {
	if (viewChanger.currentView === "quiz" && !submitInterval) {
		submitInterval = setInterval(() => {

			const currentAnswer = quiz.answerInput.typingInput.$input[0].value;

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
