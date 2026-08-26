const numeroSenha = document.querySelector('.parametro-senha__textos');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinuculas ='abcefghijklmnopqrstuvwxyz';
const numeros ='0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelector('.forca');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if(tamanhoSenha > 1){
        //tamanhoSenha = tamanhoSenha-1;
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho(){
    if (tamanhoSenha < 20);{
        //tamanhoSenha - tamanhoSenha+1;
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha+1;
    geraSenha();
}

for (i = 0; i < checkbox.length; i++){
    checkbox[i].onclick = geraSenha;
}

geraSenha();