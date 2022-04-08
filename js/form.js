
var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  paciente = obtemPacienteDoFormulario(form);

  pacienteTr = montaTr(paciente);
  var erros = validaPaciente(paciente);
  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);

  form.reset();
  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
  mensagensErro.style.display = "none";
});

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
  erros.forEach((erro) => {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
  ul.style.display = "block";
}

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
  if (paciente.nome.length == 0) erros.push("O nome não pode ser branco");
  if (!validaPeso(paciente.peso) || paciente.peso.length == 0)
    erros.push("Peso é Inválido");
  if (!validaAltura(paciente.altura) || paciente.altura.length == 0)
    erros.push("Altura inválida");
  if (paciente.gordura.length == 0)
    erros.push("Gordura não pode ser em branco");

  return erros;
}