// get elements by name "SOSinput"
const sosInputs = document.getElementsByName("SOSinput");

// radio elements
const abertura = document.getElementById("rdoAbertura");
const update = document.getElementById("rdoUpdate");
const fecho = document.getElementById("rdoFecho");

// SOS Telegram elements
const tituloModoDeEnvio = document.getElementById("tituloModoDeEnvio");
const btnCopiarSOS = document.getElementById("sosTelegram_btnCopiar");
const dataAbertura = document.getElementById("inpDataAbertura");
const numeroTicket = document.getElementById("inpNumeroTicket");
const nomeTroço = document.getElementById("inpTroço");
const nomeIncidente = document.getElementById("inpIncidente");
const nomeCausa = document.getElementById("inpCausa");
const nomeSpoc = document.getElementById("inpSpoc");
const nomeField = document.getElementById("inpField");
const nomeAfetação = document.getElementById("inpAfetação");
const nomePrevisão = document.getElementById("inpPrevisão");
const equipaFibras = document.getElementById("inpEquipaFibras");
const dataFecho = document.getElementById("inpDataFecho");
const txtMensagemSOS = document.getElementById("txtMensagemSOS");

// get elements by className "ABERTURA"
const aberturaElements = document.getElementsByClassName("ABERTURA");
// get elements by className "UPDATE"
const updateElements = document.getElementsByClassName("UPDATE");
// get elements by className "FECHO"
const fechoElements = document.getElementsByClassName("FECHO");

// variables
let modoDaMensagem = "Abertura";

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

function TipoDeMensagem() {
	if (abertura.checked) {
		modoDaMensagem = "Abertura";
		tituloModoDeEnvio.innerHTML = "** Abertura **";

		for (var i = 0; i < aberturaElements.length; i++)
			aberturaElements[i].style.display = "block";

		for (var i = 0; i < updateElements.length; i++)
			updateElements[i].style.display = "none";

		for (var i = 0; i < fechoElements.length; i++)
			fechoElements[i].style.display = "none";
	}

	if (update.checked) {
		modoDaMensagem = "Update";
		tituloModoDeEnvio.innerHTML = "** Update **";

		for (var i = 0; i < aberturaElements.length; i++)
			aberturaElements[i].style.display = "none";

		for (var i = 0; i < updateElements.length; i++)
			updateElements[i].style.display = "block";

		for (var i = 0; i < fechoElements.length; i++)
			fechoElements[i].style.display = "none";
	}

	if (fecho.checked) {
		modoDaMensagem = "Fecho";
		tituloModoDeEnvio.innerHTML = "** Fecho **";

		for (var i = 0; i < aberturaElements.length; i++)
			aberturaElements[i].style.display = "none";

		for (var i = 0; i < updateElements.length; i++)
			updateElements[i].style.display = "none";

		for (var i = 0; i < fechoElements.length; i++)
			fechoElements[i].style.display = "block";
	}
}

function AtualizarMensagem() {
	let mensagem;

	if (modoDaMensagem == "Abertura") {
		mensagem =
			"** Abertura **\n" +
			"\nData de abertura: " +
			dataAbertura.value.replaceAll("T", " ") +
			"\nTicket: " +
			numeroTicket.value +
			"\nTroço: " +
			nomeTroço.value +
			"\nIncidente: " +
			nomeIncidente.value +
			"\nCausa: " +
			nomeCausa.value +
			"\nSPOC: " +
			nomeSpoc.value +
			"\nField: " +
			nomeField.value +
			"\nAfetação: " +
			nomeAfetação.value;
	} else if (modoDaMensagem == "Update") {
		mensagem =
			"** Update **\n" +
			"\nData de abertura: " +
			dataAbertura.value.replaceAll("T", " ") +
			"\nTicket: " +
			numeroTicket.value +
			"\nTroço: " +
			nomeTroço.value +
			"\nIncidente: " +
			nomeIncidente.value +
			"\nCausa: " +
			nomeCausa.value +
			"\nPrevisão de resolução: " +
			nomePrevisão.value +
			"\nEquipa de fibras: " +
			equipaFibras.value;
	} else if ((modoDaMensagem = "Fecho")) {
		mensagem =
			"** Fecho **\n" +
			"\nData de abertura: " +
			dataAbertura.value.replaceAll("T", " ") +
			"\nTicket: " +
			numeroTicket.value +
			"\nTroço: " +
			nomeTroço.value +
			"\nIncidente: " +
			nomeIncidente.value +
			"\nCausa: " +
			nomeCausa.value +
			"\nData de fecho: " +
			dataFecho.value.replaceAll("T", " ");
	}

	txtMensagemSOS.value = mensagem;
}

function CopiarMensagem() {
	navigator.clipboard.writeText(txtMensagemSOS.value);
	Copiado();
}

function Copiado() {
	btnCopiarSOS.value = "Copiado";
	btnCopiarSOS.className = "btn btn-success w-50";

	setTimeout(() => {
		btnCopiarSOS.value = "Copiar";
		btnCopiarSOS.className = "btn btn-primary w-50";
	}, 500 )
}

// radio event listeners
abertura.addEventListener("click", TipoDeMensagem);
update.addEventListener("click", TipoDeMensagem);
fecho.addEventListener("click", TipoDeMensagem);

// button event listener
btnCopiarSOS.addEventListener("click", CopiarMensagem);

// sosInputs event listener
for (var i = 0; i < sosInputs.length; i++) {
	sosInputs[i].addEventListener("input", AtualizarMensagem);
}
