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
            if (data[i].value.length !== 0 ) {
                return false; 
            }
        }
        return true; 
    }

}
