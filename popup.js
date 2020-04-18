let changeColor = document.getElementById('zerar');

changeColor.onclick = function(element) {
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.extension.sendRequest({greeting: "zerar"});
    });
};

let total = document.getElementById('num');
var v = 0
chrome.browserAction.getBadgeText({}, function(result) {
    v = result;
    total.innerHTML = ""+v
});

