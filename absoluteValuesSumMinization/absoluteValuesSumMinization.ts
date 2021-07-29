export function absoluteValuesSumMinimization(a: number[]): number {
    const isEven: boolean = a.length % 2 === 0;
    const medianIndx: number = Math.floor(a.length / 2);

    return isEven ? a[medianIndx - 1] : a[medianIndx];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
