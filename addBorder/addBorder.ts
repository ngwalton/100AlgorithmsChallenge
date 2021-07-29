export function addBorder(picture: string[]): string[] {
    const char: string = "*";
    let result: string[] = picture.map(str => char + str + char);
    const topBottom: string = char.repeat(result[0].length);

    return [topBottom, ...result, topBottom];
}

console.log(addBorder(["abc", "ded"]));
