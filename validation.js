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
        const regex = /https?:\/\/[\w-]+(?:\.[\w-]+)+\/[\w\/.-]+\.(?:jpg|jpeg|png|gif|bmp|webp)/;
        for (let i = 0; i < data.length; i++) {
            return !regex.test(data[i].value);
        }
    }
}

export function createObject(position, container) {
    console.log(container)
    let playerData
    if (position === 'GK') {
        playerData = {
            id: container.id,
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
            id: container.id,
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
    const GKPlayers = JSON.parse(localStorage.getItem('GKPlayers')) || { Players: [] };
    const changementPlayers = JSON.parse(localStorage.getItem('changementPlayers')) || { Players: [] };
    const CBLPlayers = JSON.parse(localStorage.getItem('CBPlayers')) || { Players: [] };
    const CBRPlayers = JSON.parse(localStorage.getItem('CBRPlayers')) || { Players: [] };
    const LBPlayers = JSON.parse(localStorage.getItem('LBPlayers')) || { Players: [] };
    const RBPlayers = JSON.parse(localStorage.getItem('RBPlayers')) || { Players: [] };
    const LMPlayers = JSON.parse(localStorage.getItem('LMPlayers')) || { Players: [] };
    const RMPlayers = JSON.parse(localStorage.getItem('RMPlayers')) || { Players: [] };
    const CMLPlayers = JSON.parse(localStorage.getItem('CMLPlayers')) || { Players: [] };
    const CMRPlayers = JSON.parse(localStorage.getItem('CMRPlayers')) || { Players: [] };
    const STLPlayers = JSON.parse(localStorage.getItem('STLPlayers')) || { Players: [] };
    const STRPlayers = JSON.parse(localStorage.getItem('STRPlayers')) || { Players: [] };

    switch (position) {
        case 'GK':
            GKPlayers.Players.splice(0, 0, player)
            localStorage.setItem('GKPlayers', JSON.stringify(GKPlayers))
            break;
    
        case 'CBL':
            CBLPlayers.Players.splice(0, 0, player)
            localStorage.setItem('CBLPlayers', JSON.stringify(CBLPlayers))
            break;
    
        case 'CBR':
            CBRPlayers.Players.splice(0, 0, player)
            localStorage.setItem('CBRPlayers', JSON.stringify(CBRPlayers))
            break;
    
        case 'LB':
            LBPlayers.Players.splice(0, 0, player)
            localStorage.setItem('LBPlayers', JSON.stringify(LBPlayers))
            break;
    
        case 'RB':
            RBPlayers.Players.splice(0, 0, player)
            localStorage.setItem('RBPlayers', JSON.stringify(RBPlayers))
            break;
    
        case 'LW':
            LMPlayers.Players.splice(0, 0, player)
            localStorage.setItem('LMPlayers', JSON.stringify(LMPlayers))
            break;
    
        case 'RW':
            RMPlayers.Players.splice(0, 0, player)
            localStorage.setItem('RMPlayers', JSON.stringify(RMPlayers))
            break;
    
        case 'CML':
            CMLPlayers.Players.splice(0, 0, player)
            localStorage.setItem('CMLPlayers', JSON.stringify(CMLPlayers))
            break;
    
        case 'CMR':
            CMRPlayers.Players.splice(0, 0, player)
            localStorage.setItem('CMRPlayers', JSON.stringify(CMRPlayers))
            break;
    
        case 'STL':
            STLPlayers.Players.splice(0, 0, player)
            localStorage.setItem('STLPlayers', JSON.stringify(STLPlayers))
            break;
    
        case 'STR':
            STRPlayers.Players.splice(0, 0, player)
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
