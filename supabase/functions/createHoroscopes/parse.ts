export function parseHoroscopes(chatResponse: string) {
    const startIndex = chatResponse.indexOf("{"); // Find the first '{' character
    const lastIndex = chatResponse.lastIndexOf("}"); // Find the last '}' character
    const jsonString = chatResponse.slice(startIndex, lastIndex + 1); // Extract the JSON portion
    const jsonResult = JSON.parse(jsonString);
    return jsonResult.horoscopes;
}