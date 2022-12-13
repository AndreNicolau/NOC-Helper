// DOCUMENT ELEMENTS
const inpNomeTec = document.getElementById("inpNomeTecnico");
inpNomeTec.addEventListener("input", UpdateFrase);

const inpContactoTec = document.getElementById("inpContactoTecnico");
inpContactoTec.addEventListener("input", UpdateFrase);

const btnCopiar = document.getElementById("btnCopiar");
btnCopiar.addEventListener("click", () => {
	// copy txtDescricao to clipboard
	navigator.clipboard.writeText(txtDescricao.value);
	
	Copiado();
});

const select = document.getElementById("select");
select.addEventListener("focus", () => {
	navigator.clipboard.writeText(select.value);
	SelectCopied();
});

select.addEventListener("change", () => {
	navigator.clipboard.writeText(select.value);
	SelectCopied();
});


const txtDescricao = document.getElementById("txtDescrição");

// VARIABLES
let nomeTec;
let contactoTec;

// FUNCTIONS
function UpdateFrase() {
	nomeTec = inpNomeTec.value;
	contactoTec = inpContactoTec.value;

	if (inpNomeTec.value == "") nomeTec = "*nome*";
	if (inpContactoTec.value == "") contactoTec = "*contacto*";

	txtDescricao.value = `Técnico ${nomeTec.trim()} (${contactoTec.trim()}) contacta e informa que `;
}

function Copiado() {
	btnCopiar.value = " Copiado ";
	btnCopiar.className = "btn fw-bold btn-success w-75 align-self-center";

	setTimeout(() => {
		btnCopiar.value = " Copiar ";
		btnCopiar.className = "btn fw-bold btn-primary w-75 align-self-center";
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





// get elements by class name "dropdown-item"
const dropdownItems = document.getElementsByClassName("dropdown-item");
// add event listener for all dropdownItems
for (let i = 0; i < dropdownItems.length; i++) {
	dropdownItems[i].addEventListener("click", () => {
		// get the value of the dropdown item
		let value = dropdownItems[i].innerHTML;
		// copy the value to clipboard
		navigator.clipboard.writeText(value.trim());
	});
}