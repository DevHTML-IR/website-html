document.addEventListener("contextmenu", function (e) {
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
  }, 1000);
}, false);

document.addEventListener("keydown", function (e) {
  e.preventDefault();
});
document.addEventListener('DOMContentLoaded', function () {
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });
});
function changeLanguage(selectElement) {
  var selectedValue = selectElement.value;
  if (selectedValue === 'en') {
    window.location.href = '';
  } else if (selectedValue === 'fr') {
    window.location.href = ''; 
  }
}
