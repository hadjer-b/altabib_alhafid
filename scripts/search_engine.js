export function normalizeArbString(string) {
  if (!string || typeof string !== "string") return "";

  return (
    string
      // remove Tashkeel
      .replace(/[\u064B-\u0652\u0640]/g, "")

      // Normalize special / dialectal characters to standard letters
      .replace(/[ڨڤڥ]/g, "ق")
      .replace(/پ/g, "ب")
      .replace(/چ/g, "ج")
      .replace(/[گݣ]/g, "ك")

      // Normalize Alif variants
      .replace(/[أإآٱ]/g, "ا")

      // Normalize Taa Marbouta
      .replace(/ة/g, "ه")

      //  Normalize Alif Maqsura
      .replace(/ى/g, "ي")

      // Normalize Hamza seats
      .replace(/ؤ/g, "و")
      .replace(/ئ/g, "ي")

      // Clean up extra spaces
      .trim()
      .replace(/\s+/g, " ")
  );
}

export function searchNameMatch(query, studentInstances) {
  const cleanQuery = normalizeArbString(query.trim().toLowerCase());
  if (!cleanQuery) return [];
  return studentInstances.filter((item) => {
    const cleanName = normalizeArbString(item.fullName.toLowerCase());
    return cleanName.includes(cleanQuery);
  });
}
