function palindrome(str: string): boolean {
  const cleaned = str.replace(/[\W_]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

export default palindrome;
