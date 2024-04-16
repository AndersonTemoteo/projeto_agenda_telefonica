const form = document.getElementById ('form-agenda');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

const maskPhoneNumber = (value) => {
    if (!value) return ''

    return value
    .replace(/[\D]/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(value[5] != 9 ? /(\d{4})(\d)/ : /(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d+?)/, '$1')
}

const applyPhoneNumberMask = (input) => {
    input.value = maskPhoneNumber(input.value)
}

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputTelContato = document.getElementById('telefone-contato');

    console.log(inputTelContato.value.length === 14);
    console.log(parseInt(inputTelContato.value[5]) === 9);

    if (inputTelContato.value.length < 14) {
        alert (`O telefone ${inputTelContato.value} não é válido.`);
    } else if (inputTelContato.value.length === 14 && parseInt(inputTelContato.value[5]) === 9){
        alert (`O telefone ${inputTelContato.value} não é válido.`);
    } else if (contatos.includes(inputNomeContato.value) || telefones.includes(inputTelContato.value)) {
        alert (`O contato ${inputNomeContato.value} ou o telefone ${inputTelContato.value} já existe.`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputTelContato.value);
        
        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelContato.value}</td>`;
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}