// SOS Telegram elements
const tituloModoDeEnvio = document.getElementById("tituloModoDeEnvio");
const inpDataInicio = document.getElementById("inpDataInicio");
const inpNumeroTicket = document.getElementById("inpNumeroTicket");
const inpTroçoCorte = document.getElementById("inpTroço");
const inpIncidente = document.getElementById("inpIncidente");
const inpCausa = document.getElementById("inpCausa");
const inpSpoc = document.getElementById("inpSpoc");
const inpField = document.getElementById("inpField");
const inpAfetação = document.getElementById("inpAfetação");
const inpPrevisão = document.getElementById("inpPrevisão");
const equipaFibras = document.getElementById("equipaFibras");
const inpDataFecho = document.getElementById("inpDataFecho");
const txtMensagemSOS = document.getElementById("txtMensagemSOS");
const btnCopiarSOS = document.getElementById("sosTelegram_btnCopiar");

// get elements by name "SOSinput"
const sosInputs = document.getElementsByName("SOSinput");

// radio elements
const abertura = document.getElementById("rdoAbertura");
const update = document.getElementById("rdoUpdate");
const fecho = document.getElementById("rdoFecho");

// SOS Telegram variables
let data;
let ticketNumber;
let trocoName;
let incidenteName;
let causaName;
let spocName;
let fieldName;
let afetaçãoName;
let previsãoName;

// get elements by classname "ABERTURA"
const aberturaElements = document.getElementsByClassName("ABERTURA");
// get elements by classname "UPDATE"
const updateElements = document.getElementsByClassName("UPDATE");
// get elements by classname "FECHO"
const fechoElements = document.getElementsByClassName("FECHO");

// page load
window.onload = () => {
	abertura.checked = true;

	for (var i = 0; i < updateElements.length; i++) {
		updateElements[i].style.display = "none";
	}

	// hide elements
	for (var i = 0; i < fechoElements.length; i++) {
		fechoElements[i].style.display = "none";
	}
};

function TelegramMessageMode() {
	if (abertura.checked) {
		tituloModoDeEnvio.innerHTML = "** Abertura **";

		for (var i = 0; i < aberturaElements.length; i++) {
			aberturaElements[i].style.display = "block";
		}

		for (var i = 0; i < updateElements.length; i++) {
			updateElements[i].style.display = "none";
		}

		for (var i = 0; i < fechoElements.length; i++) {
			fechoElements[i].style.display = "none";
		}
	}

	if (update.checked) {
		tituloModoDeEnvio.innerHTML = "** Update **";

		for (var i = 0; i < aberturaElements.length; i++) {
			aberturaElements[i].style.display = "none";
		}

		for (var i = 0; i < updateElements.length; i++) {
			updateElements[i].style.display = "block";
		}

		for (var i = 0; i < fechoElements.length; i++) {
			fechoElements[i].style.display = "none";
		}
	}

	if (fecho.checked) {
		tituloModoDeEnvio.innerHTML = "** Fecho **";

		for (var i = 0; i < aberturaElements.length; i++) {
			aberturaElements[i].style.display = "none";
		}

		for (var i = 0; i < updateElements.length; i++) {
			updateElements[i].style.display = "none";
		}

		for (var i = 0; i < fechoElements.length; i++) {
			fechoElements[i].style.display = "block";
		}
	}
}

function UpdateMessage() {
	data = inpDataInicio.value;
	ticketNumber = inpNumeroTicket.value;
	trocoName = inpTroçoCorte.value;
	incidenteName = inpIncidente.value;
	causaName = inpCausa.value;
	spocName = inpSpoc.value;
	fieldName = inpField.value;
	afetaçãoName = inpAfetação.value;
	previsãoName = inpPrevisão.value;

	const mensagem = `Data: ${data}\nTicket: ${ticketNumber}\nTroço: ${trocoName}\nIncidente: ${incidenteName}\nCausa: ${causaName}\nSPOC: ${spocName}\nField: ${fieldName}\nAfetação: ${afetaçãoName}\nPrevisão: ${previsãoName}`;
	txtMensagemSOS.value = mensagem.trim();
}

// radio event listeners
abertura.addEventListener("click", TelegramMessageMode);
update.addEventListener("click", TelegramMessageMode);
fecho.addEventListener("click", TelegramMessageMode);

// button event listener
btnCopiarSOS.addEventListener("click", UpdateMessage);

// sosInputs event listener
for (var i = 0; i < sosInputs.length; i++) {
	sosInputs[i].addEventListener("input", UpdateMessage);
}
