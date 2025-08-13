export interface SearchResult {
  id: string;
  title: string;
  category: string;
  tags: string[];
  type: "main" | "activity";
  page?: string; // ページ遷移先（メインコンテンツの場合）
}
