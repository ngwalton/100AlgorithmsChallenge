export function addTwoDigits(n: number): number {
    let [n1, n2]: number[] = n.toString().split('')
        .map((i: string) => Number(i));
    return n1 + n2;
}

console.log(addTwoDigits(29));
