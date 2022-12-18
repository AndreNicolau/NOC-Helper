// DOCUMENT ELEMENTS
const inpTechnicianName = document.getElementById("inpNomeTecnico");
const inpTechnicianContact = document.getElementById("inpContactoTecnico");
const btnCopy = document.getElementById("btnCopiar");
//const select = document.getElementById("select");
const txtDescription = document.getElementById("txtDescrição");
const inpZENER = document.getElementById("inpZENER");
const inpCME = document.getElementById("inpCME");
const spocSuccess = document.getElementById("spocSuccess");
const spocUnsuccessful = document.getElementById("spocUnsuccessful");

// ELEMENTS BY CLASS NAME
const dropdownItems = document.getElementsByClassName("dropdown-item");

// EVENT LISTENERS
inpTechnicianName.addEventListener("input", UpdateFrase);
inpTechnicianContact.addEventListener("input", UpdateFrase);
btnCopy.addEventListener("click", () => {
	// copy txtDescription to clipboard
	navigator.clipboard.writeText(txtDescription.value);

	Copied();
});

inpZENER.addEventListener("change", SetSpoc);
inpCME.addEventListener("change", SetSpoc);

// DROPDOWN ITEMS EVENT LISTENERS
for (let i = 0; i < dropdownItems.length; i++) {
	dropdownItems[i].addEventListener("click", () => {
		// get the value of the dropdown item
		let value = dropdownItems[i].innerHTML;
		// copy the value to clipboard
		navigator.clipboard.writeText(value.trim());
	});
}

// VARIABLES
let technicianName;
let technicianContact;

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
	btnCopy.className = "btn fw-bold btn-success w-75 align-self-center";

	setTimeout(() => {
		btnCopy.value = " Copiar ";
		btnCopy.className = "btn fw-bold btn-primary w-75 align-self-center";
	}, 500);
}

function SelectCopied() {
	select.className =
		"form-select text-white bg-success my-3 w-75 align-self-center";

	setTimeout(() => {
		select.className =
			"form-select text-white bg-primary my-3 w-75 align-self-center";
	}, 500);
}

function SetSpoc() {
	if (inpZENER.checked) {
		spocSuccess.value = "SPOC ZENER contactado e informado.";
		spocSuccess.textContent = spocSuccess.value;
		spocUnsuccessful.value =
			"Tentativa de contacto sem sucesso com SPOC ZENER.";
		spocUnsuccessful.textContent = spocUnsuccessful.value;
	} else if (inpCME.checked) {
		spocSuccess.value = "SPOC CME contactado e informado.";
		spocSuccess.textContent = spocSuccess.value;
		spocUnsuccessful.value =
			"Tentativa de contacto sem sucesso com SPOC CME.";
		spocUnsuccessful.textContent = spocUnsuccessful.value;
	}
}
