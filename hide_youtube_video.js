const hideRecommendedVideo = () => {
  document.getElementById("contents").style.display = "none";
};

const showRecommendedVideo = () => {
  document.getElementById("contents").style.display = "block";
};

const onMessage = (message) => {
  switch (message.action) {
    case "HIDE":
      hideRecommendedVideo();
      break;
    case "SHOW":
      showRecommendedVideo();
      break;
    default:
      break;
  }
};

// execute after everything is fully loaded
window.addEventListener("load", () => {
  // console.log("1");
  // hideRecommendedVideo();

  setTimeout(function () {
    document.getElementById("contents").style.display = "none";
  }, 200);
  // document.getElementById("contents").onload = function () {
  //   document.getElementById("contents").style.display = "none";
  // };
});

// triggered as soon as all the HTML elements are ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");
  hideRecommendedVideo();
});

chrome.runtime.onMessage.addListener(onMessage);
