document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM �����! ����������� ����� ��� ���������");
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
        alert("������, ������� ���-�� ���������");
        return false;
    }
    price = prod * kol;
    console.log(price);
    document.getElementById("price").innerHTML = price + " p.";
    return false;
}