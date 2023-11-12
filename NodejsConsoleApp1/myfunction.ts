function getHiddenCard(number: string, count?: number): string {
    if (count >= 1)
        return '*'.repeat(count) + number.substring(12);
    else
        return '*'.repeat(4) + number.substring(12);
}


export default getHiddenCard;