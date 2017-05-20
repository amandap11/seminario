// Configura o nome da propriedade hidden e o evento de mudança para visibilidade
var hidden, visibilityChange; 
if (typeof document.hidden !== "undefined") { // Suporte para Opera 12.10 e Firefox 18 em diante 
  hidden = "hidden";
  visibilityChange = "visibilitychange";
} else if (typeof document.mozHidden !== "undefined") {
  hidden = "mozHidden";
  visibilityChange = "mozvisibilitychange";
} else if (typeof document.msHidden !== "undefined") {
  hidden = "msHidden";
  visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
  hidden = "webkitHidden";
  visibilityChange = "webkitvisibilitychange";
}
 
var audioElement = document.getElementById("audioElement");
audioElement.play();

// Se a página está escondida, pausa o audio;
// Se a página está visível, reproduz o audio
function handleVisibilityChange() {
  if (document[hidden]) {
    audioElement.pause();
  } else {
    audioElement.play();
  }
}

// Alerta se o navegador não suporta addEventListener ou a API de visibilidade da página
if (typeof document.addEventListener === "undefined" || 
  typeof document[hidden] === "undefined") {
  alert("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
} else {
  // Manipula o evento de mudança da visibilidade da página   
  document.addEventListener(visibilityChange, handleVisibilityChange, false);
}






function geoFindMe() {
  var output = document.getElementById("out");

  if (!navigator.geolocation){
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
    return;
  }

  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

    var img = new Image();
    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    output.appendChild(img);
  }

  function error() {
    output.innerHTML = "Unable to retrieve your location";
  }

  output.innerHTML = "<p>Locating…</p>";

  navigator.geolocation.getCurrentPosition(success, error);
}


