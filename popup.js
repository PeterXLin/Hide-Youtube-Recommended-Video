let getSelectedTab = (tab) => {
  let tabId = tab[0].id;
  let sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);

  document.getElementById("hide").addEventListener("click", () => {
    console.log("hello");
    sendMessage({ action: "HIDE" });
  });
  document
    .getElementById("show")
    .addEventListener("click", () => sendMessage({ action: "SHOW" }));
};

// function logTabs(tabs) {
//   // tabs[0].url requires the `tabs` permission or a matching host permission.
//   console.log(tabs[0].url);
// }

// function onError(error) {
//   console.error(`Error: ${error}`);
// }

// chrome.tabs.getSelected(null, getSelectedTab);
// chrome.tabs.query(test);
chrome.tabs.query({ currentWindow: true, active: true }, getSelectedTab);
// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   if (changeInfo.status == "complete" && tab.active) {
//     let sendMessage = (messageObj) =>
//       chrome.tabs.sendMessage(tabId, messageObj);
//     sendMessage({ action: "HIDE" });
//   }
// });
