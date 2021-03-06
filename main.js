numberset = []
animations = []
INITCOLOR = 'blue'
SWAPCOLOR = "red"
FINALCOLOR = "#90EE90" // light green
baseAnimationSpeed = 5
animationSpeed = baseAnimationSpeed
numOfBars = 150 // number of bars in the array
soundsOn = true

function resetArray(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    numOfBars = parseInt(document.getElementById("numofbars").value)
    if (Number.isInteger(numOfBars) && numOfBars < vw/2 && numOfBars > 1){
        numberset = []
        txt = ""
        width = Math.floor(vw / numOfBars)-2
        margin = 1
        if (width <= 1){
            width = Math.floor(vw / numOfBars)
            margin = 0
        }
        for (let i = 0; i < numOfBars; i++){
            numberset.push(randomIntFromInterval(5, 600))
            txt += "<div class='array-bar' style='height:"+numberset[i]+"px; width:"+width+"px; margin: 0 "+margin+"px'></div>"
        }
        document.getElementById("bars").innerHTML = txt
        document.getElementById("numofbars").style.border = "none"
    }
    else{
        document.getElementById("numofbars").style.border = "1px solid red"
        return
    }
}

function reversedArray(){
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    numOfBars = parseInt(document.getElementById("numofbars").value)
    if (Number.isInteger(numOfBars) && numOfBars < vw/2 && numOfBars > 1){
        numberset = []
        txt = ""
        width = Math.floor(vw / numOfBars)-2
        margin = 1
        if (width <= 1){
            width = Math.floor(vw / numOfBars)
            margin = 0
        }
        for (let i = numOfBars; i > 5; i--){
            numberset.push(i)
        }
        for (let i = 0; i < numOfBars; i++){
            txt += "<div class='array-bar' style='height:"+numberset[i]+"px; width:"+width+"px; margin: 0 "+margin+"px'></div>"
        }
        document.getElementById("bars").innerHTML = txt
        document.getElementById("numofbars").style.border = "none"
    }
    else{
        document.getElementById("numofbars").style.border = "1px solid red"
        return
    }
}

function enableButtons(){
    document.getElementById("multiplier").disabled = false
    document.getElementById("sorting-algorithm").disabled = false
    document.getElementById("go").disabled = false
    document.getElementById("reset").disabled = false
    document.getElementById("reversedArray").disabled = false
    document.getElementById("numofbars").disabled = false
}

function doSort(){
    algorithm = document.getElementById("sorting-algorithm").value
    multiplier = document.getElementById("multiplier").value
    animationSpeed = baseAnimationSpeed * (1/multiplier)

    document.getElementById("multiplier").disabled = true
    document.getElementById("sorting-algorithm").disabled = true
    document.getElementById("go").disabled = true
    document.getElementById("reset").disabled = true
    document.getElementById("reversedArray").disabled = true
    document.getElementById("numofbars").disabled = true

    if (algorithm == "merge"){doMergeSort()}
    else if (algorithm == "heap"){doHeapSort()}
    else if (algorithm == "hoare-quick"){doHoareQuickSort()}
    else if (algorithm == "lomuto-quick"){doLomutoQuickSort()}
    else if (algorithm == "bubble"){doBubbleSort()}
    else if (algorithm == "insertion"){doInsertionSort()}
    else if (algorithm == "selection"){doSelectionSort()}
    else if (algorithm == "optimized-selection"){doOptimizedSelectionSort()}
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function toggleSounds(){
    if (soundsOn){
        document.getElementById("mute").innerHTML = "🔊"
        soundsOn = false
    }
    else{
        document.getElementById("mute").innerHTML = "🔈"
        soundsOn = true
    }
}