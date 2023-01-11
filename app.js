let selectBtn = document.querySelectorAll('.player-select-btn');
let selectedPlayersCount = document.querySelector('.selected-players > ol');
let playerCount = 0;

for (let i = 0; i< selectBtn.length; i++){
    selectBtn[i].addEventListener('click', function () {
        if (playerCount < 5){
            document.querySelector('.selected-players > ol').innerHTML += `<li>${
                (selectBtn[i].parentElement.childNodes[3].innerText)
            }</li>`;
            selectBtn[i].parentElement.children[3].setAttribute('disabled', 'disabled');
            selectBtn[i].parentElement.children[3].classList.add('deactive');

            playerCount += 1;
        }else{
            document.querySelector('.message').innerText = 'You can get only 5 players';
        }
    })
}

let calculateBtn = document.querySelector('.cal-per-player-btn');
let inputPerPlayer = document.querySelector('#per-player');
let totalPlayerPrice = 0

calculateBtn.addEventListener('click', function () {
    console.log(inputPerPlayer.value);
    if(inputPerPlayer.value !== ''){
        if(playerCount === 0){
            document.querySelector('.massege1').innerHTML = 'Please select a player';
        }else{
            document.querySelector('.player-expenses-num').innerHTML = `${(Number(inputPerPlayer.value) * playerCount)}`;
            totalPlayerPrice = (Number(inputPerPlayer.value) * playerCount);
            document.querySelector('.massege1').innerHTML = ' ';
        }
    }else{
        document.querySelector('.massege1').innerHTML = 'Per player feild is empty.';
    }
})

let totalCalculateBtn = document.querySelector('.cal-total-amount-btn')
let totalNum = document.querySelector('.total-num')
let managerFeild = document.querySelector('#manager')
let coachFeild = document.querySelector('#coach')

totalCalculateBtn.addEventListener('click', function (){
    if(managerFeild.value !== '' && coachFeild.value !== ''){
        if(totalPlayerPrice === 0){
            document.querySelector('.masseg2').innerHTML = 'Please set per player first.'
        }else{
            totalNum.innerHTML = (Number(managerFeild.value) + Number(coachFeild.value) + Number(totalPlayerPrice))
            document.querySelector('.masseg2').innerHTML = ' ';
        }
    }else{
        document.querySelector('.masseg2').innerHTML = 'Manager or Coach feild is empty.'
    }
})


