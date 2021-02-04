function doHoareQuickSort(){
    getHoareQuickSortAnimations(numberset)
	doAnimations()
}

function getHoareQuickSortAnimations(elements){
    animations = []
    hoareQuickSortHelper(elements, 0, elements.length-1)
    animations.push("finished")
}

function hoareQuickSortHelper(elements, start, end){
    if (start < end){
        partitionIndex = hoarePartition(elements, start, end)
        hoareQuickSortHelper(elements, start, partitionIndex-1)
        hoareQuickSortHelper(elements, partitionIndex + 1, end)
    }
}

function hoarePartition(elements, start, end){
    pivotIndex = start
    pivot = elements[pivotIndex]

    while (start < end){
        while (start < elements.length && elements[start] <= pivot){
            start++
        }
        while (end >= 0 && elements[end] > pivot){
            end--
        }
        if (start < end){
            hoareSwap(start, end, elements)
        }
    }
    hoareSwap(pivotIndex, end, elements)
    return(end)
}

function hoareSwap(a, b, arr){
    if (arr[a] != arr[b]){
        tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp
        animations.push([a, b, arr[a], arr[b]])
    }
}