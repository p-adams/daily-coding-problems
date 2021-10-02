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

export function reverseWord(word: string): string {
  let newWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}

function characterCount(s: string): Map<string, number> {
  const seen = new Map<string, number>();
  for (const ch of s) {
    if (seen.has(ch)) {
      const value = seen.get(ch);
      if (value) {
        seen.set(ch, value + 1);
      }
    } else {
      seen.set(ch, 1);
    }
  }
  return seen;
}

export function isUnique(s: string): boolean {
  for (const count of characterCount(s).values()) {
    if (count > 1) {
      return false;
    }
  }
  return true;
}

export function firstUniqChar(s: string): number {
  if (!s.length) {
    return -1;
  }
  const charMap = new Map<string, { index: number; occurrences: number }>();
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (charMap.has(ch)) {
      const currCh = charMap.get(ch);
      if (currCh) {
        charMap.set(ch, { index: i, occurrences: currCh.occurrences + 1 });
      }
    } else {
      charMap.set(ch, { index: i, occurrences: 1 });
    }
  }
  let min = -1;
  for (const value of charMap.values()) {
    if (value.occurrences === 1) {
      min = value.index;
      break;
    }
  }

  return min;
}
