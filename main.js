numberset = []
INITCOLOR = 'blue'
SWAPCOLOR = "red"
FINALCOLOR = "#90EE90" //light green
animationSpeed = 5
numOfBars = 150 //number of bars in the array

function resetArray(){
    numberset = []
    txt = ""
    for (let i = 0; i < numOfBars; i++){
        numberset.push(randomIntFromInterval(5, 700))
        txt += "<div class='array-bar' style='height:"+numberset[i]+"px'></div>"
    }
    document.getElementById("bars").innerHTML = txt
}

function doFinishAnimation(){
    const arrayBars = document.getElementsByClassName("array-bar")
    for (let i = 0; i < arrayBars.length; i++){
        setTimeout(() => {
            arrayBars[i].style.backgroundColor = FINALCOLOR
        }, i * animationSpeed * 2)
    }
}