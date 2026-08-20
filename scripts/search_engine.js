export function normalizeArbString(string) {
  if (!string || typeof string !== "string") return "";

  return (
    string
      // Force unify combining characters & mobile keyboard inputs
      .normalize("NFC")

      //  Remove Tashkeel
      .replace(/[\u064B-\u0652\u0640]/g, "")

      //  Normalize special / dialectal characters to standard letters
      .replace(/[ڨڤڥ]/g, "ق")
      .replace(/پ/g, "ب")
      .replace(/چ/g, "ج")
      .replace(/[گݣک]/g, "ك")

      .replace(/[أإآٱ]/g, "ا")

      .replace(/ة/g, "ه")

      .replace(/[ىی]/g, "ي")

      .replace(/ؤ/g, "و")
      .replace(/ئ/g, "ي")

      .trim()
      .replace(/\s+/g, " ")
  );
}

export function searchNameMatch(query, studentInstances) {
  const cleanQuery = normalizeArbString(query.trim().toLowerCase());
  if (!cleanQuery) return [];

  const queryWords = cleanQuery.split(/\s+/).filter(Boolean);

  return studentInstances.filter((item) => {
    if (!item.fullName) return false;
    const cleanName = normalizeArbString(item.fullName.toLowerCase());

    return queryWords.every((word) => cleanName.includes(word));
  });
}
