import { marked } from "marked";
import DOMPurify from "dompurify";

export const markdownToHtml = (md: string): string => {
  const rawHtml = marked.parse(md) as string;

  return DOMPurify.sanitize(rawHtml);
};
