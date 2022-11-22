// get elements
const inpNomeTec = document.getElementById("inpNomeTec");
const inpContactoTec = document.getElementById("inpContactoTec");
const txtDescricao = document.getElementById("txtDescricao");
const inpCopiar = document.getElementById("inpCopiar");
const select = document.getElementById("select");

// SOS Telegram elements
const modeTitle = document.getElementById("modeTitle");
const inpDataInicio = document.getElementById("inpDataInicio");
const inpNumeroTicket = document.getElementById("inpNumeroTicket");
const inpinpTroçoCorte = document.getElementById("inpTroçoCorte");
const inpIncidente = document.getElementById("inpIncidente");
const inpCausa = document.getElementById("inpCausa");
const inpSpoc = document.getElementById("inpSpoc");
const inpField = document.getElementById("inpField");
const inpAfetação = document.getElementById("inpAfetação");
const inpPrevisão = document.getElementById("inpPrevisão");
const equipaFibras = document.getElementById("equipaFibras");
const inpFecho = document.getElementById("inpFecho");

// radio elements
const abertura = document.getElementById("abertura");
const update = document.getElementById("update");
const fecho = document.getElementById("fecho");

// variables
let nomeTec;
let contactoTec;

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

function UpdateFrase() {
	nomeTec = inpNomeTec.value;
	contactoTec = inpContactoTec.value;

	if (inpNomeTec.value == "") nomeTec = "*nome*";
	if (inpContactoTec.value == "") contactoTec = "*contacto*";

	txtDescricao.value = `Técnico ${nomeTec} (${contactoTec}) contactou e informa que `;
}

// set inpCopiar value to "Copiado" for 0.5s
function Copiado() {
	inpCopiar.value = " Copiado ";
	inpCopiar.className =
		"bg-green-700 rounded text-white font-bold w-min my-2";

	setTimeout(() => {
		inpCopiar.value = " Copiar ";
		inpCopiar.className =
			"bg-orange-500 rounded text-white font-bold w-min my-2";
	}, 500);
}

// inpCopiar event listener
inpCopiar.addEventListener("click", () => {
	// copy txtDescricao to clipboard
	navigator.clipboard.writeText(txtDescricao.value);

	Copiado();
});

// copy select option text to clipboard on select changed
select.addEventListener("focus", () => {
	navigator.clipboard.writeText(select.value);
	Copiado();
});

select.addEventListener("change", () => {
	navigator.clipboard.writeText(select.value);
	Copiado();
});

inpNomeTec.addEventListener("input", UpdateFrase);
inpContactoTec.addEventListener("input", UpdateFrase);

// radio event listeners
abertura.addEventListener("click", TelegramMessageMode);
update.addEventListener("click", TelegramMessageMode);
fecho.addEventListener("click", TelegramMessageMode);
