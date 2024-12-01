import { createObject, addToLocalStorage } from './validation.js'

const rbCard = document.querySelector('.card-empty.GK');
const CbCardL = document.querySelector('.card-empty.CBL');
const CbCardR = document.querySelector('.card-empty.CBR');
const LBcontainer = document.querySelector('.card-empty.LB');
const RBcontainer = document.querySelector('.card-empty.RB');
const LMcontainer = document.querySelector('.card-empty.LM');
const RMcontainer = document.querySelector('.card-empty.RM');
const CMCardL = document.querySelector('.card-empty.CML');
const CMCardR = document.querySelector('.card-empty.CMR');
const STCardL = document.querySelector('.card-empty.STL');
const STCardR = document.querySelector('.card-empty.STR');

const playerContainerGK = rbCard.querySelector('.PlayerContainerCard');
const playerContainerCbL = CbCardL.querySelector('.PlayerContainerCard');
const playerContainerCbR = CbCardR.querySelector('.PlayerContainerCard');
const LB = LBcontainer.querySelector('.PlayerContainerCard');
const RB = RBcontainer.querySelector('.PlayerContainerCard');
const LM = LMcontainer.querySelector('.PlayerContainerCard');
const RM = RMcontainer.querySelector('.PlayerContainerCard');
const playerContainerCML = CMCardL.querySelector('.PlayerContainerCard');
const playerContainerCMR = CMCardR.querySelector('.PlayerContainerCard');
const playerContainerSTL = STCardL.querySelector('.PlayerContainerCard');
const playerContainerSTR = STCardR.querySelector('.PlayerContainerCard');

const playerContainers = document.querySelectorAll('.card-empty-changement');
let changementPlayers = JSON.parse(localStorage.getItem('changementPlayers')) || { Players: [] };



export function displayElement(item) {
    const isGoalkeeper = item?.position === 'GK';

    const stats = isGoalkeeper
        ? `
            <div>
                <label for="">DIV</label>
                <p name="diving">${item.diving}</p>
            </div>
            <div>
                <label for="">HAN</label>
                <p name="handling">${item.handling}</p>
            </div>
            <div>
                <label for="">KIC</label>
                <p name="kicking">${item.kicking}</p>
            </div>
            <div>
                <label for="">REF</label>
                <p name="reflexes">${item.reflexes}</p>
            </div>
            <div>
                <label for="">SPE</label>
                <p name="speed">${item.speed}</p>
            </div>
            <div>
                <label for="">POS</label>
                <p name="positioning">${item.positioning}</p>
            </div>
        `
        : `
            <div class="paceContainer">
                <label for="">PAC</label>
                <p name="pace">${item?.pace}</p>
            </div>
            <div>
                <label for="">SHO</label>
                <p name="shooting">${item?.shooting}</p>
            </div>
            <div>
                <label for="">PAS</label>
                <p name="passing">${item?.passing}</p>
            </div>
            <div>
                <label for="">DRI</label>
                <p name="dribbling">${item?.dribbling}</p>
            </div>
            <div>
                <label for="">DEF</label>
                <p name="defending">${item?.defending}</p>
            </div>
            <div class="physicalContainer">
                <label for="">PHY</label>
                <p name="physical">${item?.physical}</p>
            </div>
        `;

        const badge = isGoalkeeper
        ? "src/assets/img/badge_total_rush.webp"
        : "src/assets/img/badge_ballon_dor.webp";

    return `
        <div class="cardChangements" draggable="true" data-position="${item?.position}" id="${item?.id}" >
            <div class="editContainer">
                <button><i class="fa-solid fa-trash" style="color: #ffffff;" onclick="deleteById(${item?.id})"></i></button>
                <button><i class="fa-regular fa-pen-to-square" style="color: #ffffff;" onclick="modifier(${item.id})"></i></button>
            </div>
            <div class="flag">
                <img src="${item?.flag}" alt="flagPic" class="flagPic" draggable="false">
            </div>
            <div class="logoitem">
                <img src="${item?.logo}" alt="LogoTeam" class="LogoTeam" draggable="false">
            </div>
            <div class="photoContainer">
                <div class="ratingContainer">
                    <label for="">RAT</label>
                    <p name="rating">${item?.rating}</p>
                </div>
                <div class="picDiv">
                    <img src="${item?.photo}" alt="" draggable="false">
                </div>
                <div class="infoContainer">
                    <h4>${item?.name}</h4>
                    <div class="numInfos">
                        ${stats}
                    </div>
                </div>
            </div>
            <img src="${badge}" alt="" id="pofilePhoto" draggable="false">
        </div>
    `;
}

export async function displayCartToStuduem(player, curruntPosition) {
    player.id === undefined ? player.id  = generateId() + 1 : '' ;
    console.log(player.id)
    switch (player.position) {
        case 'GK':
            const playerContainerGK = await rbCard.querySelector('.PlayerContainerCard');
            if (playerContainerGK.childElementCount === 0) {
                addToLocalStorage(player, 'GK')
            } else {
                if (changementPlayers.Players.length <= 12) {
                    let currentPlayer = createObject(player.position, playerContainerGK.firstElementChild)
                    addToLocalStorage(player, 'GK')
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;
        case 'CB':
            const playerContainerCbL = CbCardL.querySelector('.PlayerContainerCard');
            const playerContainerCbR = CbCardR.querySelector('.PlayerContainerCard');
            if (playerContainerCbL.childElementCount === 0) {
                curruntPosition == 'ok' ? addToLocalStorage(player, 'CBL') : curruntPosition === 'CBL' ? addToLocalStorage(player, 'CBL'): addToLocalStorage(player, 'CBR');
            } else if (playerContainerCbR.childElementCount === 0) {
                curruntPosition == 'ok' ? addToLocalStorage(player, 'CBR') : curruntPosition === 'CBL' ? addToLocalStorage(player, 'CBL'): addToLocalStorage(player, 'CBR');
            } else {
                if (changementPlayers.Players.length <= 12) {
                    curruntPosition === 'CBR' ? addToLocalStorage(player, 'CBR'): addToLocalStorage(player, 'CBL')
                    let currentPlayer = curruntPosition === 'CBL' ? createObject(player.position, playerContainerCbL.firstElementChild) : createObject(player.position, playerContainerCbR.firstElementChild)
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;
        case 'LB':
            const LB = LBcontainer.querySelector('.PlayerContainerCard');
            if (LB.childElementCount === 0) {
                addToLocalStorage(player, 'LB')
            } else {
                if (changementPlayers.Players.length <= 12) {
                    addToLocalStorage(player, 'LB')
                    let currentPlayer = createObject(player.position, LB.firstElementChild)
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;
        case 'RB':
            const RB = RBcontainer.querySelector('.PlayerContainerCard');
            if (RB.childElementCount === 0) {
                addToLocalStorage(player, 'RB')
            } else {
                if (changementPlayers.Players.length <= 12) {
                    addToLocalStorage(player, 'RB')
                    let currentPlayer = createObject(player.position, RB.firstElementChild)
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;
        case 'LW':
            const LM = LMcontainer.querySelector('.PlayerContainerCard');
            if (LM.childElementCount === 0) {
                addToLocalStorage(player, 'LW')
            } else {
                if (changementPlayers.Players.length <= 12) {
                    addToLocalStorage(player, 'LW')
                    let currentPlayer = createObject(player.position, LM.firstElementChild)
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;
        case 'RW':
            const RM = RMcontainer.querySelector('.PlayerContainerCard');
            if (RM.childElementCount === 0) {
                addToLocalStorage(player, 'RW')
            } else {
                if (changementPlayers.Players.length <= 12) {
                    addToLocalStorage(player, 'RW')
                    let currentPlayer = createObject(player.position, RM.firstElementChild)
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;
        case 'CM':
            const playerContainerCML = await CMCardL.querySelector('.PlayerContainerCard');
            const playerContainerCMR = await CMCardR.querySelector('.PlayerContainerCard');
            if (playerContainerCML.childElementCount === 0) {
                curruntPosition == 'ok' ? addToLocalStorage(player, 'CML') : curruntPosition === 'CML' ? addToLocalStorage(player, 'CML'): addToLocalStorage(player, 'CMR');
            } else if (playerContainerCMR.childElementCount === 0) {
                curruntPosition == 'ok' ? addToLocalStorage(player, 'CMR') : curruntPosition === 'CML' ? addToLocalStorage(player, 'CML'): addToLocalStorage(player, 'CMR');
            } else {
                if (changementPlayers.Players.length <= 12) {
                    curruntPosition === 'CMR' ? addToLocalStorage(player, 'CMR') : addToLocalStorage(player, 'CML')
                    let currentPlayer = curruntPosition === 'CML' ? createObject(player.position, playerContainerCML.firstElementChild) : createObject(player.position, playerContainerCMR.firstElementChild)
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;
        case 'ST':
            const playerContainerSTL = STCardL.querySelector('.PlayerContainerCard');
            const playerContainerSTR = STCardR.querySelector('.PlayerContainerCard');
            if (playerContainerSTL.childElementCount === 0) {
                curruntPosition == 'ok' ? addToLocalStorage(player, 'STL') : curruntPosition === 'STL' ? addToLocalStorage(player, 'STL'): addToLocalStorage(player, 'STR');
            } else if (playerContainerSTR.childElementCount === 0) {
                curruntPosition == 'ok' ? addToLocalStorage(player, 'STR') : curruntPosition === 'STR' ? addToLocalStorage(player, 'STR'): addToLocalStorage(player, 'STL');
                console.log(curruntPosition === 'STR')
            } else {
                if (changementPlayers.Players.length <= 12) {
                    curruntPosition === 'STL' ? addToLocalStorage(player, 'STL') : addToLocalStorage(player, 'STR')
                    let currentPlayer = curruntPosition === 'STL' ? createObject(player.position, playerContainerSTL.firstElementChild) : createObject(player.position, playerContainerSTR.firstElementChild)
                    addToLocalStorage(currentPlayer, 'changementPlayers')
                }
            }
            break;

        default:
            break;
    }
    displayEffect()
}

function generateId() {
    const data = JSON.parse(localStorage.getItem('players'))
    return data.Players.length
}


export function displayEffect() {
    const positions = [
        { key: 'GKPlayers', container: playerContainerGK },
        { key: 'CBLPlayers', container: playerContainerCbL },
        { key: 'CBRPlayers', container: playerContainerCbR },
        { key: 'LBPlayers', container: LB },
        { key: 'RBPlayers', container: RB },
        { key: 'LMPlayers', container: LM },
        { key: 'RMPlayers', container: RM },
        { key: 'CMLPlayers', container: playerContainerCML },
        { key: 'CMRPlayers', container: playerContainerCMR },
        { key: 'STLPlayers', container: playerContainerSTL },
        { key: 'STRPlayers', container: playerContainerSTR },
    ];

    positions.forEach(({ key, container }) => {
        const data = JSON.parse(localStorage.getItem(key)) || { Players: [] };
        if (data.Players.length > 0) {
            container.innerHTML = displayElement(data.Players[0]);
        }
    });

    const changementPlayers = JSON.parse(localStorage.getItem('changementPlayers')) || { Players: [] };

    if (Array.isArray(changementPlayers.Players) && changementPlayers.Players.length > 0) {
        changementPlayers.Players.forEach((player, index) => {
            if (playerContainers[index]) {
                playerContainers[index].innerHTML = displayElement(player);
            }
        });
    }
}
