document.addEventListener("DOMContentLoaded", function () {
  console.log("popup.js loaded")
  const autoPauseTab = document.getElementById("autoPauseTab");
  const autoPlayTab = document.getElementById("autoPlayTab");

  const autoPauseWindow = document.getElementById("autoPauseWindow");
  const autoPlayWindow = document.getElementById("autoPlayWindow");

  autoPauseTab.checked = localStorage.getItem("pauseOnTabChange") === "true";
  autoPlayTab.checked = localStorage.getItem("playOnTabChange") === "true";

  autoPauseWindow.checked = localStorage.getItem("pauseOnWindowChange") === "true";
  autoPlayWindow.checked = localStorage.getItem("playOnWindowChange") === "true";

  autoPauseTab.addEventListener("change", function () {
    localStorage.setItem("pauseOnTabChange", autoPauseTab.checked);
  });

  autoPlayTab.addEventListener("change", function () {
    localStorage.setItem("playOnTabChange", autoPlayTab.checked);
  });

  autoPauseWindow.addEventListener("change", function () {
    localStorage.setItem("pauseOnWindowChange", autoPauseWindow.checked);
  });

  autoPlayWindow.addEventListener("change", function () {
    localStorage.setItem("playOnWindowChange", autoPlayWindow.checked);
  });
});
