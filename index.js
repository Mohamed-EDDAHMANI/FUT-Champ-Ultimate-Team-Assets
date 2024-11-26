import {desplayElement} from './display.js'
import { inputValidat } from './validation.js'

const positionSelect = document.getElementById('positionSelect')
const numInputsGK = document.getElementById('numInputsGK')
const formData = document.getElementById('formData')



async function getPlayers() {
    try {
        const response = await fetch('./players.json');
        const data = await response.json();
        localStorage.setItem('players', JSON.stringify(data.players))
        return data;
    } catch (error) {
        console.error('Error fetching players:', error);
    }

}

async function displayCards() {
    const cardsChangementsContainer = document.getElementById('cardsChangementsContainer')
    const data = JSON.parse(localStorage.getItem('players'))
    data.forEach(item => {
        cardsChangementsContainer.innerHTML += desplayElement(item)
    });

    
}

formData.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const nationality = document.getElementById('nationality');
    const club = document.getElementById('club');
    const numInputs = document.getElementById('numInputs')

    const fileInputs = [
        document.getElementById('photo'),
        document.getElementById('flag'),
        document.getElementById('logo')
    ];
    if(inputValidat(name) || inputValidat(nationality) || inputValidat(club) || inputValidat(numInputs) || inputValidat(fileInputs)){
        console.log('gooooood')

    }else{
        console.log('some faulse')
    }
});


document.getElementById('redouBtn').addEventListener('click', () => {
    const container = document.getElementById('cardsChangementsContainer');
    const playersContainer = document.getElementsByClassName('playersContainer')[0];
    container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
    playersContainer.style.width = playersContainer.style.width === '41%' ? '2%' : '41%';
});



positionSelect.addEventListener('change', () => {
    if(positionSelect.value === 'GK'){
        numInputsGK.style.display = 'flex'
        numInputs.style.display = 'none'
    
    }else{
        numInputsGK.style.display = 'none'
        numInputs.style.display = 'flex'

    }
})



document.addEventListener('DOMContentLoaded', () => {
    displayCards()
    getPlayers()
})