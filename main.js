

function gioco_dadi(){
    let n_tiri = prompt('Quanti tiri vuoi effettuare?');
    let player_1 = 0;
    let player_2 = 0;
    
    for (let i = 1; i <= n_tiri; i++ ) {
        
        let dado_1 = Math.floor(Math.random() * (6 - 1) + 1);
        let dado_2 = Math.floor(Math.random() * (6 - 1) + 1);
        
        player_1 = player_1 + dado_1;
        player_2 = player_2 + dado_2; 
    }
    
    if (player_1 > player_2) {
        console.log(`the winner is player 1 with a score of ${player_1}`);
        
    } else if (player_1 < player_2){
        console.log(`the winner is player 2 with a score of ${player_2}`);
        
    } else {
        console.log(`the match is a draw`);
        
    }
    
}

gioco_dadi();


