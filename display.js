export function desplayElement(item) {
    if(item.position === 'GK'){
        return `
    <div id="cardChangements">
        <div class="editContainer">
               <button><i class="fa-solid fa-trash" style="color: #ffffff;"></i>
            </button>
             <button><i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
            </button>
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
        <img src="src/assets/img/badge_gold.webp" alt="" id="pofilePhoto">
    </div>

    `
    }else{
      return `
    <div id="cardChangements">
        <div class="editContainer">
               <button><i class="fa-solid fa-trash" style="color: #ffffff;"></i>
            </button>
             <button><i class="fa-regular fa-pen-to-square" style="color: #ffffff;"></i>
            </button>
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