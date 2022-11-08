function tocaSom(idElementoSom){
    document.querySelector(`#${idElementoSom}`).play();
}

const listaDeButoes = document.querySelectorAll('.tecla');

listaDeButoes.forEach(butao => {
    let idNome = butao.classList[1];
    
    butao.onclick = function(){
        tocaSom(`som_${idNome}`);
    }
});
