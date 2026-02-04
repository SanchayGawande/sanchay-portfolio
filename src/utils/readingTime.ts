// Simple reading time calculator for browser environments
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes); // Minimum 1 minute
}

export function extractPlainText(markdownContent: string): string {
  return markdownContent
    .replace(/^---[\s\S]*?---/, '') // Remove frontmatter
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`(.*?)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
}

export function createExcerpt(content: string, maxLength: number = 200): string {
  const plainText = extractPlainText(content);
  
  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Find the last complete sentence within the limit
  const truncated = plainText.substring(0, maxLength);
  const lastSentence = truncated.lastIndexOf('.');
  
  if (lastSentence > maxLength * 0.6) {
    return plainText.substring(0, lastSentence + 1);
  }
  
  return truncated.trim() + '...';
}