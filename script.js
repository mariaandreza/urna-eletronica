// controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3');

// as de controle de ambiente
let etapaAtual = 0;

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';
    for (let i=0; i<etapa.numeros; i++) {
        if(i === 0) {
            numeroHtml += '<div class="numero"></div>';
        }else {
            numeroHtml += '<div class="numero"></div>';

        }

    }

    seuVotoPara.getElementsByClassName.display = 'none';
    cargo.innerHTML = etapa.tituto;
    descricao.innerHTML = '';
    aviso.innerHTML = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}

function atualizaInterface() {
    //alert("Finalizou de digitar o voto!")
    //console.log("Atualizando Interface: ");
    //console.log(numero);
    let etapa = etapas[etapaAtual];
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero === numero){
            return true;
        } else {
            return false;
        }
    });
    if(candidato.length > 0){
        candidato = candidato[0];
        seuVotoPara.getElementsByClassName.display = 'block';
        let aviso = document.querySelector('.d-2');
        descricao.innerHTML = `Nome: ${candidato.nome} <br>Partido: ${candidato.partido}`;
        let fotosHtml = '';
        for(let i in candidato.fotos){
            fotosHtml += `<div class="d-1-image"><img src="image/${candidato.fotos[i].url}" alt="">${candidato.fotos[i].legenda}</div>'}`;
        lateral.innerHTML = fotosHtml;
    }
    //console.log("Candidato", candidato);

}

function clicou(n) {
    //alert("Clicou em "+n);
    let elNumero = document.querySelector('.numero.pisca');
    if (elNumero != null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling != null){
           elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
        
    }
}

function branco() {
    alert("Clicou em BRANCO!");
}

function corrige() {
    alert("Clicou em CORRIGE!");
}

function confirma() {
    alert("Clicou em CONFIRMA!");
}
}
comecarEtapa();