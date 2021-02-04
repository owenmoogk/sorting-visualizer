function doBubbleSort(){
    animations = getBubbleSortAnimations(numberset)
	doAnimations(animations)
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