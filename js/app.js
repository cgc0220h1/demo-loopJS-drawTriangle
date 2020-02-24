function drawTriangleUp() {
    let loopCycle = 1;
    let html = "";
    while (loopCycle < 100) {
        html += "<hr width = " + loopCycle + "%>";
        loopCycle++;
    }
    document.getElementById('drawResult').innerHTML = html;
}

function drawTriangleDown() {
    let loopCycle = 100;
    let html = "";
    while (loopCycle > 0) {
        html += "<hr width = " + loopCycle + "%>";
        loopCycle--;
    }
    document.getElementById('drawResult').innerHTML = html;
}