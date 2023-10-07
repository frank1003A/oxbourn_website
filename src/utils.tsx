export function addAlpha(hex: string, alpha: number): string | null {
  // Remove the '#' character if present
  hex = hex.replace(/^#/, "");

  // Validate the input hex color code
  const isValidHex = /^([A-Fa-f0-9]{3}){1,2}$/.test(hex);
  if (!isValidHex) {
    console.error("Invalid hex color code");
    return null;
  }

  // Convert the hex color to RGB
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
    g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
    b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
  } else {
    r = parseInt(hex.slice(0, 2), 16);
    g = parseInt(hex.slice(2, 4), 16);
    b = parseInt(hex.slice(4, 6), 16);
  }

  // Validate the input alpha value
  if (alpha < 0 || alpha > 1) {
    console.error("Alpha value must be between 0 and 1");
    return null;
  }

  // Create the RGBA color string
  const rgbaColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;

  return rgbaColor;
}
