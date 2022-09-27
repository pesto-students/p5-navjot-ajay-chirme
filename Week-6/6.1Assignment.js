function subArray(arr){

    let arrCurrent=arr[0];
    let arrGlobal=arr[0];

    for(let i = 1; i< arr.length; i++){

        arrGlobal=Math.max(arr[i],arrCurrent+arr[i])

        if(arrCurrent > arrGlobal){
            arrGlobal=arrCurrent;
        }

    }
    return arrGlobal;
}

console.log(subArray([-2,3,4,5,-6,9]));