let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");


for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector(".info-imc");
    
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);
    
    
    if(!pesoEhValido){
        tdImc.textContent = "Peso inválido"
    }

    if(!alturaEhValida){
        tdImc.textContent = "Altura inválida";
    }
    
    if(alturaEhValida && pesoEhValido){
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
    else{
        paciente.classList.add("paciente-invalido");
    }
}

function validaPeso(peso){
    if(peso>=0 && peso<1000){
        return true;
    }
    else{
        return false
    }
}
function validaAltura(altura){
    if (altura>= 0 && altura<=3.00){
        return true;
    }
    else{
        return false;
    }
}
function calculaImc(peso,altura){
    var imc = 0;
    imc = (peso/(altura*altura)).toFixed(2);

    return imc;
}
