function repeat(text: string, count: number) {
    let str: string = "";
    for (let i = 0; i < count; i++) {
        str += text;
    }
    return str;
}


export default repeat;