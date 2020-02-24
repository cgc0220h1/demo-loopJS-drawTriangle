function drawTriangle() {
    let loopCycle = 1;
    let html = "";
    while (loopCycle < 100) {
        html += "<hr width = " + loopCycle + "%>";
        loopCycle++;
    }
    document.getElementById('drawResult').innerHTML = html;
}