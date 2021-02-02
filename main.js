numberset = []
INITCOLOR = 'blue'
SWAPCOLOR = "red"
FINALCOLOR = "#90EE90" //light green
defaultAnimationSpeed = 5
animationSpeed = defaultAnimationSpeed
numOfBars = 150 //number of bars in the array

function resetArray(){
    numberset = []
    txt = ""
    for (let i = 0; i < numOfBars; i++){
        numberset.push(randomIntFromInterval(5, 600))
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

function doSort(){
    algorithm = document.getElementById("sorting-algorithm").value
    multiplier = document.getElementById("multiplier").value
    animationSpeed = defaultAnimationSpeed * (1/multiplier)

    if (algorithm == "merge"){doMergeSort()}
    else if (algorithm == "bubble"){doBubbleSort()}
    else if (algorithm == "insertion"){doInsertionSort()}
    else if (algorithm == "selection"){doSelectionSort()}
    else if (algorithm == "optimized-selection"){doOptimizedSelectionSort()}
}