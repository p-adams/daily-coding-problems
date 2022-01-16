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

export function canConstruct(ransomNote: string, magazine: string): boolean {
  const m = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (m.has(magazine[i])) {
      const curr = m.get(magazine[i]);
      if (curr) {
        m.set(magazine[i], curr + 1);
      }
    } else {
      m.set(magazine[i], 1);
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (m.has(ransomNote[i])) {
      const curr = m.get(ransomNote[i]);
      if (curr && curr > 0) {
        m.set(ransomNote[i], curr - 1);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
}
// poor memory usage
export function __isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }
  const m = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    if (m.has(s[i])) {
      const curr = m.get(s[i]);
      if (curr) {
        m.set(s[i], curr + 1);
      }
    } else {
      m.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (m.has(t[i])) {
      const curr = m.get(t[i]);
      if (curr) {
        m.set(t[i], curr - 1);
      }
    }
  }
  for (const value of m.values()) {
    if (value > 0) {
      return false;
    }
  }

  return true;
}

export function numJewelsInStones(jewels: string, stones: string): number {
  let count = 0;
  for (const stone of stones) {
    const stoneIsJewel = jewels.includes(stone);
    if (stoneIsJewel) {
      count++;
    }
  }

  return count;
}

export function defangIPaddr(address: string): string {
  return address.split(".").join("[.]");
}

export function convertToTitle(columnNumber: number): string {
  let result = "";
  while (columnNumber) {
    let rem = columnNumber % 26;
    let quo = Math.floor(columnNumber / 26);
    if (rem === 0) {
      rem = 26;
      quo--;
    }
    result = String.fromCharCode(64 + rem) + result;
    columnNumber = quo;
  }
  return result;
}

function isPalindrome(s: string) {
  // formatted string
  const ss = s.toLowerCase().replace(/[\W_]/g, "");
  for (let i = ss.length - 1, j = 0; i >= j; i--, j++) {
    if (ss[i] !== ss[j]) {
      return false;
    }
  }
  return true;
}

export function longestPalindrome(s: string) {
  if (isPalindrome(s)) {
    return s;
  }
  let subString = s[0];

  for (let i = 0; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;
    let curr = s[i];

    while (s[i] === s[left]) {
      curr += s[left];
      left--;
    }
    while (s[left] === s[right]) {
      curr = s[left] + curr + s[right];
      left--;
      right++;
    }
    if (curr.length > subString.length) {
      subString = curr;
    }
  }
  return subString;
}
