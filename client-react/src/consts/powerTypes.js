export const POWER_TYPES_ZH = {
    1: '汽油(Petrol)',
    2: '柴油(Diesel)',
    3: 'HEV(油電混合)',
    4: 'PHEV(插電式油電混合)',
    5: 'EV(電動車)',
    6: 'MHEV(輕油電混合)'
};

export const IsEV = (index) => {
    if (index === 5) {
        return true;
    }
    else {
        return false;
    } 
};