export function validParens(p: string): boolean {
  const seen: string[] = [];
  const openingMarks = ["(", "{", "["];
  const closingMarks = [")", "}", "]"];
  for (const ch of p) {
    const openIndex = openingMarks.findIndex((c) => c === ch);
    const closeIndex = closingMarks.findIndex((c) => c === ch);
    const top = seen[seen.length - 1];
    if (openIndex != -1) {
      seen.push(ch);
    } else if (closingMarks[closeIndex] && top === openingMarks[closeIndex]) {
      seen.pop();
    } else return false;
  }
  return !seen.length;
}

export function longestCommonPrefix(strs: string[]) {
  return "";
}
