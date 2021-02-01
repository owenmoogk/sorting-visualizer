animations = []
numberset = []
INITCOLOR = 'blue'
SWAPCOLOR = "red"
FINALCOLOR = "#90EE90"
animationSpeed = 5

function resetArray(){
    numberset = []
    txt = ""
    for (let i = 0; i < 100; i++){
        numberset.push(randomIntFromInterval(5, 700))
        txt += "<div class='array-bar' style='height:"+numberset[i]+"px'></div>"
    }
    document.getElementById("bars").innerHTML = txt
}