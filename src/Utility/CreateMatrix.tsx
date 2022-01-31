export const Create2DArray = (size: number) => {
    let arr: any = [];
    for(let i = 0; i < size; i++) {
        arr[i] = [];
        for(let j=0; j < size; j++) {
            arr[i][j] = undefined;
        }
    }
    return arr;
};

