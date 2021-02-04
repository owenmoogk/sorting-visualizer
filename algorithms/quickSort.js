function doQuickSort(){
    getQuickSortAnimations(numberset)
	doAnimations()
}

function getQuickSortAnimations(elements){
    animations = []
    quickSortHelper(elements, 0, elements.length-1)
    animations.push("finished")
}

function quickSortHelper(elements, start, end){
    if (start < end){
        partitionIndex = partition(elements, start, end)
        quickSortHelper(elements, start, partitionIndex-1)
        quickSortHelper(elements, partitionIndex + 1, end)
    }
}

function partition(elements, start, end){
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
            swap(start, end, elements)
        }
    }
    swap(pivotIndex, end, elements)
    return(end)
}

function swap(a, b, arr){
    if (arr[a] != arr[b]){
        tmp = arr[a]
        arr[a] = arr[b]
        arr[b] = tmp
        animations.push([a, b, arr[a], arr[b]])
    }
}