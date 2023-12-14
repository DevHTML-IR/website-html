// condition.js

document.addEventListener("contextmenu", function (e) {
  if (!e.target.closest("form")) {
    e.preventDefault();
    
    var tempDiv = document.createElement("div");
    tempDiv.style.position = "absolute";
    tempDiv.style.left = e.clientX + "px";
    tempDiv.style.top = e.clientY + "px";
    tempDiv.style.fontSize = "20px";
    tempDiv.style.transform = "translate(-50%, -100%)";
    tempDiv.style.zIndex = "9999";  
    tempDiv.innerHTML = "🚫";

    document.body.appendChild(tempDiv);

    setTimeout(function () {
      tempDiv.remove();
    }, 500);
  }
}, false);

document.addEventListener("keydown", function (e) {
  if (!e.target.closest("form")) {
    e.preventDefault();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('selectstart', function (e) {
    if (!e.target.closest("form")) {
      e.preventDefault();
    }
  });
});

// ... le reste du code reste inchangé
