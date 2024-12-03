let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    
    if(amigo.value == ''){
    alert('Coloque o nome do amigo!')
    return;
}

if (amigos.includes(amigo.va)){
    alert('Nome repetido!')
    return;

}

    let lista = document.getElementById('lista-amigos');
amigos.push(amigo.value)
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    amigo.value = '';
}

function sortear(){
if(amigos.length < 4){
    alert('Adicione 4 amigos para o sorteio!')
    return;

}
    embaralha(amigos);
let sorteio = document.getElementById('lista-sorteio')
    for (let i = 0; i < amigos.length; i++){
    
        if(i == amigos.length - 1){
        }else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '-->' + amigos[i + 1] + '<br>'
        }
    }
}



function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


// ... (seu código existente)

function reiniciar() {
    amigos = [];
    document.getElementById ('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
  }

  