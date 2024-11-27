import { desplayElement } from './display.js'
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

document.getElementById('photo').addEventListener('change', (event) => {
    const photoOutput = document.getElementById('photoOutput');
    photoOutput.src = URL.createObjectURL(event.target.files[0]);
})
document.getElementById('flag').addEventListener('change', (event) => {
    const flagOutput = document.getElementById('flagOutput');
    flagOutput.src = URL.createObjectURL(event.target.files[0]);

})
document.getElementById('logo').addEventListener('change', (event) => {
    const LogoOutput = document.getElementById('LogoOutput');
    LogoOutput.src = URL.createObjectURL(event.target.files[0]);

})


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
    
    if (inputValidat(name)) {
        name.style.border = ' solid red 1px'
        document.getElementsByClassName('error')[0].style.display = 'flex'
        document.getElementsByClassName('errorSpan')[0].textContent = 'Invalid Name'
        setTimeout(() => {
            name.style.border = ' none'
            document.getElementsByClassName('error')[0].style.display = 'none'
        }, 2000);
    } else if (inputValidat(fileInputs)) {
        document.getElementsByClassName('error')[0].style.display = 'flex'
        document.getElementsByClassName('errorSpan')[0].textContent = 'Invalide file'
        setTimeout(() => {
            document.getElementsByClassName('error')[0].style.display = 'none'
        }, 2000);
    } else if (inputValidat(nationality)) {
        nationality.style.border = ' solid red 1px'
        document.getElementsByClassName('error')[0].style.display = 'flex'
        document.getElementsByClassName('errorSpan')[0].textContent = 'Invalide nationality'
        setTimeout(() => {
            nationality.style.border = 'none'
            document.getElementsByClassName('error')[0].style.display = 'none'
        }, 2000);
    } else if (inputValidat(club)) {
        club.style.border = ' solid red 1px'
        document.getElementsByClassName('error')[0].style.display = 'flex'
        document.getElementsByClassName('errorSpan')[0].textContent = 'Invalide club'
        setTimeout(() => {
            club.style.border = 'none'
            document.getElementsByClassName('error')[0].style.display = 'none'
        }, 2000);
    }

    if (inputValidat(name) || inputValidat(nationality) || inputValidat(club) || inputValidat(numInputs) || inputValidat(fileInputs)) {
        console.error('invalide Values')

    } else {
        const players = JSON.parse(localStorage.getItem('players'))
        if (positionSelect.value === 'GK') {
            const data = {
                name: name.value,
                photo: document.getElementById('photo').files[0],
                position: "GK",
                nationality: nationality.value,
                flag: document.getElementById('flag').files[0],
                club: club.value,
                logo: document.getElementById('logo').files[0],
                rating: document.querySelector('input[name="rating"]').value,
                diving: document.querySelector('input[name="diving"]').value,
                handling: document.querySelector('input[name="handling"]').value,
                kicking: document.querySelector('input[name="kicking"]').value,
                reflexes: document.querySelector('input[name="reflexes"]').value,
                speed: document.querySelector('input[name="speed"]').value,
                positioning: document.querySelector('input[name="positioning"]').value
            }
            players.push(data)
            console.log(players)
        } else {
            const data = {
                name: name.value,
                photo: document.getElementById('photo').files[0],
                position: positionSelect.value,
                nationality: nationality.value,
                flag: document.getElementById('flag').files[0],
                club: club.value,
                logo: document.getElementById('logo').files[0],
                rating: document.querySelector('input[name="rating"]').value,
                pace: document.querySelector('input[name="pace"]').value,
                shooting: document.querySelector('input[name="shooting"]').value,
                passing: document.querySelector('input[name="passing"]').value,
                dribbling: document.querySelector('input[name="dribbling"]').value,
                defending: document.querySelector('input[name="defending"]').value,
                physical: document.querySelector('input[name="physical"]').value
            }
            players.push(data)
            console.log(players)
        }
    }
});


document.getElementById('redouBtn').addEventListener('click', () => {
    const container = document.getElementById('cardsChangementsContainer');
    const playersContainer = document.getElementsByClassName('playersContainer')[0];
    container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
    playersContainer.style.width = playersContainer.style.width === '41%' ? '2%' : '41%';
});



positionSelect.addEventListener('change', () => {
    if (positionSelect.value === 'GK') {
        numInputsGK.style.display = 'flex'
        numInputs.style.display = 'none'

    } else {
        numInputsGK.style.display = 'none'
        numInputs.style.display = 'flex'

    }
})



document.addEventListener('DOMContentLoaded', () => {
    displayCards()
    getPlayers()
})