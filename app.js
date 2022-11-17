// get elements
const inpNomeTec = document.getElementById("inpNomeTec");
const inpContactoTec = document.getElementById("inpContactoTec");
const txtDescricao = document.getElementById("txtDescricao");
const inpCopiar = document.getElementById("inpCopiar");
const select = document.getElementById("select");

// variables
let nomeTec;
let contactoTec;
let frase;

function UpdateFrase() {
	nomeTec = inpNomeTec.value;
	contactoTec = inpContactoTec.value;

	if (inpNomeTec.value == "") nomeTec = "*nome*";
	if (inpContactoTec.value == "") contactoTec = "*contacto*";

	frase = `Técnico ${nomeTec} (${contactoTec}) contactou e informa que `;
	txtDescricao.value = frase;
}

// inpCopiar event listener
inpCopiar.addEventListener("click", () => {
	UpdateFrase();

	// copy to clipboard
	navigator.clipboard.writeText(frase);
});

// copy select option text to clipboard on select changed
select.addEventListener("focus", () => {
	navigator.clipboard.writeText(select.value);
});

select.addEventListener("change", () => {
	navigator.clipboard.writeText(select.value);
});

inpNomeTec.addEventListener("input", UpdateFrase);
inpContactoTec.addEventListener("input", UpdateFrase);
