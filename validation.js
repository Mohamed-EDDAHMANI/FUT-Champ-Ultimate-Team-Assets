export function inputValidat(data) {
    if (data.id === 'name' || data.id === 'nationality' || data.id === 'club') {
        const regex = /^[A-Za-z\s]{1,20}$/;
        return !regex.test(data.value);
    }

    if (data.id === 'numInputs') {
        const inputs = data.querySelectorAll('input[type="number"]');
        for (const input of inputs) {
            const numValue = input.value;
            if (numValue === '' || numValue <= 0 || numValue >= 100) {
                return true;
            }
        }
        return false;
    }

    if (data.id === 'numInputsGK') {
        const inputs = data.querySelectorAll('input[type="number"]');
        for (const input of inputs) {
            const numValue = input.value;
            if (numValue === '' || numValue <= 0 || numValue >= 100) {
                return true;
            }
        }
        return false;
    }

    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            if (data[i].value.length !== 0) {
                return false;
            }
        }
        return true;
    }
}

export function createObject(position, container) {

    let playerData
    if (position === 'GK') {
        playerData = {
            name: container.querySelector('.infoContainer h4').textContent,
            photo: container.querySelector('.picDiv img').src,
            position: container.dataset.position,
            flag: container.querySelector('.flag img').src,
            logo: container.querySelector('.logoitem img').src,
            rating: container.querySelector('p[name="rating"]').textContent,
            diving: container.querySelector('p[name="diving"]').textContent,
            handling: container.querySelector('p[name="handling"]').textContent,
            kicking: container.querySelector('p[name="kicking"]').textContent,
            reflexes: container.querySelector('p[name="reflexes"]').textContent,
            speed: container.querySelector('p[name="speed"]').textContent,
            positioning: container.querySelector('p[name="positioning"]').textContent
        }
        return playerData
    } else {
        playerData = {
            name: container.querySelector('.infoContainer h4').textContent,
            photo: container.querySelector('.picDiv img').src,
            position: container.dataset.position,
            flag: container.querySelector('.flag img').src,
            logo: container.querySelector('.logoitem img').src,
            rating: container.querySelector('p[name="rating"]').textContent,
            pace: container.querySelector('p[name="pace"]').textContent,
            shooting: container.querySelector('p[name="shooting"]').textContent,
            passing: container.querySelector('p[name="passing"]').textContent,
            dribbling: container.querySelector('p[name="dribbling"]').textContent,
            defending: container.querySelector('p[name="defending"]').textContent,
            physical: container.querySelector('.physicalContainer p').textContent
        }
        return playerData
    }
}

export function addToLocalStorage(player, position) {
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
    console.log(position)

    switch (position) {
        case 'GK':
            GKPlayers.GKPlayers.splice(0, 0, player)
            localStorage.setItem('GKPlayers', JSON.stringify(GKPlayers))
            break;
    
        case 'CBL':
            CBLPlayers.CBLPlayers.splice(0, 0, player)
            localStorage.setItem('CBLPlayers', JSON.stringify(CBLPlayers))
            break;
    
        case 'CBR':
            CBRPlayers.CBRPlayers.splice(0, 0, player)
            localStorage.setItem('CBRPlayers', JSON.stringify(CBRPlayers))
            break;
    
        case 'LB':
            LBPlayers.LBPlayers.splice(0, 0, player)
            localStorage.setItem('LBPlayers', JSON.stringify(LBPlayers))
            break;
    
        case 'RB':
            RBPlayers.RBPlayers.splice(0, 0, player)
            localStorage.setItem('RBPlayers', JSON.stringify(RBPlayers))
            break;
    
        case 'LW':
            LMPlayers.LMPlayers.splice(0, 0, player)
            localStorage.setItem('LMPlayers', JSON.stringify(LMPlayers))
            break;
    
        case 'RW':
            RMPlayers.RMPlayers.splice(0, 0, player)
            localStorage.setItem('RMPlayers', JSON.stringify(RMPlayers))
            break;
    
        case 'CML':
            CMLPlayers.CMLPlayers.splice(0, 0, player)
            localStorage.setItem('CMLPlayers', JSON.stringify(CMLPlayers))
            break;
    
        case 'CMR':
            CMRPlayers.CMRPlayers.splice(0, 0, player)
            localStorage.setItem('CMRPlayers', JSON.stringify(CMRPlayers))
            break;
    
        case 'STL':
            STLPlayers.STLPlayers.splice(0, 0, player)
            localStorage.setItem('STLPlayers', JSON.stringify(STLPlayers))
            break;
    
        case 'STR':
            STRPlayers.STRPlayers.splice(0, 0, player)
            localStorage.setItem('STRPlayers', JSON.stringify(STRPlayers))
            break;
    
        case 'changementPlayers':
            changementPlayers.Players.splice(0, 0, player)
            localStorage.setItem('changementPlayers', JSON.stringify(changementPlayers))
            break;
    
        default:
            break;
    }

}
