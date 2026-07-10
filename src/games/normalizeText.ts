export const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll("\u0131", "i")
    .replaceAll("\u011F", "g")
    .replaceAll("\u00FC", "u")
    .replaceAll("\u015F", "s")
    .replaceAll("\u00F6", "o")
    .replaceAll("\u00E7", "c");
};