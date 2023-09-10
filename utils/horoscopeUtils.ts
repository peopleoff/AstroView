/**
 * Splits a sign string into its sign and date components.
 *
 * @param {string} sign - The sign string to be split (e.g., "Leo (July 23 - August 22)").
 * @returns {{ sign: string, date: string }} An object containing the sign and date.
 */
export function splitSign(sign: string = "") {
  //Split the sign from sign & date into just the sign and date in seperate values
  const [first, ...rest] = sign.split(" ");
  //Join the remainder back into one string and replace the ()
  const remainder = rest.join(" ").replaceAll("(", "").replaceAll(")", "");
  return {
    sign: first,
    date: remainder,
  };
}

/**
 * Formats a horoscope text to create a meta description with a maximum length of 170 characters.
 *
 * @param {string} horoscope - The horoscope text to be formatted.
 * @returns {string} A formatted meta description with a maximum length of 170 characters.
 */
export function formatDescription(horoscope: string) {
  //170 characters is max length for a meta description
  const trimLength = horoscope.slice(0, 170);
  //split on all the sentences
  const splitSentences = trimLength.split(".");
  //remove the last setence so there is no cut off sentence in the description
  splitSentences.pop();
  //Join the remaining array back into one string
  const description = splitSentences.join(".").trim();
  return description;
}
