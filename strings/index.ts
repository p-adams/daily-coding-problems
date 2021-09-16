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

function matchingPrefix(s1: string, s2: string) {
  let match = "";
  for (let i = 0, j = 0; i <= s1.length - 1 && j <= s2.length - 1; i++, j++) {
    if (s1[i] != s2[j]) {
      break;
    }
    match += s1[i];
  }
  return match;
}

export function longestCommonPrefix(strs: string[]) {
  let result = strs[0];
  for (let i = 1; i <= strs.length - 1; i++) {
    result = matchingPrefix(result, strs[i]);
  }
  return result;
}
