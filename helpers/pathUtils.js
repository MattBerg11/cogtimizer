/**
 * Path utility functions for validating and sanitizing file paths.
 */

/**
 * Validates and returns a safe icon path - prevents directory traversal attacks.
 * Only allows paths starting with assets/ or icons/ with valid filenames.
 * 
 * @param {string} path - The path to validate
 * @returns {string} The validated path or a default blank icon path
 */
function getSafeIconPath(path) {
  if (typeof path !== 'string') return 'assets/cog_blank.png';
  // Only allow paths starting with assets/ or icons/ with valid filenames (no .. allowed)
  // Pattern ensures no directory traversal and limited depth (max 2 levels)
  if (/^(assets|icons)(\/[a-zA-Z0-9_\-]+){0,2}\/[a-zA-Z0-9_\-]+\.(png|jpg|jpeg|gif|webp)$/.test(path)) {
    return path;
  }
  return 'assets/cog_blank.png';
}
