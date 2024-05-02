'use strict';

/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Detectando quando o botão de buscar CEP é acionado */
botaoBuscar.addEventListener("click", function(event){
    /* Anular o comportamento padrão de
    redirecionamento/recarregamento da página. Sempre
    acontece ao trabalhar com <a> e <form>. */
    event.preventDefault();

    /* Verificando se o cep NÃO TEM 8 dígitos */
    if( campoCep.value.length !== 8 ){
        /* Informar o usuário sobre o erro: */
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";
        
        /* Parar completamente a execução */
        return;
    } 

    /* Guardando o valor do cep digitado/informado */
    let cepInformado = campoCep.value;
    
    /* AJAX - Asyncronous JavaScript And XML
    (JavaScript assíncrono e XML)
    
    Técnica de comunicação (transmissão, recebimento) de dados
    que permite o processamento em conjunto com APIs 
    (ou Web Services) */

    // Etapa 1: preparar a URL da API com o CEP informado

    // Etapa 2: acessar a API (com a URL) e aguardar o retorno dela

    // Etapa 3: extrair os dados da resposta da API em formato JSON

    // Etapa 4: lidar com os dados (em caso de erro e de sucesso)

});
