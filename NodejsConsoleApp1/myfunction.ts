function getParams(sentence: string): Record<string, string> {
    return sentence.split('&').reduce((acc, part) => (acc[part.split('=')[0]] = part.split('=')[1], acc), {} as Record<string, string>);
}


export default getParams;
