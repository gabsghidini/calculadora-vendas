const result = document.querySelector("#resultado")
const radio = document.querySelectorAll(".radio")

function calculadora(e) {
    e.preventDefault();
    let variavel = 0

    const input = document.getElementById("insert_value").value

    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked == true) {
            variavel = radio[i].value
        }
    }

    switch(variavel) {
        case "5":
            result.innerHTML = `R$ ${(input / 0.95).toFixed(2)}`
            break;
        case "10":
            result.innerHTML = `R$ ${(input / 0.9).toFixed(2)}`
            break;
        case "15":
            result.innerHTML = `R$ ${(input / 0.85).toFixed(2)}`
            break;
        case "20":
            result.innerHTML = `R$ ${(input / 0.80).toFixed(2)}`
            break;
        case "25":
            result.innerHTML = `R$ ${(input / 0.75).toFixed(2)}`
            break;
        case "30":
            result.innerHTML = `R$ ${(input / 0.7).toFixed(2)}`
            break;
        case "35":
            result.innerHTML = `R$ ${(input / 0.65).toFixed(2)}`
            break;
        case "40":
            result.innerHTML = `R$ ${(input / 0.60).toFixed(2)}`
            break;
        case "45":
            result.innerHTML = `R$ ${(input / 0.55).toFixed(2)}`
            break;
        case "50":
            result.innerHTML = `R$ ${(input / 0.50).toFixed(2)}`
            break;
        default:
            result.innerText = "Nenhuma porcentagem escolhida!"
    }
}