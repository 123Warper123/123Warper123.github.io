document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM готов! Изображения могут еще грузиться");
});
function Calculation() {
    const num = /^\d+$/;
    const select = document.querySelector("select");
    var prod = select.value;
    var kol = document.getElementById("kol").value;
    var price;
    console.log(prod);
    console.log(kol);
    if (!num.test(kol)) {
        alert("Ошибка, введите кол-во корректно");
        return false;
    }
    price = prod * kol;
    console.log(price);
    document.getElementById("price").innerHTML = price + " p.";
    return false;
}