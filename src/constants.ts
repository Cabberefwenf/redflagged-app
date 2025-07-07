// Flag colors used throughout the app
export const FLAG_COLORS = {
  green: "#22c55e",     // Positive
  yellow: "#eab308",    // Caution
  red: "#ef4444",       // Dangerous
  black: "#000000",     // Extremely manipulative or abusive
};

// Label text for flags
export const FLAG_LABELS = {
  green: "Green - Positive",
  yellow: "Yellow - Caution",
  red: "Red - Dangerous",
  black: "Black - Severe",
};

// Behavior tags (used later with GPT moderation)
export const BEHAVIOR_TAGS = [
  "Ghosting",
  "Breadcrumbing",
  "Gaslighting",
  "Clout Farming",
  "Love Bombing",
  "Financial Exploitation",
  "Cheating",
  "Manipulation",
  "Emotional Abuse",
  "Trust Breaking",
];

// Supported cities for now (can expand later)
export const CITY_LIST = [
  "New York",
  "Miami",
  "Los Angeles",
  "Houston",
  "Chicago",
  "Atlanta",
  "Las Vegas",
  "Phoenix",
  "San Diego",
  "Austin",
];

// Terms checkbox message
export const TERMS_TEXT = `By submitting, you confirm this report is truthful and respectful. No revenge content, private names, or nudity. All reports are moderated.`;
