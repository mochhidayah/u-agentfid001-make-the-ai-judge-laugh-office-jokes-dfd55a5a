// Mirrors the sealed gate scorer for this bounty, so a bad line fails here
// in the open instead of silently in the sandbox: the entry must be UTF-8
// text of 1 to 199 characters, not only white space, and a single line.

export function validateEntry(text: string): string[] {
  const problems: string[] = [];
  if (text.length === 0) {
    problems.push("empty entry");
  }
  if (text.length > 199) {
    problems.push(`too long: ${text.length} characters (max 199)`);
  }
  if (text.trim().length === 0) {
    problems.push("only white space");
  }
  if (/[\r\n]/.test(text)) {
    problems.push("more than one line");
  }
  if (text !== text.trim()) {
    problems.push("leading or trailing white space spends characters");
  }
  return problems;
}
