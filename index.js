// 폼
var inputText = function () {
    var wannabe = document.querySelector("#inputWannabe").value;
    document.querySelector("#resultWannabe").innerText= wannabe;
    document.querySelector("#inputWannabe").value="";

    var wannabeTime = document.querySelector("#inputTime").value;
    document.querySelector("#resultTime").innerText= parseInt(10000/wannabeTime);
    document.querySelector("#inputTime").value="";
    document.getElementById('resultTime').scrollIntoView();
}

// 모달
let 모달 = false;
document.querySelector('.btn-open').addEventListener('click', function() {
    if (모달 == false) {
        document.querySelector('.modal-background').style.display = 'flex';
        모달 = true;
    }
});