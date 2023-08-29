function expandeGaveta() {
    let gavetaAberta = document.getElementsByClassName('menuLateralAberto')[0]
    let gavetaFechada = document.getElementsByClassName('menuLateralOculto')[0]

    if (gavetaAberta.style.display == "block") {

        gavetaFechada.style.display = "block"
        gavetaAberta.style.display = "none"

    }
    else {
        gavetaFechada.style.display = "none"
        gavetaAberta.style.display = "block"
    }
}