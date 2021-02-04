function doHeapSort(){
    getHeapSortAnimations(numberset)
	doAnimations()
}

function getHeapSortAnimations(arr){
    animations = []
    length = arr.length
    for (i = Math.floor(length/2)-1; i > -1; i--){
        heapify(arr, length, i)
    }
    for (i = length-1; i > 0; i--){
        [arr[i], arr[0]] = [arr[0], arr[i]]
        animations.push([i, 0, arr[i], arr[0]])
        heapify(arr, i, 0)
    }
    animations.push("finished")
}

function heapify(arr, length, i){
    largest = i
    left = (2 * i) + 1
    right = (2 * i) + 2

    if (left < length && arr[i] < arr[left]){
        largest = left
    }
    if (right < length && arr[largest] < arr[right]){
        largest = right
    }
    if (largest != i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, length, largest)
    }
    animations.push([i, largest, arr[i], arr[largest]])
}