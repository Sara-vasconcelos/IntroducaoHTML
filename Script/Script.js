/*JavaScript - Tipagem fraca e dinamica 
//Reconhece a variavel por inferência de dados
//Case Sensitive ou seja diferencia letras maiusculas e minusculas (a != A)


//Criação de variavel : Let (pode ser alterado)- Const (não pode alterar) - Var ( pode ou não ter valor alterado)


constante precisa ter um valor declarado no começo exemplo : const nome = "sara"; - Não posso criar assim : const nome;

DOM - Document é tudo que tem na página




window.document.getElementsByName(label) //está pegando os elementos da página , que no caso a Label , se tivesse uma só , pegaria somente ela , se tivesse mais ele pegava todos

window.document.getElementById(nome)  //Pega o elemento , pelo id dele 

document.getElementsByClassName();//busca classe

const nome = window.document.getElementById('nome') ;//nesse caso o id é uma String então tenho que colocar entre aspas
*/

//forma mais utilizada 

const nome = document.querySelector("#nome");// busca o id

const email = document.querySelector("#email");

document.querySelector(".nome");//busca a classe
document.querySelectorAll(".nome");//busca todos os elementos , e no caso eu peguei a classe

