export function capitalize(string: string) {
    const lettersArray = string.split('');
    lettersArray[0] = lettersArray[0].toUpperCase();
    const result = lettersArray.join('');
    return result;
}

export function cleanDescription(string: string): string {
    return string.replace('\f', ' ');
}
