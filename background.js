

chrome.browserAction.onClicked.addListener(function( tab ) {
	var jsonH_url = chrome.extension.getURL("JS-Fmt/JS-Fmt.html");
	chrome.tabs.create({"url":jsonH_url, "selected":true});
});
