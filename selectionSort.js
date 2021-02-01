function doSelectionSort(){
    animations = getSelectionSortAnimations(numberset)
    console.log(animations)
	doSelectionAnimations(animations)
}

function doSelectionAnimations(animations){
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

function getSelectionSortAnimations(array){
    animations = []
    for (i = 0; i < array.length; i++){
        lowest = array[i]
        lowestIndex = i
        for (j = i; j < array.length; j++){
            if (array[j] < lowest){
                lowest = array[j]
                lowestIndex = j
            }
        }
        tmp = array[i]
        array[i] = array[lowestIndex]
        array[lowestIndex] = tmp
        animations.push([i, lowestIndex, array[i], array[lowestIndex]])
    }
    animations.push("finished")
    return(animations)
}