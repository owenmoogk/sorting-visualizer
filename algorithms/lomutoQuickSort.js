function doLomutoQuickSort(){
    getLomutoQuickSortAnimations(numberset)
	doAnimations()
}

function getLomutoQuickSortAnimations(elements){
    animations = []
    lomutoQuickSortHelper(elements, 0, elements.length-1)
    animations.push("finished")
}

function lomutoQuickSortHelper(elements, start, end){
    if (elements.length == 1){
        return
    }
    if (start < end){
        partitionIndex = lomutoPartition(elements, start, end)
        lomutoQuickSortHelper(elements, start, partitionIndex-1)
        lomutoQuickSortHelper(elements, partitionIndex + 1, end)
    }
}

function lomutoPartition(elements, start, end){
    pivot = elements[end]
    pIndex = start

    for (i = start; i < end; i++){
        if (elements[i] <= pivot){
            lomutoSwap(i, pIndex, elements)
            pIndex++
        }
    }
    lomutoSwap(pIndex, end, elements)
    return(pIndex)
}

function lomutoSwap(a, b, arr){
    if (arr[a] != arr[b]){
        tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp
        animations.push([a, b, arr[a], arr[b]])
    }
}