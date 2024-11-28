export function desplayElement(item) {
    if (item.position === 'GK') {
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
                         <label for="">PAC</label>
                        <p name="pace">${item.pace}</p>
                    </div>
                    <div>
                        <label for="">SHO</label>
                         <p name="shooting">${item.shooting}</p>
                    </div>
                    <div>
                        <label for="">PAS</label>
                        <p name="passing">${item.passing}</p>
                    </div>
                    <div>
                        <label for="">DRI</label>
                        <p name="dribbling">${item.dribbling}</p>
                    </div>
                    <div>
                           <label for="">DEF</label>
                        <p name="defending">${item.defending}</p>
                    </div>
                    <div>
                        <label for="">PHY</label>
                        <p name="physical">${item.physical}</p>
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

    //localStorage Data
    const storedGKPlayers = localStorage.getItem('GKPlayers');
    const storedchangementPlayers = localStorage.getItem('changementPlayers');
    const storedCBLPlayers = localStorage.getItem('CBPlayers');
    const storedCBRPlayers = localStorage.getItem('CBRPlayers');
    const storedLBPlayers = localStorage.getItem('LBPlayers');
    const storedRBPlayers = localStorage.getItem('RBPlayers');
    const storedLMPlayers = localStorage.getItem('LMPlayers');
    const storedRMPlayers = localStorage.getItem('RMPlayers');
    const storedCMLPlayers = localStorage.getItem('CMLPlayers');
    const storedCMRPlayers = localStorage.getItem('CMRPlayers');
    const storedSTLPlayers = localStorage.getItem('STLPlayers');
    const storedSTRPlayers = localStorage.getItem('STRPlayers');
    let GKPlayers, changementPlayers, CBLPlayers, CBRPlayers, LBPlayers, RBPlayers, LMPlayers, RMPlayers, CMRPlayers, CMLPlayers, STLPlayers, STRPlayers;

    if (storedGKPlayers === null) {
        GKPlayers = { GKPlayers: [] };
    } else {
        GKPlayers = JSON.parse(storedGKPlayers);
    }

    if (storedchangementPlayers === null) {
        changementPlayers = { Players: [] };
    } else {
        changementPlayers = JSON.parse(storedchangementPlayers);
    }

    if (storedCBLPlayers === null) {
        CBLPlayers = { CBLPlayers: [] };
    } else {
        CBLPlayers = JSON.parse(storedCBLPlayers);
    }

    if (storedCBRPlayers === null) {
        CBRPlayers = { CBRPlayers: [] };
    } else {
        CBRPlayers = JSON.parse(storedCBRPlayers);
    }

    if (storedLBPlayers === null) {
        LBPlayers = { LBPlayers: [] };
    } else {
        LBPlayers = JSON.parse(storedLBPlayers);
    }

    if (storedRBPlayers === null) {
        RBPlayers = { RBPlayers: [] };
    } else {
        RBPlayers = JSON.parse(storedLBPlayers);
    }

    if (storedLMPlayers === null) {
        LMPlayers = { LMPlayers: [] };
    } else {
        LMPlayers = JSON.parse(storedLMPlayers);
    }

    if (storedRMPlayers === null) {
        RMPlayers = { RMPlayers: [] };
    } else {
        RMPlayers = JSON.parse(storedRMPlayers);
    }

    if (storedCMLPlayers === null) {
        CMLPlayers = { CMLPlayers: [] };
    } else {
        CMLPlayers = JSON.parse(storedCMLPlayers);
    }

    if (storedCMRPlayers === null) {
        CMRPlayers = { CMRPlayers: [] };
    } else {
        CMRPlayers = JSON.parse(storedCMRPlayers);
    }

    if (storedSTLPlayers === null) {
        STLPlayers = { STLPlayers: [] };
    } else {
        STLPlayers = JSON.parse(storedSTLPlayers);
    }

    if (storedSTRPlayers === null) {
        STRPlayers = { STRPlayers: [] };
    } else {
        STRPlayers = JSON.parse(storedSTRPlayers);
    }

    switch (player.position) {
        case 'GK':
            const playerContainerGK = await rbCard.querySelector('.PlayerContainerCard');
            if (playerContainerGK.childElementCount === 0) {
                GKPlayers.GKPlayers.push(player)
                await localStorage.setItem('GKPlayers', JSON.stringify(GKPlayers))
                playerContainerGK.innerHTML = desplayElement(player)
            } else {
                if (changement.childElementCount === 0) {
                    changementPlayers.Players.push(player)
                    localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                    changement.innerHTML = desplayElement(player)
                } else {
                    console.log(changementPlayers)
                    changementPlayers.Players.push(player)
                    localStorage.removeItem('changementPlayers')
                    localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))//here i have the priblem
                    console.log(localStorage.getItem('changementPlayers'))
                    changement.innerHTML += desplayElement(player)
                }
            }
            break;
        case 'CB':
            const playerContainerCbL = await CbCardL.querySelector('.PlayerContainerCard');
            const playerContainerCbR = await CbCardR.querySelector('.PlayerContainerCard');
            if (playerContainerCbL.childElementCount === 0) {
                CBLPlayers.CBLPlayers.push(player)
                await localStorage.setItem('CBLPlayers', JSON.stringify(CBLPlayers))
                playerContainerCbL.innerHTML = desplayElement(player)
            } else if (playerContainerCbR.childElementCount === 0) {
                CBRPlayers.CBRPlayers.push(player)
                await localStorage.setItem('CBRPlayers', JSON.stringify(CBRPlayers))
                playerContainerCbR.innerHTML = desplayElement(player)
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                changement.innerHTML += desplayElement(player)
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
                RB.innerHTML = desplayElement(player)
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                changement.innerHTML += desplayElement(player)
            }
            break;
        case 'LM':
            const LM = await LMcontainer.querySelector('.PlayerContainerCard');
            if (LM.childElementCount === 0) {
                LMPlayers.LMPlayers.push(player)
                await localStorage.setItem('LMPlayers', JSON.stringify(LMPlayers))
                LM.innerHTML = desplayElement(player)
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                changement.innerHTML += desplayElement(player)
            }
            break;
        case 'RM':
            const RM = await RMcontainer.querySelector('.PlayerContainerCard');
            if (RM.childElementCount === 0) {
                RMPlayers.RMPlayers.push(player)
                await localStorage.setItem('RMPlayers', JSON.stringify(RMPlayers))
                RM.innerHTML = desplayElement(player)
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                changement.innerHTML += desplayElement(player)
            }
            break;
        case 'CM':
            const playerContainerCML = await CMCardL.querySelector('.PlayerContainerCard');
            const playerContainerCMR = await CMCardR.querySelector('.PlayerContainerCard');
            if (playerContainerCML.childElementCount === 0) {
                CMLPlayers.CMLPlayers.push(player)
                await localStorage.setItem('CMLPlayers', JSON.stringify(CMLPlayers))
                playerContainerCML.innerHTML = desplayElement(player)
            } else if (playerContainerCMR.childElementCount === 0) {
                CMRPlayers.CMRPlayers.push(player)
                await localStorage.setItem('CMRPlayers', JSON.stringify(CMRPlayers))
                playerContainerCMR.innerHTML = desplayElement(player)
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                changement.innerHTML += desplayElement(player)
            }
            break;
        case 'ST':
            const playerContainerSTL = await STCardL.querySelector('.PlayerContainerCard');
            const playerContainerSTR = await STCardR.querySelector('.PlayerContainerCard');
            if (playerContainerSTL.childElementCount === 0) {
                STLPlayers.STLPlayers.push(player)
                await localStorage.setItem('STLPlayers', JSON.stringify(STLPlayers))
                playerContainerSTL.innerHTML = desplayElement(player)
            } else if (playerContainerSTR.childElementCount === 0) {
                STRPlayers.STRPlayers.push(player)
                await localStorage.setItem('STRPlayers', JSON.stringify(STRPlayers))
                playerContainerSTR.innerHTML = desplayElement(player)
            } else {
                changementPlayers.Players.push(player)
                await localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
                changement.innerHTML += desplayElement(player)
            }
            break;

        default:
            break;
    }
}

