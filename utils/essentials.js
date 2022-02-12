if (document.getElementById("startPage"))
	return;

// Only set up once
if (!window.AMQ_UTILS) {
	
	window.AMQ_UTILS = {

		__viewChangeListeners: [],
		__gameLoadListeners: [],
	
		// Functions
		getRandomNumber: function (max) {
			return Math.floor(Math.random() * max);
		},
		randomDelay: function (callback) {
			setTimeout(callback, this.getRandomNumber(400));
		},
		submitAnswer: function () {
			quiz.answerInput.$input[0].dispatchEvent(new KeyboardEvent("keypress", {
				key: "Enter",
				code: "Enter",
				which: 13
			}));
		},
	
		// Listeners
		onViewChange: function (callback) {
			this.__viewChangeListeners.push(callback);
		},
		onGameLoad: function (callback) {
			this.__gameLoadListeners.push(callback);
		}
	
	};

	ViewChanger.prototype.changeView = (function () {

		const old = ViewChanger.prototype.changeView;
	
		return function () {
			
			old.apply(this, arguments);
	
			AMQ_UTILS.__viewChangeListeners.forEach(callback => callback.apply());
		};
	})();

	setTimeout(() => {

		console.log("start check");

		const gameLoadChecker = setInterval(() => {
			console.log("NOT READY");
			if (window.quiz && window.lobby && window.viewChanger?.currentView !== undefined) {
				console.log("READY!");
				clearInterval(gameLoadChecker);
				window.AMQ_UTILS.__gameLoadListeners.forEach(callback => callback.apply());
			}
		}, 200);
	}, 1000);
}