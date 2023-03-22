let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
function addHomeTeam(num){    
    homeScore.textContent = parseInt(homeScore.textContent) + num;
    checkLead();
}

function addGuestTeam(num){
    guestScore.textContent = parseInt(guestScore.textContent) + num;
    checkLead();
}

function checkLead(){
    hScore = parseInt(homeScore.textContent)
    gScore = parseInt(guestScore.textContent)
    if(hScore > gScore){
        homeScore.style.color = '#8AFFC1';
        guestScore.style.color = '#F94F6D';
    }else if(hScore == gScore){
        homeScore.style.color = '#F94F6D';
        guestScore.style.color = '#F94F6D';
    }else{
        homeScore.style.color = '#F94F6D';
        guestScore.style.color = '#8AFFC1';   
    }
}

function reset(){
    homeScore.textContent = 0;
    guestScore.textContent = 0; 
    homeScore.style.color = '#F94F6D';
    guestScore.style.color = '#F94F6D';
}