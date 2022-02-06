window.onload = iniciar();

/* 
1010 = 2^3 + 0^2 + 2^1 + 0 = 10
1111 = 2^3 + 2^2 + 2^1 + 2^0 = 15
*/

function iniciar() {
    let btnConvert = document.getElementById("btnConvert");
    btnConvert.addEventListener("click", clickBtnConvert);
}

function clickBtnConvert() {
    let txtBin = document.getElementById("txtBin").value;
    let valoresAceptados = /^[0-9]+$/;
    if (txtBin.match(valoresAceptados)) {
        let txtResult = document.getElementById("txtResult");
        let result = parseInt(txtBin.charAt(txtBin.length - 1), 10);
        let length = txtBin.length - 1;
        for (let i = 0; i < txtBin.length - 1; i++) {
            result += Math.pow(2 * txtBin.charAt(i), length);
            length--;
        }
        txtResult.value = result;
    } else{
        let txtWarning = document.getElementById("txtWarning");
        txtWarning.innerText = "Enter 1 or 0";
    }
}