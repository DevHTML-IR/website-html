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
  }, 500);
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
// Vérifier si l'utilisateur a déjà fait un choix
var cookieChoice = getCookie('cookieChoice');

if (!cookieChoice) {
  // Afficher la bannière si aucun choix n'a été enregistré
  showBanner();
}

// Gérer le clic sur le bouton "Accepter"
document.getElementById('acceptButton').addEventListener('click', function() {
  // Définir le cookie pour enregistrer le choix d'acceptation
  setCookie('cookieChoice', 'accepted', 365);
  hideBanner();
});

// Gérer le clic sur le bouton "Refuser"
document.getElementById('refuseButton').addEventListener('click', function() {
  // Définir le cookie pour enregistrer le choix de refus
  setCookie('cookieChoice', 'refused', 365);
  hideBanner();
});

// Fonction pour afficher la bannière
function showBanner() {
  document.getElementById('cookieBanner').style.display = 'block';
}

// Fonction pour masquer la bannière
function hideBanner() {
  document.getElementById('cookieBanner').style.display = 'none';
}

// Fonction pour obtenir la valeur d'un cookie
function getCookie(name) {
  var cookieName = name + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var cookieArray = decodedCookie.split(';');
  for (var i = 0; i < cookieArray.length; i++) {
    var cookie = cookieArray[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(cookieName) === 0) {
      return cookie.substring(cookieName.length, cookie.length);
    }
  }
  return '';
}

// Fonction pour définir un cookie
function setCookie(name, value, days) {
  var expires = '';
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }
  document.cookie = name + '=' + value + expires + '; path=/';
}
