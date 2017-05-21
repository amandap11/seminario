//GEOLOCATION API
var localizacao = document.getElementById("localizacao");

if (!navigator.geolocation){
	localizacao.innerHTML = "<p>Seu navegador não suporta Geolocalização.</p>";
}

function success(position) {

	var latitude  = position.coords.latitude; //obtem a latitude atual
	var longitude = position.coords.longitude; //obtem a longitude atual

	//exibe a posição atual em termos de latitude e longitude
	localizacao.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';

}

function error() { //usada quando o usuário bloqueia o uso da localização
	localizacao.innerHTML = "Não foi possível obter sua localização";
}

localizacao.innerHTML = "<p>Buscando localização...</p>";

navigator.geolocation.getCurrentPosition(success, error);



//NAVIGATION TIMING API
//tempo de carregamento da página
var horaAtual = new Date().getTime();
var tempoDeCarregamento = horaAtual - performance.timing.navigationStart;

//tempo de requisicao-resposta
var tempoDeConexao = performance.timing.responseEnd - performance.timing.requestStart;

console.log("Tempo de carregamento da página: " + tempoDeCarregamento + "ms");
console.log("Tempo de conexão: " + tempoDeConexao + "ms");



//BATTERY STATUS
function updateBatteryStatus(battery) {

	var nivelBateria = battery.level * 100;

	var textoBateria = "Nível de bateria: " + nivelBateria + "% ";

	document.querySelector('#bateria').textContent = textoBateria;
	document.querySelector('#bateria').append(battery.charging ? 'Carregando...' : ' ');
}

navigator.getBattery().then(function(battery) {
    
    updateBatteryStatus(battery);

    //evento disparado quando o carregamento é alterado 
    //(se é conectado à tomada ou se é desconectado)
    battery.onchargingchange = function () {
    	updateBatteryStatus(battery);
    };

    //evento disparado quando o nível de bateria é alterado
    battery.onlevelchange = function () {
    	updateBatteryStatus(battery);
    };

});
