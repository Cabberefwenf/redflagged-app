// Capitalize first letter
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Format date as readable string
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Truncate long text (e.g. story previews)
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "…";
}

// Map flag color to label
export function flagLabel(flag: string): string {
  const map: { [key: string]: string } = {
    green: "Positive",
    yellow: "Caution",
    red: "Dangerous",
    black: "Severe",
  };
  return map[flag] || "Unknown";
}

// Validate image type (client-side)
export function isImageFile(file: File): boolean {
  return file.type.startsWith("image/");
}
