function doSelectionSort(){
    animations = getSelectionSortAnimations(numberset)
    console.log(animations)
	doAnimations(animations)
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
            animations.push([j,j, array[j], array[j]])
        }
        tmp = array[i]
        array[i] = array[lowestIndex]
        array[lowestIndex] = tmp
        animations.push([i, lowestIndex, array[i], array[lowestIndex]])
    }
    animations.push("finished")
    return(animations)
}