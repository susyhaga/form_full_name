/////////////////escopo global///////////////////////////////
const form = document.getElementById('form-deposito');
const beneficiarioNome = document.getElementById('nome-beneficiario');
let formEvalido=false;

//funcao para fazer com q o user digite o nome completo//
function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

//Esse codigo sera disparado sempre que o evento SUBMIT estiver acontecendo//
form.addEventListener('submit', function(e){
e.preventDefault();

//Recuperando informacoes do form//
const numeroContaBeneficiario = document.getElementById('numero-conta');
const valorDeposito = document.getElementById('valor-deposito');
const mensagemSucesso= `O montante de: <b>${valorDeposito.value}</b>, depositado para o cliente <b>${beneficiarioNome.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

//a variavel formEvalido se torna verdadeiro se o validaNome for verdadeiro//
formEvalido = validaNome(beneficiarioNome.value);

//condicao para validar o nome// 
    if(formEvalido){ //mensagem de sucesso//

//usando innerHTML para mostrar a mensagem de sucesso e ESTILIZAR A MENSAGEM com style//
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    document.querySelector('.sucess-message').innerHTML= mensagemSucesso;
    containerMensagemSucesso.style.display= 'block';

//limpando os campos depois que o form for preenchido corretamente pelo user//
    beneficiarioNome.value = '';
    numeroContaBeneficiario.value = '';
    valorDeposito.value = '';
    document.querySelector('.error-message').style.display = 'none';
    beneficiarioNome.style.border = '1px solid black';
    
    }else{ //mensagem de erro//
//borda//
    beneficiarioNome.style.border = '1px solid red';
//estilo da mensagem de erro//
    document.querySelector('.error-message').style.display = 'block';
    document.querySelector('.sucess-message').style.display = 'none';
    }
})
//para tirar a mensagem e a borda de erro quando a mensagem estiver correta
beneficiarioNome.addEventListener('keyup', function(e) { 
    console.log(e.target.value);
    formEvalido = validaNome(e.target.value);

    if(!formEvalido){ //se NAO for valido// usando classe
       //tirei para add a classe// beneficiarioNome.style.border = '1px solid red';
        beneficiarioNome.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.sucess-message').style.display = 'none';

        
        
    }else{ //SE FOR VALIDO a borda  e a mensagem somem// usando classe
        //tirei para add a classe// beneficiarioNome.style.border ='';
        beneficiarioNome.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
        }
        
});
