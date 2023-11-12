const filterAnagrams = (word: string, anagrms: string[]): string[] => anagrms.filter((anagrama) => anagrama.split('').sort().join('') === word.split('').sort().join(''));

export default filterAnagrams;