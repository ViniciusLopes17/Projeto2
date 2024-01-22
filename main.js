const form = document.getElementById('form-atividade')
const imgAprovado = `<img src="./Imagens/images/aprovado.png" alt="Emoji Celebrando"/>`;
const imgReprovado = `<img src="./Imagens/images/reprovado.png" alt="Emoji Decepcionado"/>`;
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
// const notaMinima = parseFloat(prompt("Digite a nota mínima: "))


let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();

})

function adicionaLinha(){
    const inputName = document.getElementById('name');
    const inputNumber = document.getElementById('number');
    const inputEmail = document.getElementById('email');

    if (atividades.includes(inputName.value)){
        alert(`A Atividade: ${inputNumber.value} já foi inserida!`)
    }else{

    atividades.push(inputName.value);
    notas.push(parseFloat(inputNumber.value));

    let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputNumber.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    // linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`

    linhas += linha;
    }

    inputName.value = "";
    inputNumber.value = "";
    inputEmail.value = "";
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

    console.log(mediaFinal);
}

function calculaMediaFinal(){
    let somaNotas = 0;

    for(let i = 0; i < notas.length; i++){
        somaNotas += notas[i];
    }

    return somaNotas / notas.length;
}