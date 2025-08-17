export interface SearchResult {
  id: string;
  title: string;
  description: string; // この行を追加
  category: string;
  tags: string[];
  type: "main" | "activity";
  page?: string; // ページ遷移先（メインコンテンツの場合）
}
