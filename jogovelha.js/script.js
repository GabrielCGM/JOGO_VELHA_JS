let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionar o click 
for(let i = 0; i < boxes.length; i++){

    // clica na caixa
    boxes[i].addEventListener('click', function(){
    
    let el = checkEl(player1, player2);
    

    if(this.childNodes.length == 0){  // verifica se a BOXE escolhida está vazia
        let cloneEl = el.cloneNode(true)

        this.appendChild(cloneEl);
        //computa a jogada
        if(player1 == player2){
            player1++;
        } else {
            player2++
        }

    // Verifica quemn venceu

    
    // Mensagem na Tela
    messgTela(checkWinCondition())
    }
    })

}

function checkEl(player1, player2){
    if(player1 == player2){
        // x
        el = x;
    } else{
        // o
        el = o;
    }
    return el;
}


// Lógica de Vitória

function checkWinCondition(){
    let b1 = document.getElementById('block-1')
    let b2 = document.getElementById('block-2')
    let b3 = document.getElementById('block-3')
    let b4 = document.getElementById('block-4')
    let b5 = document.getElementById('block-5')
    let b6 = document.getElementById('block-6')
    let b7 = document.getElementById('block-7')
    let b8 = document.getElementById('block-8')
    let b9 = document.getElementById('block-9')

    // horizontal 1° LINHA
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0) {
        
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
            // x 
            return 'jogador1'
        } else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
            // o
            return 'jogador2'
        }

    }

    // Horizontal 2° LINHA
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
    
        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
            // x
            return 'jogador1'
        } else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o
            return 'jogador2'
        } 
        
    }

    // HORIZONTAL 3° LINHA

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
            // WIN X
            return 'jogador1'
        } else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            // WIN O
            return 'jogador2'
        }


    }

    // VERTICAL 1°  COLUNA
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className; 
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
            // WIN X 
            return 'jogador1'
        } else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            // WIN O
            return 'jogador2'
        }
    }

    // VERTICAL 2° COLUNA
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2Child = b2.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
            // WIN X
            return 'jogador1'
        } else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            // WIN O
            return 'jogador2'
        }
    }

    // VERTICAL 3° COLUNA
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
        
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
            // WIN X
            return 'jogador1'
        } else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            // WIN O
            return 'jogador2'
        }
    }

    // DIAGONAL PRINCIPAL
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;
        
        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
            // WIN X
            return 'jogador1'
        } else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            // WIN O
            return 'jogador2'
        }
    }

    // DIAGONAL SECUNDÁRIA
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;
        
        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
            // WIN X
            return 'jogador1'
        } else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            // WIN O
            return 'jogador2'
        }
    }

    // DEU VELHA
    let counter = 0.

    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter ++;
        }
    }

    if(counter == 9){
        return 'velha'
    }
} 

function messgTela(resultado){
    let resul = resultado
    // MENSAGEM WIN JOGADOR 1
    if(resultado == 'jogador1'){
        let mensagem = document.getElementById('texto')
        let texto = document.createTextNode('JOGADOR 1 VENCEU')
        mensagem.appendChild(texto)
        mensagem.style.display = 'inline-flex'
        
        // limpa a tela
        setTimeout(() =>{
            let mensagem = document.getElementById('texto')
            mensagem.style.display = 'none'


            let textoLimpo = document.createTextNode('')
            mensagem.replaceChild(textoLimpo, texto);
            
            let boxesToRemove = document.querySelectorAll('.box div');
            for(let i = 0; i < boxesToRemove.length; i++){
                boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
            }
        }, 2000)
        player1 = 0
        player2 = 0
        somarPont(resul)
        
       
    }
    
    // MENSAGEM WIN JOGADOR 2
    else if(resultado == 'jogador2'){
        let mensagem = document.getElementById('texto')
        let texto = document.createTextNode('JOGADOR 2 VENCEU')
        mensagem.appendChild(texto)
        mensagem.style.display = 'inline-flex'

        // limpa a tela
        setTimeout(() =>{
            let mensagem = document.getElementById('texto')
            mensagem.style.display = 'none'
            
            let textoLimpo = document.createTextNode('')
            mensagem.replaceChild(textoLimpo, texto);
            
            let boxesToRemove = document.querySelectorAll('.box div');
            for(let i = 0; i < boxesToRemove.length; i++){
                boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
            
            player1 = 0
            player2 = 0
            }
        }, 2000)
        somarPont(resul)
    }
    // MENSAGEM VELHA
    else if(resultado == 'velha'){
        let mensagem = document.getElementById('texto')
        let texto = document.createTextNode('    DEU VELHA')
        mensagem.appendChild(texto)
        mensagem.style.display = 'inline-flex'

        // limpa a tela
        setTimeout(() =>{
            let mensagem = document.getElementById('texto')
            mensagem.style.display = 'none'
            
            let textoLimpo = document.createTextNode('')
            mensagem.replaceChild(textoLimpo, texto);
            
            let boxesToRemove = document.querySelectorAll('.box div');
            for(let i = 0; i < boxesToRemove.length; i++){
                boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
            
            player1 = 0
            player2 = 0
            }
        }, 2000)
    }
}

function somarPont(resultado){
    if(resultado == 'jogador1'){
        let scoreborderX = document.getElementById("scoreboard-1")
        scoreborderX.textContent = parseInt(scoreborderX.textContent) + 1;
    } else if(resultado == 'jogador2'){
        let scoreboardY = document.getElementById('scoreboard-2')
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
    }
}



