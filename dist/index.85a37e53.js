'use-strict';
const btnBack = document.querySelector('.minus');
const btnForward = document.querySelector('.plus');
const currentStation = document.querySelector('.playing-now');
let stationIndex = 0;
const stationData = {
    stationName: [],
    stationFreq: []
};
const addStations = function(name, fm) {
    stationData.stationName.push(...name);
    stationData.stationFreq.push(...fm);
};
//Adding stations
addStations([
    'M1',
    'RC'
], [
    '100.6',
    '99.5'
]);
addStations([
    'Pukas FM',
    'PowerHitRadio'
], [
    '95,96',
    '100,00'
]);
addStations([
    'RelaxFM',
    'Opus'
], [
    '102,45',
    '99,4'
]);
btnBack.addEventListener('click', function() {
    if (stationIndex == 0) {
        currentStation.innerHTML = stationData.stationName[stationData.stationName.length - 1];
        return stationIndex = stationData.stationName.length - 1;
    } else {
        currentStation.innerHTML = stationData.stationName[stationIndex - 1];
        return stationIndex = stationIndex - 1;
    }
});
btnForward.addEventListener('click', function() {
    if (stationIndex == stationData.stationName.length - 1) {
        currentStation.innerHTML = stationData.stationName[0];
        return stationIndex = 0;
    } else {
        currentStation.innerHTML = stationData.stationName[stationIndex + 1];
        return stationIndex = stationIndex + 1;
    }
});

//# sourceMappingURL=index.85a37e53.js.map
