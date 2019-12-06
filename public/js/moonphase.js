let moonphase = document.getElementById("phaseValue").value;
let moon = document.getElementById("moon");
let phase = document.getElementById("phase");

if (moonphase === 0) {
    moon.setAttribute("class", "new");
    phase.innerHTML = "New";
}
else if (moonphase > 0 && moonphase < 0.25) {
    moon.setAttribute("class", "waxingCrescent");
    phase.innerHTML = "Waxing Crescent";
}
else if (moonphase === 0.25) {
    moon.setAttribute("class", "firstQuarter");
    phase.innerHTML = "First Quarter";
}
else if (moonphase > 0.25 && moonphase < 0.50) {
    moon.setAttribute("class", "waxingGibbous");
    phase.innerHTML = "Waxing Gibbous";
}
else if (moonphase === 0.50) {
    moon.setAttribute("class", "full");
    phase.innerHTML = "Full";
}
else if (moonphase > 0.50 && moonphase < 0.75) {
    moon.setAttribute("class", "waningGibbous");
    phase.innerHTML = "Waning Gibbous";
}
else if (moonphase === 0.75) {
    moon.setAttribute("class", "thirdQuarter");
    phase.innerHTML = "Third Quarter";
}
else {
    moon.setAttribute("class", "waningCrescent");
    phase.innerHTML = "Waning Crescent";
}