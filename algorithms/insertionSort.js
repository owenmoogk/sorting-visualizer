function doInsertionSort(){
    animations = getInsertionSortAnimations(numberset)
    console.log(animations)
	doAnimations(animations)
}

function getInsertionSortAnimations(array){
    animations = []
    for (i = 1; i < array.length; i++){
        p = i
        j = i-1
        while (j >= 0 && array[j] > array[p]){
            tmp = array[j]
            array[j] = array[p]
            array[p] = tmp
            animations.push([j, p, array[j], array[p]])
            j--
            p--
        }
    }
    animations.push("finished")
    console.log(array)
    return(animations)
}