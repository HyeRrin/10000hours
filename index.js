var inputText = function () {
    var wannabe = document.querySelector("#inputWannabe").value;
    document.querySelector("#resultWannabe").innerText= wannabe;
    document.querySelector("#inputWannabe").value="";

    var wannabeTime = document.querySelector("#inputTime").value;
    document.querySelector("#resultTime").innerText= parseInt(10000/wannabeTime);
    document.querySelector("#inputTime").value="";
}