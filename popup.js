let changeColor = document.getElementById("zerar");

changeColor.onclick = function (element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.runtime.sendMessage({ greeting: "zerar" });
  });
};

let total = document.getElementById("num");
var v = 0;
chrome.action.getBadgeText({}, function (result) {
  v = result;
  total.innerHTML = "" + v;
});
