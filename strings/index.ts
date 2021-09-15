export function validParens(p: string): boolean {
  const seen: string[] = [];
  for (const ch of p) {
    if (ch === "(") {
      seen.push(ch);
    }
  }
  return !seen.length;
}
