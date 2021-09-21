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

export function lengthOfLongestSubstring(s: string): number {
  const seen: boolean[] = Array(256).fill(false);
  let maxLength = 0;
  let acc = 0;
  for (let i = 0; i < s.length; i++) {
    while (seen[s.charCodeAt(i)]) {
      seen[s.charCodeAt(acc)] = false;
      acc++;
    }
    seen[s.charCodeAt(i)] = true;
    maxLength = Math.max(i - acc + 1, maxLength);
  }
  return maxLength;
}

export function repeatedString(s: string, n: number): number {
  if (!s.length || !n) {
    return 0;
  }
  const occurances = s.split("a").length - 1;
  const max = Math.floor(n / s.length);
  let totalAs = occurances * max;
  totalAs += s.slice(0, n % s.length).split("a").length - 1;
  return totalAs;
}
