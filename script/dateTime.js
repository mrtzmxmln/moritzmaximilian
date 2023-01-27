var dateTime = document.getElementById("dateTime");

function doDate() {

    var dT = new Date();

    dateTime.innerHTML = dT.toLocaleString();

}

setInterval(doDate, 1000);