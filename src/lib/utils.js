/**
 * Utility function to merge classnames conditionally
 * @param {...any} inputs - Class names to merge
 * @returns {string} Merged class names
 */
export function cn(...inputs) {
  return inputs
    .flat()
    .filter((x) => typeof x === "string")
    .join(" ")
    .trim()
}
