import { useState, useMemo } from "react";
import { markdownToHtml } from "@/shared/lib/markdown-to-html/markdownToHtml";

export const useReviewEditor = () => {
  const [text, setText] = useState("");

  const html = useMemo(() => {
    return markdownToHtml(text);
  }, [text]);

  return {
    text,
    setText,
    html,
  };
};
