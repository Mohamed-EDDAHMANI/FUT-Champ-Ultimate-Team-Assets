const changement = await document.querySelector('.changement');
const rbCard = await document.querySelector('.card-empty.GK');
const CbCardL = await document.querySelector('.card-empty.CBL');
const CbCardR = await document.querySelector('.card-empty.CBR');
const LBcontainer = await document.querySelector('.card-empty.LB');
const RBcontainer = await document.querySelector('.card-empty.RB');
const LMcontainer = await document.querySelector('.card-empty.LM');
const RMcontainer = await document.querySelector('.card-empty.RM');
const CMCardL = await document.querySelector('.card-empty.CML');
const CMCardR = await document.querySelector('.card-empty.CMR');
const STCardL = await document.querySelector('.card-empty.STL');
const STCardR = await document.querySelector('.card-empty.STR');

const playerContainerGK = await rbCard.querySelector('.PlayerContainerCard');
const playerContainerCbL = await CbCardL.querySelector('.PlayerContainerCard');
const playerContainerCbR = await CbCardR.querySelector('.PlayerContainerCard');
const LB = await LBcontainer.querySelector('.PlayerContainerCard');
const RB = await RBcontainer.querySelector('.PlayerContainerCard');
const LM = await LMcontainer.querySelector('.PlayerContainerCard');
const RM = await RMcontainer.querySelector('.PlayerContainerCard');
const playerContainerCML = await CMCardL.querySelector('.PlayerContainerCard');
const playerContainerCMR = await CMCardR.querySelector('.PlayerContainerCard');
const playerContainerSTL = await STCardL.querySelector('.PlayerContainerCard');
const playerContainerSTR = await STCardR.querySelector('.PlayerContainerCard');

const playerContainers = document.querySelectorAll('.PlayerContainerCard-changement');


//localStorage Data
const GKPlayers = JSON.parse(localStorage.getItem('GKPlayers')) || { GKPlayers: [] };
const changementPlayers = JSON.parse(localStorage.getItem('changementPlayers')) || { Players: [] };
const CBLPlayers = JSON.parse(localStorage.getItem('CBPlayers')) || { CBLPlayers: [] };
const CBRPlayers = JSON.parse(localStorage.getItem('CBRPlayers')) || { CBRPlayers: [] };
const LBPlayers = JSON.parse(localStorage.getItem('LBPlayers')) || { LBPlayers: [] };
const RBPlayers = JSON.parse(localStorage.getItem('RBPlayers')) || { RBPlayers: [] };
const LMPlayers = JSON.parse(localStorage.getItem('LMPlayers')) || { LMPlayers: [] };
const RMPlayers = JSON.parse(localStorage.getItem('RMPlayers')) || { RMPlayers: [] };
const CMLPlayers = JSON.parse(localStorage.getItem('CMLPlayers')) || { CMLPlayers: [] };
const CMRPlayers = JSON.parse(localStorage.getItem('CMRPlayers')) || { CMRPlayers: [] };
const STLPlayers = JSON.parse(localStorage.getItem('STLPlayers')) || { STLPlayers: [] };
const STRPlayers = JSON.parse(localStorage.getItem('STRPlayers')) || { STRPlayers: [] };


export function desplayElement(item) {
    if (item?.position === 'GK') {
        return `
    <div class="cardChangements">
        <div class="editContainer">
               <button><i class="fa-solid fa-trash" style="color: #ffffff;"></i>
            </button>
             <button><i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
            </button>
        </div>
        <div class="flag">
            <img src="${item.flag}" alt="" class="flagPic">
        </div>
        <div>
            <img src="${item.logo}" alt="" class="LogoTeam">
        </div>
        <div class="photoContainer">
            <div class="ratingContainer">
                <label for="">RAT</label>
                <p name="rating">${item.rating}</p>
            </div>
            <div class="picDiv">
                <img src="${item.photo}" alt="">
            </div>
            <div class="infoContainer">
                <h4>${item.name}</h4>
                <div class="numInfos">
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
                </div>
            </div>
        </div>
        <img src="src/assets/img/badge_total_rush.webp" alt="" id="pofilePhoto">
    </div>

    `
    } else {
        return `
    <div class="cardChangements">
        <div class="editContainer">
               <button><i class="fa-solid fa-trash" style="color: #ffffff;"></i>
            </button>
             <button><i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
            </button>
        </div>
        <div class="flag">
            <img src="${item?.flag}" alt="" class="flagPic">
        </div>
        <div>
            <img src="${item?.logo}" alt="" class="LogoTeam">
        </div>
        <div class="photoContainer">
            <div class="ratingContainer">
                <label for="">RAT</label>
                <p name="rating">${item?.rating}</p>
            </div>
            <div class="picDiv">
                <img src="${item?.photo}" alt="">
            </div>
            <div class="infoContainer">
                <h4>${item?.name}</h4>
                <div class="numInfos">
                    <div>
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
                    <div>
                        <label for="">PHY</label>
                        <p name="physical">${item?.physical}</p>
                    </div>
                </div>
            </div>
        </div>
        <img src="src/assets/img/badge_ballon_dor.webp" alt="" id="pofilePhoto">
    </div>

    `
    }

}

export async function displayCartToStuduem(player) {


    switch (player.position) {
        case 'GK':
            const playerContainerGK = await rbCard.querySelector('.PlayerContainerCard');
            if (playerContainerGK.childElementCount === 0) {
                GKPlayers.GKPlayers.push(player)
                await localStorage.setItem('GKPlayers', JSON.stringify(GKPlayers))
                displayEffect()
            } else if (validPosition()) {
                changementPlayers.Players.push(player)
                localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                displayEffect()
            }
            break;
        case 'CB':
            const playerContainerCbL = await CbCardL.querySelector('.PlayerContainerCard');
            const playerContainerCbR = await CbCardR.querySelector('.PlayerContainerCard');
            if (playerContainerCbL.childElementCount === 0) {
                CBLPlayers.CBLPlayers.push(player)
                await localStorage.setItem('CBLPlayers', JSON.stringify(CBLPlayers))
                displayEffect()
            } else if (playerContainerCbR.childElementCount === 0) {
                CBRPlayers.CBRPlayers.push(player)
                await localStorage.setItem('CBRPlayers', JSON.stringify(CBRPlayers))
                displayEffect()
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                displayEffect()
            }
            break;
        case 'LB':
            const LB = await LBcontainer.querySelector('.PlayerContainerCard');
            if (LB.childElementCount === 0) {
                LBPlayers.LBPlayers.push(player)
                await localStorage.setItem('LBPlayers', JSON.stringify(LBPlayers))
                LB.innerHTML = desplayElement(player)
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                changement.innerHTML += desplayElement(player)
            }
            break;
        case 'RB':
            const RB = await RBcontainer.querySelector('.PlayerContainerCard');
            if (RB.childElementCount === 0) {
                RBPlayers.RBPlayers.push(player)
                await localStorage.setItem('RBPlayers', JSON.stringify(RBPlayers))
                displayEffect()
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                displayEffect()
            }
            break;
        case 'LM':
            const LM = await LMcontainer.querySelector('.PlayerContainerCard');
            if (LM.childElementCount === 0) {
                LMPlayers.LMPlayers.push(player)
                await localStorage.setItem('LMPlayers', JSON.stringify(LMPlayers))
                displayEffect()
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                displayEffect()
            }
            break;
        case 'RM':
            const RM = await RMcontainer.querySelector('.PlayerContainerCard');
            if (RM.childElementCount === 0) {
                RMPlayers.RMPlayers.push(player)
                await localStorage.setItem('RMPlayers', JSON.stringify(RMPlayers))
                displayEffect()
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                displayEffect()
            }
            break;
        case 'CM':
            const playerContainerCML = await CMCardL.querySelector('.PlayerContainerCard');
            const playerContainerCMR = await CMCardR.querySelector('.PlayerContainerCard');
            if (playerContainerCML.childElementCount === 0) {
                CMLPlayers.CMLPlayers.push(player)
                await localStorage.setItem('CMLPlayers', JSON.stringify(CMLPlayers))
                displayEffect()
            } else if (playerContainerCMR.childElementCount === 0) {
                CMRPlayers.CMRPlayers.push(player)
                await localStorage.setItem('CMRPlayers', JSON.stringify(CMRPlayers))
                displayEffect()
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                displayEffect()
            }
            break;
        case 'ST':
            const playerContainerSTL = await STCardL.querySelector('.PlayerContainerCard');
            const playerContainerSTR = await STCardR.querySelector('.PlayerContainerCard');
            if (playerContainerSTL.childElementCount === 0) {
                STLPlayers.STLPlayers.push(player)
                await localStorage.setItem('STLPlayers', JSON.stringify(STLPlayers))
                displayEffect()
            } else if (playerContainerSTR.childElementCount === 0) {
                STRPlayers.STRPlayers.push(player)
                await localStorage.setItem('STRPlayers', JSON.stringify(STRPlayers))
                displayEffect()
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                displayEffect()
            }
            break;

        default:
            break;
    }
}

export async function displayEffect() {


    GKPlayers.GKPlayers.length !== 0 ? playerContainerGK.innerHTML = desplayElement(GKPlayers?.GKPlayers[0]) : '';
    CBLPlayers.CBLPlayers.length !== 0 ? playerContainerCbL.innerHTML = desplayElement(CBLPlayers?.CBLPlayers[0]) : '';
    CBRPlayers.CBRPlayers.length !== 0 ? playerContainerCbR.innerHTML = desplayElement(CBRPlayers?.CBRPlayers[0]) : '';
    LBPlayers.LBPlayers.length !== 0 ? LB.innerHTML = desplayElement(LBPlayers?.LBPlayers[0]) : '';
    RBPlayers.RBPlayers.length !== 0 ? RB.innerHTML = desplayElement(RBPlayers?.RBPlayers[0]) : '';
    LMPlayers.LMPlayers.length !== 0 ? LM.innerHTML = desplayElement(LMPlayers?.LMPlayers[0]) : '';
    RMPlayers.RMPlayers.length !== 0 ? RM.innerHTML = desplayElement(RMPlayers?.RMPlayers[0]) : '';
    CMLPlayers.CMLPlayers.length !== 0 ? playerContainerCML.innerHTML = desplayElement(CMLPlayers?.CMLPlayers[0]) : '';
    CMRPlayers.CMRPlayers.length !== 0 ? playerContainerCMR.innerHTML = desplayElement(CMRPlayers?.CMRPlayers[0]) : '';
    STLPlayers.STLPlayers.length !== 0 ? playerContainerSTL.innerHTML = desplayElement(STLPlayers?.STLPlayers[0]) : '';
    STRPlayers.STRPlayers.length !== 0 ? playerContainerSTR.innerHTML = desplayElement(STRPlayers?.STRPlayers[0]) : '';

    if (changementPlayers.Players !== undefined) {
        changementPlayers?.Players.forEach((element , index) => {
            playerContainers[index].innerHTML = desplayElement(element)
        })
    }
}