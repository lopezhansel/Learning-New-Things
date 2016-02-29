//  This Run first in the background when chrome starts
var config = new Config();
var store;

config.loadConfiguration(function () {
	console.log("initial configudration", config);
	store = new Store(config);
});

chrome.storage.onChanged.addListener(function () {
	config.loadConfiguration(function () {
		console.log("configuration changed", config);
		store = new Store(config);
	});
});

var sendToActiveTab = function(request, callback) {
	chrome.tabs.query({
		active: true,
		currentWindow: true
	}, function (tabs) {
		if (tabs.length < 1) {
			this.console.log("couldn't find active tab");
		}
		else {
			var tab = tabs[0];
			chrome.tabs.sendMessage(tab.id, request, callback);
		}
	});
};

