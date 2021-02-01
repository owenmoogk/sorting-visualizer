function doInsertionSort(){
    animations = getInsertionSortAnimations(numberset)
    console.log(animations)
	doInsertionAnimations(animations)
}

function doInsertionAnimations(animations){
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

function getInsertionSortAnimations(array){
    animations = []
    for (i = 1; i < array.length; i++){
        anchor = array[i]
        j = i-1
        while (j >= 0 && anchor < array[j]){
            array[j+1] = array[j]
            animations.push([j, j+1, array[j], array[j+1]])
            j--
        }
        array[j+1] = anchor
    }
    animations.push("finished")
    return(animations)
}