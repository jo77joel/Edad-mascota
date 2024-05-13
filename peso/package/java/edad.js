function edadPerro() {
    let pe = parseFloat(document.getElementById("1").value);
    let pee = 21 + ((pe-2)*4);
    pee = pee.toFixed(0);
    document.getElementById("res").innerHTML = "Su edad de la mascota es: " + pee + " Años"
}
function edadPerro2() {
    let ga = parseFloat(document.getElementById("2").value);
    let ge = 20 + ((ga-2)*4);
    ge = ge.toFixed(0);
    document.getElementById("res2").innerHTML = "Su edad de la mascota es: " + ge + " Años"
}
function edadPerro3() {
    let pe2 = parseFloat(document.getElementById("3").value);
    let pee2 = 7*pe2;
    pee2 = pee2.toFixed(0);
    document.getElementById("res3").innerHTML = "Su edad de la mascota en años humanos es: " + pee2 + " Años"
}