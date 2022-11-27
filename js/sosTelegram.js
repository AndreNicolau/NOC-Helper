// SOS Telegram elements
const modeTitle = document.getElementById("modeTitle");
const inpDataInicio = document.getElementById("inpDataInicio");
const inpNumeroTicket = document.getElementById("inpNumeroTicket");
const inpinpTroçoCorte = document.getElementById("inpTroço");
const inpIncidente = document.getElementById("inpIncidente");
const inpCausa = document.getElementById("inpCausa");
const inpSpoc = document.getElementById("inpSpoc");
const inpField = document.getElementById("inpField");
const inpAfetação = document.getElementById("inpAfetação");
const inpPrevisão = document.getElementById("inpPrevisão");
const equipaFibras = document.getElementById("equipaFibras");
const inpFecho = document.getElementById("inpFecho");

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
		modeTitle.innerHTML = "** Abertura **";

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
		modeTitle.innerHTML = "** Update **";

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
		modeTitle.innerHTML = "** Fecho **";

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

// radio event listeners
abertura.addEventListener("click", TelegramMessageMode);
update.addEventListener("click", TelegramMessageMode);
fecho.addEventListener("click", TelegramMessageMode);
