
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  paciente = obtemPacienteDoFormulario(form);

  pacienteTr = montaTr(paciente);
  var erros = validaPaciente(paciente);
  var mensagemErro = document.querySelector("#mensagem-erro");
  if (erros.length > 0) {
    mensagemErro.style.display = "block";
    mensagemErro.textContent = erro;
    return;
  }
  mensagemErro.style.display = "none";
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
});

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    altura: form.altura.value,
    peso: form.peso.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  console.log(paciente.imc);
  return paciente;
}

function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
  return pacienteTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}

function validaPaciente(paciente) {
  var erros = [];
  if (!validaPeso(paciente.peso)) erros.push("Peso é Inválido");
  if (!validaAltura(paciente.altura)) erros.push("Altura inválida");

  return erros;
}