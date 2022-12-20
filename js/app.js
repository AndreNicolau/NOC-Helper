// VARIABLES
let technicianName;
let technicianContact;
let spocZener = "Palmela/Lisboa";

// DOCUMENT ELEMENTS
const inpTechnicianName = document.getElementById("inpNomeTecnico");
const inpTechnicianContact = document.getElementById("inpContactoTecnico");
const btnCopy = document.getElementById("btnCopiar");
const txtDescription = document.getElementById("txtDescrição");
const inpCME = document.getElementById("inpCME");
const spocSuccess = document.getElementById("spocSuccess");
const spocUnsuccessful = document.getElementById("spocUnsuccessful");

// ELEMENTS BY CLASS NAME
const ALARMES = document.getElementsByClassName("ALARMES");
const ZONE = document.getElementsByClassName("ZONE");
const SPOC = document.getElementsByClassName("SPOC");

// EVENT LISTENERS
inpTechnicianName.addEventListener("input", UpdateFrase);
inpTechnicianContact.addEventListener("input", UpdateFrase);
btnCopy.addEventListener("click", () => {
	// copy txtDescription to clipboard
	navigator.clipboard.writeText(txtDescription.value);

	Copied();
});
inpCME.addEventListener("change", SetSpoc);

// ALARMES EVENT LISTENERS
for (let i = 0; i < ALARMES.length; i++) {
	ALARMES[i].addEventListener("click", () => {
		// get the value of the dropdown item
		let value = ALARMES[i].innerHTML;
		// copy the value to clipboard
		navigator.clipboard.writeText(value.trim());
	});
}

// ZONE EVENT LISTENERS
for (let i = 0; i < ZONE.length; i++) {
	ZONE[i].addEventListener("click", () => {
		spocZener = ZONE[i].value;
		SetSpoc();
	});
}

// SPOC EVENT LISTENERS
for (let i = 0; i < SPOC.length; i++) {
	SPOC[i].addEventListener("click", () => {
		// get the value of the dropdown item
		let value = SPOC[i].innerHTML;
		// copy the value to clipboard
		navigator.clipboard.writeText(value.trim());
	});
}

// PAGE FULLY LOADED
window.addEventListener("load", (event) => {
	SetSpoc();
	console.log("page is fully loaded");
});

// FUNCTIONS
function UpdateFrase() {
	technicianName = inpTechnicianName.value;
	technicianContact = inpTechnicianContact.value;

	if (inpTechnicianName.value == "") technicianName = "*nome*";
	if (inpTechnicianContact.value == "") technicianContact = "*contacto*";

	txtDescription.value = `Técnico ${technicianName.trim()} (${technicianContact.trim()}) contacta e informa que `;
}

function Copied() {
	btnCopy.value = " Copiado ";
	btnCopy.className = "btn fw-bold btn-success mb-3 w-75 align-self-center";

	setTimeout(() => {
		btnCopy.value = " Copiar ";
		btnCopy.className =
			"btn fw-bold btn-primary mb-3 w-75 align-self-center";
	}, 500);
}

function SetSpoc() {
	if (inpCME.checked) {
		spocSuccess.value = "SPOC CME contactado e informado.";
		spocSuccess.textContent = spocSuccess.value;
		spocUnsuccessful.value =
			"Tentativa de contacto sem sucesso com SPOC CME.";
		spocUnsuccessful.textContent = spocUnsuccessful.value;
	} else {
		spocSuccess.value = `SPOC ZENER ${spocZener} contactado e informado.`;
		spocSuccess.textContent = spocSuccess.value;
		spocUnsuccessful.value = `Tentativa de contacto sem sucesso com SPOC ZENER ${spocZener}.`;
		spocUnsuccessful.textContent = spocUnsuccessful.value;
	}
}
