// This background page runs like a separate page with a js script

// Rule to show page action on  www.youtube.com.../watch... pages with a #player element
var rule1 = {
    conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.google.com'},
            css: ["input[type='password']"]
        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
};

// Add rules to onPageChanged event when extension installed.
chrome.runtime.onInstalled.addListener(function (details) {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([rule1]);

    });
});