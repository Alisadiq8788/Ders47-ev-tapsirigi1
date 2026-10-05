function əlavəEt() {
    let bildiris = document.createElement("div");

    bildiris.innerHTML = "Yeni bildiriş əlavə edildi";

    bildiris.style.backgroundColor = "gray";
    bildiris.style.padding = "10px";
    bildiris.style.marginTop = "20px";

    document.getElementById("bildirisler").append(bildiris);
}

function vacipEt() {
    let bildirisler = document.getElementById("bildirisler");

    let sonBildiris = bildirisler.lastChild;

    sonBildiris.style.backgroundColor = "red";
}