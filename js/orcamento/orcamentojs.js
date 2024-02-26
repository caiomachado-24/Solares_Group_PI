
let kits = document.getElementById("kits");
let consumo = document.getElementById("consumo");
let calcular = document.getElementById("calcular");

let nome = document.getElementById("nome");
let sobrenome = document.getElementById("sobrenome");
let telefone = document.getElementById("telefone");
let email = document.getElementById("email");

let cadastro = document.getElementById("cadastro");
let mensagem = document.getElementById("mensagem");



function teste() {
    if(consumo.value.toString().length > 0){
    kits = 11500
    let consumoValue = parseFloat(consumo.value)
    let resultado = Math.ceil(consumoValue / 250)

    let result = document.getElementById("resultado");
    let resultV = document.getElementById("resultadoV");
    result.value = resultado
    resultV.value = (resultado * 11500).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    setInterval(teste, 500);
}


function verificaCampos() {

    let vnm = verificaCampoNome()
    let vsn = verificaCampoSobrenome()
    let vtl = verificaCampoTelefone()
    let vem = verificaCampoEmail()
    let vcm = verificaCampoConsumo()
    
    if(vnm == 0 || vsn == 0 || vtl  == 0
    || vem == 0 || vcm == 0)
    {
        setInterval(verificaCampos, 500);
    }
    
    
    if(nome.value.toString().length == 0 || sobrenome.value.toString().length == 0 || telefone.value.toString().length == 0 || email.value.toString().length == 0 || consumo.value.toString().length == 0)
    {
        mensagem.innerHTML = `Preencha todos os campos*`
    }   
}

function validaFormulario() {
    if(nome.value.toString().length > 0 && sobrenome.value.toString().length > 0 && telefone.value.toString().length > 0 && email.value.toString().length > 0 && consumo.value.toString().length > 0)
    {
        mensagem.innerHTML = ``
        $('#exampleModal').modal('show')
    }
}

function verificaCampoNome(){
    if(nome.value.toString().length == 0)
    {
        nome.classList.add("bg-formulario");
        return 0
        
    }
    else {
        nome.classList.remove("bg-formulario");
        return 1
    }

}

function verificaCampoSobrenome(){
    if(sobrenome.value.toString().length == 0)
    {
        sobrenome.classList.add("bg-formulario");
        return 0
    }
    else {
        sobrenome.classList.remove("bg-formulario");
        return 1
    }
}

function verificaCampoTelefone(){
    if(telefone.value.toString().length == 0)
    {
        telefone.classList.add("bg-formulario");
        return 0
    }
    else {
        telefone.classList.remove("bg-formulario");
        return 1
    }
}

function verificaCampoEmail(){
    if(email.value.toString().length == 0)
    {
        email.classList.add("bg-formulario");
        return 0
    }
    else {
        email.classList.remove("bg-formulario");
        return 1
    }
}

function verificaCampoConsumo(){
    if(consumo.value.toString().length == 0)
    {
        consumo.classList.add("bg-formulario");
        return 0
    }
    else {
        consumo.classList.remove("bg-formulario");
        return 1
    }
}

cadastro.addEventListener('click', verificaCampos)
cadastro.addEventListener('click', validaFormulario)
consumo.addEventListener('click', teste)