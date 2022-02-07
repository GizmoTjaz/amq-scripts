window.AMQ_UTILS = {

	__viewChangeListeners: [],

	// Functions
	getRandomNumber: (max) => {
		return Math.floor(Math.random() * max);
	},
	randomDelay: (callback) => {
		setTimeout(callback, this.getRandomNumber(300));
	},

	// Listeners
	onViewChange: (callback) => {
		this.__viewChangeListeners.push(callback);
	}

};

ViewChanger.prototype.changeView = () => {

	const old = ViewChanger.prototype.changeView;

	return function () {
		
		old.apply(this, arguments);

		AMQ_UTILS.__viewChangeListeners.forEach(callback => {
			callback.apply();
		});
	};
};