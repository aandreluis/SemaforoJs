const img = document.getElementById('img'); //chama o elemento img
const buttons = document.getElementById('buttons'); //chama o elemento pai, a div que contem os botoes
var colorIndex = 0; //variavel para usar como index na array das cores, começa como 0 pois realizará calculos
var intervalId = null; //pega o id que retorna da função setInterval e coloca na variavel, começa como null

//função pega o event (retorno do click nos botoes)
const trafficLight = (event) => {
    stopAutomatic();//sempre que clicar em algum botão reseta a função automatica
    turnOn[event.target.id]();//pega o retorno do event.targe.id o Id do botão ex: 'red', e passa como argumento
}

//função para mudar o index da array que contem as 3 cores para a função automatica
const nextIndex = () => { 
    colorIndex = colorIndex < 2 ? ++colorIndex : 0; //função ternaria
    
    //***Poderia ser usado a função ternaria ou a função if***
    /*if (colorIndex < 2) {
        colorIndex++;
    } else {
        colorIndex = 0;
    }*/
}

//muda a cor para a função aotomatica
const changeColor = () => { 
    let colors = ['red', 'yellow', 'green'] //array com as 3 cores
    let color = colors[colorIndex];//coloca a cor como um dos elementos da array
    turnOn[color]();//passa como argumento as cor que está na index no momento
    nextIndex(); //chama a função para mudar a cor
}

//para a função automatica
const stopAutomatic = () => {
    clearInterval (intervalId);//limpa o intervalo pegando o Id que retorna da função setInterval
}

//objeto que contem 3 funções para mudar as cores quando clicar em um botão
const turnOn = {
    'red': () => img.src = './img/vermelho.png',//muda o caminho da imagem
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000) //(ação que irá execurar, tempo de repetição)
}

//adiciona um evento para o click dentro da div pai para todos os botoes
buttons.addEventListener('click', trafficLight);