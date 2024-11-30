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

const playerContainers = document.querySelectorAll('.PlayerContainerCard-changement');
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
        <div class="cardChangements" draggable="true" data-position="${item?.position}">
            <div class="editContainer">
                <button><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button>
                <button><i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i></button>
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
            console.log(playerContainerCbL)
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

export async function displayEffect() {
    let GKPlayers = JSON.parse(localStorage.getItem('GKPlayers')) || { GKPlayers: [] };
    let changementPlayers = JSON.parse(localStorage.getItem('changementPlayers')) || { Players: [] };
    let CBLPlayers = JSON.parse(localStorage.getItem('CBLPlayers')) || { CBLPlayers: [] };
    let CBRPlayers = JSON.parse(localStorage.getItem('CBRPlayers')) || { CBRPlayers: [] };
    let LBPlayers = JSON.parse(localStorage.getItem('LBPlayers')) || { LBPlayers: [] };
    let RBPlayers = JSON.parse(localStorage.getItem('RBPlayers')) || { RBPlayers: [] };
    let LMPlayers = JSON.parse(localStorage.getItem('LMPlayers')) || { LMPlayers: [] };
    let RMPlayers = JSON.parse(localStorage.getItem('RMPlayers')) || { RMPlayers: [] };
    let CMLPlayers = JSON.parse(localStorage.getItem('CMLPlayers')) || { CMLPlayers: [] };
    let CMRPlayers = JSON.parse(localStorage.getItem('CMRPlayers')) || { CMRPlayers: [] };
    let STLPlayers = JSON.parse(localStorage.getItem('STLPlayers')) || { STLPlayers: [] };
    let STRPlayers = JSON.parse(localStorage.getItem('STRPlayers')) || { STRPlayers: [] };

    GKPlayers.GKPlayers.length !== 0 ? playerContainerGK.innerHTML = displayElement(GKPlayers?.GKPlayers[0]) : '';
    CBLPlayers.CBLPlayers.length !== 0 ? playerContainerCbL.innerHTML = displayElement(CBLPlayers?.CBLPlayers[0]) : '';
    CBRPlayers.CBRPlayers.length !== 0 ? playerContainerCbR.innerHTML = displayElement(CBRPlayers?.CBRPlayers[0]) : '';
    LBPlayers.LBPlayers.length !== 0 ? LB.innerHTML = displayElement(LBPlayers?.LBPlayers[0]) : '';
    RBPlayers.RBPlayers.length !== 0 ? RB.innerHTML = displayElement(RBPlayers?.RBPlayers[0]) : '';
    LMPlayers.LMPlayers.length !== 0 ? LM.innerHTML = displayElement(LMPlayers?.LMPlayers[0]) : '';
    RMPlayers.RMPlayers.length !== 0 ? RM.innerHTML = displayElement(RMPlayers?.RMPlayers[0]) : '';
    CMLPlayers.CMLPlayers.length !== 0 ? playerContainerCML.innerHTML = displayElement(CMLPlayers?.CMLPlayers[0]) : '';
    CMRPlayers.CMRPlayers.length !== 0 ? playerContainerCMR.innerHTML = displayElement(CMRPlayers?.CMRPlayers[0]) : '';
    STLPlayers.STLPlayers.length !== 0 ? playerContainerSTL.innerHTML = displayElement(STLPlayers?.STLPlayers[0]) : '';
    STRPlayers.STRPlayers.length !== 0 ? playerContainerSTR.innerHTML = displayElement(STRPlayers?.STRPlayers[0]) : '';


    if (changementPlayers.Players !== undefined) {
        changementPlayers?.Players.forEach((element, index) => {
            playerContainers[index].innerHTML = displayElement(element)
        })
    }
}