function doBubbleSort(){
    animations = getBubbleSortAnimations(numberset)
    console.log(animations)
	doBubbleAnimations(animations)
}

function doBubbleAnimations(animations){
    for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        setTimeout(() => {
            if (animations[i] == "finished"){
                doFinishAnimation()
            }
        }, i * animationSpeed);
        const barOneIndex = animations[i][0]
        const barTwoIndex = animations[i][1]
        const barOneHeight = animations[i][2]
        const barTwoHeight = animations[i][3]
        setTimeout(() => {
            arrayBars[barOneIndex].style.backgroundColor = SWAPCOLOR;
            arrayBars[barTwoIndex].style.backgroundColor = SWAPCOLOR;
        }, i * animationSpeed);
        setTimeout(() => {
            arrayBars[barOneIndex].style.height = `${barOneHeight}px`;
            arrayBars[barTwoIndex].style.height = `${barTwoHeight}px`;
        }, i * animationSpeed);
        setTimeout(() => {
            arrayBars[barOneIndex].style.backgroundColor = INITCOLOR;
            arrayBars[barTwoIndex].style.backgroundColor = INITCOLOR;
        }, i * animationSpeed + animationSpeed);
	}
}

function doFinishAnimation(){
    const arrayBars = document.getElementsByClassName("array-bar")
    for (let i = 0; i < arrayBars.length; i++){
        setTimeout(() => {
            arrayBars[i].style.backgroundColor = FINALCOLOR
        }, i * animationSpeed * 2)
    }
}

function getBubbleSortAnimations(array){
    animations = []
    for (j = 0; j < array.length-1; j++){
        swapped = false
        for(i = 0; i < array.length-1-j; i++){
            if (array[i] > array[i+1]){
                tmp = array[i]
                array[i] = array[i+1]
                array[i+1] = tmp
                animations.push([i, i+1, array[i], array[i+1]])
                swapped = true
            }
        }
        if (!swapped){
            break
        }
    }
    animations.push("finished")
    return(animations)
}