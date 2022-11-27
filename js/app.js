// get elements
const inpNomeTec = document.getElementById("inpNomeTecnico");
const inpContactoTec = document.getElementById("inpContactoTecnico");
const txtDescricao = document.getElementById("txtDescrição");
const btnCopiar = document.getElementById("btnCopiar");
const select = document.getElementById("select");

// variables
let nomeTec;
let contactoTec;

function UpdateFrase() {
	nomeTec = inpNomeTec.value;
	contactoTec = inpContactoTec.value;

	if (inpNomeTec.value == "") nomeTec = "*nome*";
	if (inpContactoTec.value == "") contactoTec = "*contacto*";

	txtDescricao.value = `Técnico ${nomeTec} (${contactoTec}) contacta e informa que `;
}

// set inpCopiar value to "Copiado" for 0.5s
function Copiado() {
	btnCopiar.value = " Copiado ";
	btnCopiar.className = "btn fw-bold btn-success w-75 align-self-center";

	setTimeout(() => {
		btnCopiar.value = " Copiar ";
		btnCopiar.className = "btn fw-bold btn-primary w-75 align-self-center";
	}, 500);
}

function SelectCopied() {
	select.className = "form-select text-white bg-success my-3 w-75 align-self-center";

	setTimeout(() => {
		select.className = "form-select text-white bg-primary my-3 w-75 align-self-center";
	}, 500);
}

// inpCopiar event listener
btnCopiar.addEventListener("click", () => {
	// copy txtDescricao to clipboard
	navigator.clipboard.writeText(txtDescricao.value);

	Copiado();
});

// copy select option text to clipboard on select changed
select.addEventListener("focus", () => {
	navigator.clipboard.writeText(select.value);
	SelectCopied();
});

select.addEventListener("change", () => {
	navigator.clipboard.writeText(select.value);
	SelectCopied();
});

inpNomeTec.addEventListener("input", UpdateFrase);
inpContactoTec.addEventListener("input", UpdateFrase);
