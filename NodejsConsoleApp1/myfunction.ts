

function getEvenNumbers(arr: number[]): number[] {
    let arrr: number[] = [];
    for (let i = 0; i < arr.length; i++)
        if (arr[i] % 2 == 0)
            arrr.push(arr[i]);
    return arrr;
}

export default getEvenNumbers;
