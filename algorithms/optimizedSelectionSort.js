function doOptimizedSelectionSort(){
    animations = getOptimizedSelectionSortAnimations(numberset)
    console.log(animations)
	doOptimizedSelectionAnimations(animations)
}

function doOptimizedSelectionAnimations(animations){
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

function getOptimizedSelectionSortAnimations(array){
    animations = []
    for (i = 0; i < Math.floor(array.length/2); i++){
        lowest = array[i]
        highest = array[i]
        lowestIndex = i
        highestIndex = i
        for (j = i; j < array.length - i; j++){
            if (array[j] < lowest){
                lowest = array[j]
                lowestIndex = j
            }
            else if (array[j] > highest){
                highest = array[j]
                highestIndex = j
            }
            animations.push([j, j, array[j], array[j]])
        }
        if (highestIndex > lowestIndex){
            array.splice(highestIndex,1)
            array.splice(lowestIndex,1)
        }
        else{
            array.splice(lowestIndex, 1)
            array.splice(highestIndex, 1)
        }
        array.splice(i, 0, lowest)
        array.splice(array.length-i, 0, highest)

        animations.push([i, array.length-i-1, array[i], array[array.length-i-1]])
    }
    animations.push("finished")
    console.log(array)
    return(animations)
}