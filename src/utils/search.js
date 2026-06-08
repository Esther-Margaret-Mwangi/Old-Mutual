export function matchesSearch(query, ...texts) {
  const trimmed = query.trim().toLowerCase();
  if (!trimmed) {
    return true;
  }

  return texts.some((text) =>
    String(text ?? "")
      .toLowerCase()
      .includes(trimmed),
  );
}
