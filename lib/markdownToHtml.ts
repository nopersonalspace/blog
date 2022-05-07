import { remark } from "remark";
import html from "remark-html";
import remarkPrism from "remark-prism";

export const markdownToHtml = async (markdown: any): Promise<string> => {
  const result = await remark().use(remarkPrism).use(html).process(markdown);
  return result.toString();
};
