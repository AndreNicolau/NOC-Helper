// SOS Telegram elements
const tituloModoDeEnvio = document.getElementById("tituloModoDeEnvio");
const equipaFibras = document.getElementById("equipaFibras");
const txtMensagemSOS = document.getElementById("txtMensagemSOS");
const btnCopiarSOS = document.getElementById("sosTelegram_btnCopiar");

// get elements by name "SOSinput"
const sosInputs = document.getElementsByName("SOSinput");

// radio elements
const abertura = document.getElementById("rdoAbertura");
const update = document.getElementById("rdoUpdate");
const fecho = document.getElementById("rdoFecho");

// SOS Telegram variables
const dataAbertura = document.getElementById("inpDataAbertura");
const numeroTicket = document.getElementById("inpNumeroTicket");
const nomeTroço = document.getElementById("inpTroço");
const nomeIncidente = document.getElementById("inpIncidente");
const nomeCausa = document.getElementById("inpCausa");
const nomeSpoc = document.getElementById("inpSpoc");
const nomeField = document.getElementById("inpField");
const nomeAfetação = document.getElementById("inpAfetação");
const nomePrevisão = document.getElementById("inpPrevisão");
const dataFecho = document.getElementById("inpDataFecho");

// get elements by className "ABERTURA"
const aberturaElements = document.getElementsByClassName("ABERTURA");
// get elements by className "UPDATE"
const updateElements = document.getElementsByClassName("UPDATE");
// get elements by className "FECHO"
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

	const mensagem = `Data: ${dataAbertura.value.replaceAll("T", " ")}\nTicket: ${numeroTicket.value}\nTroço: ${nomeTroço.value}\nIncidente: ${nomeIncidente.value}\nCausa: ${nomeCausa.value}\nSPOC: ${nomeSpoc.value}\nField: ${nomeField.value}\nAfetação: ${nomeAfetação}\nPrevisão: ${nomePrevisão.value}`;
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
