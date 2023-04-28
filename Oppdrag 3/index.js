function myFumction(){
var norsk = document.getElementById("norsk").value;

var  naturfag = document.getElementById("naturfag").value;

var matematikk = document.getElementById("matematikk").value;

var engelsk = document.getElementById("engelsk").value;

var samfunnsfag = document.getElementById("samfunnsfag").value;

var kh = document.getElementById("kh").value;

var kroppsoving = document.getElementById("kroppsoving").value;

var re = document.getElementById("re");

var sum = (Number(norsk) + Number(naturfag) + Number(matematikk) + Number(engelsk) + Number(samfunnsfag) + Number(kh) + Number(kroppsoving)) / Number(7);

var karaktersnit = document.querySelector(".pp2");


karaktersnit.textContent = Number(sum).toFixed(2);


}

function resetKalkulator() {
    window.location.reload();
}
