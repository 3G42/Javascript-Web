var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", () => {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", () => {
    if (xhr.status == 200) {
      document.querySelector("#erro-ajax").classList.add("invisivel");
      var response = xhr.responseText;
      var pacientes = JSON.parse(response);
      pacientes.forEach((paciente) => {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);
      document.querySelector("#erro-ajax").classList.remove("invisivel");
    }
  });
  xhr.send();
});
