const img = document.getElementById('img'); //chama o elemento img
const buttons = document.getElementById('buttons'); //chama o elemento pai, a div que contem os botoes
const range = document.getElementById('range');//chama o elemento input range
var colorIndex = 0; //variavel para usar como index na array das cores, começa como 0 pois realizará calculos
var intervalId = null; //pega o id que retorna da função setInterval e coloca na variavel, começa como null
var intervalValue = 1000; //valor default

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
    turnOn[color]();//passa como argumento a cor que está na index no momento
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
    'automatic': () => intervalId = setInterval(changeColor, intervalValue) //(ação que irá execurar, tempo de repetição)
}

//função para alterar a velocidade da opção automatica
function speedAutomatic() {
    let velocidade = document.getElementById("velocidade");//variavel para mostrar a velocidade do range
    let rangeValor = parseInt(range.value);//pega o valor do range em inteiro
    switch (rangeValor) {//de acordo com o valor do range faz ações
        case    1:
            intervalValue = 1000;//ação de mudar o valor do intervalo
            stopAutomatic();//ação de parar o atual setInterval
            break;
        case    2:
            intervalValue = 800;
            stopAutomatic();
            break;
        case    3:
            intervalValue = 500;
            stopAutomatic();
            break;
        case    4:
            intervalValue = 300;
            stopAutomatic();
            break;
        case    5:
            intervalValue = 200;
            stopAutomatic();
            break;  
    }//fim switch 
    velocidade.innerHTML = rangeValor;//joga o valor da velocidade para o html
    intervalId = setInterval(changeColor, intervalValue);//pega o novo Id e chama um novo automatico
}

//adiciona um evento para o click dentro da div pai para todos os botoes
buttons.addEventListener('click', trafficLight);
//sempre que ouver um novo input chama a função
range.addEventListener('input', speedAutomatic);