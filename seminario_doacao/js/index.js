var localizacao = document.getElementById("localizacao");

if (!navigator.geolocation){
	localizacao.innerHTML = "<p>Seu browser não suporta Geolocalização.</p>";
}

function success(position) {

	var latitude  = position.coords.latitude;
	var longitude = position.coords.longitude;

	localizacao.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

}

function error() {
	localizacao.innerHTML = "Não foi possível obter sua localização";
}

localizacao.innerHTML = "<p>Buscando localização...</p>";

navigator.geolocation.getCurrentPosition(success, error);