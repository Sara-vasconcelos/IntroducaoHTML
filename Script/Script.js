/*JavaScript - Tipagem fraca e dinamica 
Reconhece a variavel por inferência de dados
Case Sensitive ou seja diferencia letras maiusculas e minusculas (a != A)
*/

/*Criação de variavel : 

Let (pode ser alterado)- Const (não pode alterar) - Var ( pode ou não ter valor alterado)
*/

/*
constante precisa ter um valor declarado no começo exemplo : const nome = "sara"; - Não posso criar assim : const nome;
*/


//DOM - Document é tudo que tem na página




/*window.document.getElementsByName(label) //está pegando os elementos da página , que no caso a Label , se tivesse uma só , pegaria somente ela , se tivesse mais ele pegava todos

--- formas de seleção---

por tag : getElementByTagName()
por id : getElementById()
por nome : getElementByName()
por classe : getElementByClassName()
por seletor : querySelector()

--- algumas formas de utilizar---

window.document.getElementById(nome)   -- com window

document.getElementsByClassName(); --sem window

const nome = window.document.getElementById('nome') ;//nesse caso o id é uma String então tenho que colocar entre aspas
*/




//forma mais utilizada  -- querySelector(acessa internamente o elemento)



//document.querySelector(".nome");//busca a classe
//document.querySelectorAll(".nome");//busca todos os elementos , e no caso eu peguei a classe


let nome = document.querySelector("#nome");// busca o id com o nome nome

let email = document.querySelector("#email");//busca o id com nome email

let assunto = document.querySelector("#assunto")


let nomeOk = false;
let emailOk = false;
let assuntoOk = false;

let mapa = document.querySelector("#mapa");

//funções

//validar se o campo nome no form tem pelo menos 3 caracteres
function validaNome(){
console.log(nome.value.length) ;//mostra o tamanho do que está escrito dentro de nome

let txtNome = document.querySelector("#txtNome"); //está buscando a div que tem o id txtNome

if(nome.value.length <= 2){
    
    nome.style.borderColor ='red' ; 
    txtNome.innerHTML = "Nome é inválido";
    txtNome.style.color = "red";
    txtNome.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
    txtNome.style.width = "40%"
    txtNome.style.borderRadius = "5px"
    txtNome.style.padding = "5px"

}else{
    nomeOk =true;
    txtNome.innerHTML = "Nome válido";
    nome.style.borderColor ='green';
    txtNome.style.width = "35%"
    
    txtNome.style.color = "green";
    
}
};

function validaEmail(){

    let txtEmail = document.querySelector("#txtEmail");
//indexOf : Retorna 1 : se existe , retorna -1 : se não existe
//no caso abaixo : se não existir(-1) o @ , faça o que estiver dentro do if
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){//está validando se dentro do campo email , tem um @. 
        email.style.borderColor ='red';
        txtEmail.innerHTML = "Email inválido";
        txtEmail.style.color = "red";
        txtEmail.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
        txtEmail.style.width = "40%"
        txtEmail.style.borderRadius = "5px"
        txtEmail.style.padding = "5px"

    } else{
        email.style.borderColor ='green';
        emailOk = true;
        txtEmail.innerHTML = "Email válido";
        txtEmail.style.color = "green";
        txtEmail.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
        txtEmail.style.width = "30%"
        txtEmail.style.borderRadius = "5px"
        txtEmail.style.padding = "5px"
    }
}


//outra forma melhor de validar um email com regex


function validaEmail2() {
    // criação do padrão de email, vai aceitar caracteres + @ + caracteres + . + 2 ou 3 caracteres pra finalizar
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
  
    // o if será feito de uma forma diferente, verificando se o que a pessoa digitou condiz com o padrão do e-mail (match)
    // caso de certo, e-mail válido, senão, e-mail inválido
    if(email.value.match(regex)) {
    emailOk = true
      txtEmail.innerHTML = 'E-mail válido'
      email.style.borderColor ='green';
      txtEmail.style.color = 'green'
      
      txtEmail.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
      txtEmail.style.width = "30%"
      txtEmail.style.borderRadius = "5px"
      txtEmail.style.padding = "5px"
    } else {
        emailOk = false
      txtEmail.innerHTML = 'E-mail inválido'
      email.style.borderColor ='red';
      txtEmail.style.color = 'red'
      txtEmail.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
      txtEmail.style.width = "40%"
      txtEmail.style.borderRadius = "5px"
      txtEmail.style.padding = "5px"
    }
  }



function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto");

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML= "Digite no máximo 100 caracteres"
        txtAssunto.style.color = "red";
        txtAssunto.style.backgroundColor = "rgba(255, 255, 255, 0.7)"
        txtAssunto.style.width = "100%"
        txtAssunto.style.borderRadius = "5px"
        txtEmail.style.padding = "10px"
        txtAssunto.style.textAlign = "center"
        assunto.style.borderColor ='red' ;
        txtAssunto.style.display = 'block';
        assuntoOk = false;

      
    }else{
        assuntoOk = true;
        assunto.style.borderColor ='green' ;
        txtAssunto.style.color = "black";
        txtAssunto.innerHTML = assunto.value.length +"/100"
       

       

    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true){
alert("Sua mensagem foi enviada ! Em breve entraremos em contato!")
    }else{
        alert("Preencha os campos corretamente antes de enviar")
    }
}

//função que vai dar um zoom no mapa quando o mouse passar por cima 
function mapaZoom(){
 mapa.style.aspectRatio = '16/11'

}



function mapaNormal(){
   mapa.style.aspectRatio = '16/9'
}