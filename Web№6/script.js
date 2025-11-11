window.addEventListener("DOMContentLoaded", function () {
    console.log("DOM is ready!");
    let s = document.getElementsByName("selector");
    s[0].addEventListener("change", function (event) {
        let select = event.target;
        let Stol = document.getElementById("Stol");
        let Oboi = document.getElementById("Oboi");
        let Wndw = document.getElementById("Wndw");
        let place = document.getElementById("place");
        console.log(select.value);
        if (select.value == "0") { Stol.style.display = "block"; }
        else Stol.style.display = "none";
        if (select.value == "50") { Oboi.style.display = "block"; }
        else Oboi.style.display = "none";
        if (select.value == "500") {
            Wndw.style.display = "block";
            place.style.display = "block";
        }
        else {
            Wndw.style.display = "none";
            place.style.display = "none";
        }
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => { checkbox.checked = false; });
        document.querySelectorAll('input[type="radio"]').forEach(radio => { radio.checked = false; });
        document.getElementById("price").innerHTML = 0 + " p.";
    });
});

function getSelectedWoodValue() {
    const selected = document.querySelector("input[name="woodType"]:checked");
    return selected ? selected.value : null;
}
function getSelectedOboiValue() {
    const selected = document.querySelector("input[name="oboiType"]:checked");
    return selected ? selected.value : null;
}
function getSelectedStecloValues() {
    const num = /^\d+$/;
    let selectedValues = [];
    let sum = 0;
    document.querySelectorAll("#Wndw input[type="checkbox"]:checked").forEach(checkbox => {
        selectedValues.push(checkbox.value);
    });
    if (num.test(parseInt(selectedValues[0])))
        sum += parseInt(selectedValues[0]);
    if (num.test(parseInt(selectedValues[1])))
        sum += parseInt(selectedValues[1]);
    if (num.test(parseInt(selectedValues[2])))
        sum += parseInt(selectedValues[2]);
    return sum;
}

function Calculation() {
    const num = /^\d+$/;
    let select = document.querySelector("select");
    var prod = 0;
    var kol = document.getElementById("kol").value;
    var price = 0;
    let allDop;
    console.log(prod);
    console.log(kol);
    if (!num.test(kol)) {
        alert("Îøèáêà, ââåäèòå êîë-âî êîððåêòíî");
        return false;
    }

    if (num.test(getSelectedWoodValue()))
        prod += getSelectedWoodValue();
    else if (num.test(getSelectedOboiValue()))
        prod += getSelectedOboiValue();
    else if (num.test(getSelectedStecloValues())) {
        prod += getSelectedStecloValues();
        prod += 500;
    }
    price += prod * kol;

    if (document.querySelector("input[name="craftCheck1"]").checked) {
        price += parseInt(document.querySelector("input[name="craftCheck1"]").value);
    }
    if (document.querySelector("input[name="craftCheck2"]").checked) {
        price += parseInt(document.querySelector("input[name="craftCheck2"]").value);
    }

    console.log(price);
    document.getElementById("price").innerHTML = price + " p.";
    return false;

}



