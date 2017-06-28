var clockModeShort = false

function formatDate() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    if(clockModeShort){
        document.getElementById("clock").innerHTML = h + ":" + m;
    }
    else {
        document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
    }

    var t = setTimeout(function(){ formatDate(clockModeShort) }, 0);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function toggleClockPicker(){
    var x = document.getElementById('clock');
    x.classList.toggle("shortTime");
    x.classList.toggle("longTime");
    clockModeShort = !clockModeShort
    formatDate();
}

window.addEventListener('load', formatDate, false);
document.getElementById("clock").addEventListener('click', toggleClockPicker, false);