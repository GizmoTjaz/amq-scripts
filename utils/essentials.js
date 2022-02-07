window.AMQ_UTILS = {

	__viewChangeListeners: [],

	// Functions
	getRandomNumber: function (max) {
		return Math.floor(Math.random() * max);
	},
	randomDelay: function (callback) {
		setTimeout(callback, this.getRandomNumber(300));
	},

	// Listeners
	onViewChange: function (callback) {
		this.__viewChangeListeners.push(callback);
	}

};

ViewChanger.prototype.changeView = (function () {

	const old = ViewChanger.prototype.changeView;

	return function () {
		
		old.apply(this, arguments);

		AMQ_UTILS.__viewChangeListeners.forEach(callback => {
			callback.apply();
		});
	};
})();