import { displayElement, displayCartToStuduem, displayEffect } from './display.js'
import { inputValidat, createObject } from './validation.js'

const positionSelect = document.getElementById('positionSelect')
const numInputsGK = document.getElementsByClassName('GKinputs')[0]
const num = document.getElementsByClassName('num')
const numPlayer = document.getElementsByClassName('numPlayer')
const formData = document.getElementById('formData')
const numInputs = document.getElementById('numInputs')
const InputGK = document.getElementById('numInputsGK')
const cardsChangementsContainer = document.getElementById('cardsChangementsContainer')
const rbCard = document.querySelector('.card-empty.GK');
const playerContainerGK = rbCard.querySelector('.PlayerContainerCard');

//localStorage Data
const data = JSON.parse(localStorage.getItem('players'))



async function getPlayers() {
    try {
        const response = await fetch('./players.json');
        const data = await response.json();
        localStorage.setItem('players', JSON.stringify(data))
        displayCards(data)
        return data;
    } catch (error) {
        console.error('Error fetching players:', error);
    }
}
async function displayCards(data) {
    data?.Players.forEach(item => {
        cardsChangementsContainer.innerHTML += displayElement(item)
    });
}

document.getElementById('photo').addEventListener('change', () => {
    const photoOutput = document.getElementById('photoOutput');
    photoOutput.src = document.getElementById('photo').value;
})
document.getElementById('flag').addEventListener('change', () => {
    const flagOutput = document.getElementById('flagOutput');
    flagOutput.src = document.getElementById('flag').value;
})
document.getElementById('logo').addEventListener('change', () => {
    const LogoOutput = document.getElementById('LogoOutput');
    LogoOutput.src = document.getElementById('logo').value;
})


formData.addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = document.getElementById('formData');
    const name = document.getElementById('name');
    const nationality = document.getElementById('nationality');
    const club = document.getElementById('club');

    const URLInputs = [
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
    } else if (inputValidat(URLInputs)) {
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
    else if (inputValidat(positionSelect.value === 'GK' ? InputGK : numInputs)) {
        document.getElementsByClassName('error')[0].style.display = 'flex'
        document.getElementsByClassName('errorSpan')[0].textContent = 'Invalide Numbers must be < 0 et > 100'
        setTimeout(() => {
            club.style.border = 'none'
            document.getElementsByClassName('error')[0].style.display = 'none'
        }, 2000);
    }
    if (inputValidat(name) || inputValidat(nationality) || inputValidat(club) || inputValidat(positionSelect.value === 'GK' ? InputGK : numInputs) || inputValidat(URLInputs)) {
        console.error('invalide Values')

    } else {
        if (positionSelect.value === 'GK') {
            const data = {
                name: name.value,
                photo: document.getElementById('photo').value,
                position: "GK",
                nationality: nationality.value,
                flag: document.getElementById('flag').value,
                club: club.value,
                logo: document.getElementById('logo').value,
                rating: document.querySelector('input[id="rating1"]').value,
                diving: document.querySelector('input[name="diving"]').value,
                handling: document.querySelector('input[name="handling"]').value,
                kicking: document.querySelector('input[name="kicking"]').value,
                reflexes: document.querySelector('input[name="reflexes"]').value,
                speed: document.querySelector('input[name="speed"]').value,
                positioning: document.querySelector('input[name="positioning"]').value
            }
            await displayCartToStuduem(data, 'ok')
        } else {
            const data = {
                name: name.value,
                photo: document.getElementById('photo').value,
                position: positionSelect.value,
                nationality: nationality.value,
                flag: document.getElementById('flag').value,
                club: club.value,
                logo: document.getElementById('logo').value,
                rating: document.querySelector('input[id="rating2"]').value,
                pace: document.querySelector('input[name="pace"]').value,
                shooting: document.querySelector('input[name="shooting"]').value,
                passing: document.querySelector('input[name="passing"]').value,
                dribbling: document.querySelector('input[name="dribbling"]').value,
                defending: document.querySelector('input[name="defending"]').value,
                physical: document.querySelector('input[name="physical"]').value
            }
            displayCartToStuduem(data, 'ok')
        }
        formData.reset();
    }
    displayEffect()
});


document.getElementById('redouBtn').addEventListener('click', () => {
    const container = document.getElementById('cardsChangementsContainer');
    const playersContainer = document.getElementsByClassName('playersContainer')[0];
    container.style.display = container.style.display === 'flex' ? 'none' : 'flex';
    playersContainer.style.width = playersContainer.style.width === '41%' ? '2%' : '41%';
});


// localStorage.clear()
positionSelect.addEventListener('change', () => {
    if (positionSelect.value === 'GK') {
        numInputsGK.style.display = 'flex'
        numInputs.style.display = 'none'
        const nums = [...num];
        nums.forEach(item => {
            item.display = 'none'
        });
    } else {
        numInputsGK.style.display = 'none'
        numInputs.style.display = 'flex'
        const nums = [...num];
        nums.forEach(item => {
            item.display = 'flex'
        });

    }
})

document.addEventListener('DOMContentLoaded', async () => {
    displayEffect()
    data ? displayCards(data) : getPlayers() ;
    dragAndDrop()
})



// delete function 
function deletePlayerById(id) {
    deleteById(id)
}


//drag 

// localStorage.clear()


function dragAndDrop() {
    const cards = document.querySelectorAll('.cardChangements')
    const studiemCard = document.querySelectorAll('.PlayerContainerCard');
    const Delete = document.getElementById('Delete');
    console.log(cards)
    cards.forEach(item => {
        item.addEventListener('dragstart', () => {
            console.log(cards.length)
            item.classList.add('isdragin');
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('isdragin');
        });
    });

    studiemCard.forEach(item => {
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draginEle = document.querySelector('.isdragin');
            console.log(draginEle)

            if (draginEle && item?.getAttribute('data-position') === draginEle?.getAttribute('data-position')) {
                item.classList.add('boxdragin');
            } else {
                item.classList.add('redbox');
            }
        });

        item.addEventListener('dragleave', (e) => {
            e.preventDefault();
            item.classList.remove('boxdragin', 'redbox');
        });

        item.addEventListener('drop', () => {
            item.classList.remove('boxdragin', 'redbox');
            const draginEle = document.querySelector('.isdragin');
            console.log(draginEle)
            const playerData = createObject(item.dataset.position, draginEle);

            const cardClasses = item.closest('.card-empty').className.split(' ');
            const secondClass = cardClasses[1];
            displayCartToStuduem(playerData, secondClass);
        });
    });

    Delete.addEventListener('dragover', (e) => {
        e.preventDefault();
        Delete.style.padding = '30px 32px';
        Delete.firstChild.style.size = '50px'
    });
    Delete.addEventListener('dragleave', (e) => {
        e.preventDefault();
        Delete.style.padding = '10px 12px';
    });

    Delete.addEventListener('drop', () => {
        const draginEle = document.querySelector('.isdragin');
        Delete.style.backgroundColor = 'red';
        console.log(draginEle)
        deletePlayerById(draginEle.id);
        Delete.style.padding = '10px 12px';
    });

}
