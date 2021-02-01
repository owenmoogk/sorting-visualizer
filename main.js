animations = []
numberset = []
INITCOLOR = 'blue'
SWAPCOLOR = "red"
FINALCOLOR = "green"

function resetArray(){
    numberset = []
    txt = ""
    for (let i = 0; i < 100; i++){
        // 5 is min to be visible
        numberset.push(randomIntFromInterval(5, 700))
        txt += "<div class='array-bar' style='height:"+numberset[i]+"px'></div>"
    }
    document.getElementById("bars").innerHTML = txt
}

function randomIntFromInterval(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function doMergeSort(){
    animations = getMergeSortAnimations(numberset)
    doMergeAnimations(animations)
}

async function doMergeAnimations(animations){
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? INITCOLOR : SWAPCOLOR;
            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * 5);
        } else {
            setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
            }, i * 5);
        }
    }
    done = false
    while(done){
        done = true
        bars = document.getElementsByClassName('array-bar')
        for(i in bars){
            if (bars[i].style.backgroundColor == INITCOLOR){
                done = false
                break
            }
        }
        console.log("jere")
    }
}