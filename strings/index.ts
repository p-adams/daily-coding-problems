export function validParens(p: string): boolean {
  const seen: string[] = [];
  for (const ch of p) {
    const top = seen[seen.length - 1];
    if (ch === "(") {
      seen.push(ch);
    } else if (ch === ")" && top === "(") {
      seen.pop();
    } else return false;
  }
  return !seen.length;
}
