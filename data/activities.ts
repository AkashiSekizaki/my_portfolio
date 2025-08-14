export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[]; // technologiesを削除してtagsのみに統合
  innovations?: string[];
  learnings?: string[];
  achievements?: string[];
  links?: Record<string, string>;
}

// カテゴリIDから日本語名への変換
export const categoryLabels: Record<string, string> = {
  development: "開発経験",
  leadership: "リーダーシップ",
  research: "研究",
  learning: "学習支援",
};

// カテゴリの日本語名を取得（null/undefinedチェック追加）
export function getCategoryLabel(categories: string[] | undefined): string {
  if (!categories) return "";
  return categories.map((cat) => categoryLabels[cat] || cat).join(", ");
}

export const activities: Activity[] = [
  // 開発経験の関連活動
  {
    id: "portfolio-site",
    title: "ポートフォリオサイト作成",
    image: "ポートフォリオ.png",
    description: "自身の活動を伝えるアプリケーション",
    category: "development",
    tags: ["AI", "CD自動化", "個人開発", "React", "TypeScript"],
    innovations: [
      "GitHub ActionsによるCDの自動化",
      "Vercel v0，GitHub Copilotを活用したコード生成",
    ],
    learnings: ["AIの活用", "CDの自動化の重要性", "自身の活動の振り返り"],
    achievements: [
      "ポートフォリオサイトの公開",
      "Vercel v0の理解",
      "GitHub Actionsの活用練習",
    ],
  },
  {
    id: "fishing-app",
    title: "琵琶湖漁業者向けアプリ開発",
    image: "/琵琶湖アプリ.png",
    description: "地域課題解決を目指したアプリ開発",
    category: "development",
    tags: [
      "Vue.js",
      "フィールドワーク",
      "マリンIT",
      "地域課題解決",
      "チーム開発",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "hackathon-participation",
    title: "学内ハッカソン・初挑戦",
    image: "",
    description: "ハッカソン初挑戦",
    category: "development",
    tags: ["React", "ハッカソン", "チームワーク", "短期開発"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "ecommerce-site",
    title: "P2hacks2022",
    image: "",
    description: "ハッカソン2回目の挑戦",
    category: "development",
    tags: ["React", "ハッカソン", "チームワーク", "競技プログラミング"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // リーダーシップの関連活動
  {
    id: "team-management",
    title: "おもしろサイトコンテスト",
    image: "",
    description: "おもしろサイトコンテストの開催",
    category: "leadership",
    tags: ["イベント企画", "マネジメント", "運営", "コミュニティ"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "event-planning",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "leadership",
    tags: ["リーダーシップ", "プロジェクト管理", "チームビルディング"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // 研究の関連活動
  {
    id: "ml-research",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "research",
    tags: ["機械学習", "研究", "Python", "データサイエンス"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "data-analysis",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "research",
    tags: ["データ分析", "研究", "統計", "可視化"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // 学習支援の関連活動
  {
    id: "tutoring-system",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "learning",
    tags: ["教育工学", "チュータリング", "学習支援", "教育技術"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "educational-content",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "learning",
    tags: ["教育工学", "イベント企画", "教材開発", "学習コンテンツ"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
];

// 既存の関数
export function getActivitiesByCategory(category: string): Activity[] {
  return activities.filter((activity) => activity.category === category);
}

export function getAllActivityTags(): string[] {
  const tags = new Set<string>();
  activities.forEach((activity) => {
    // tagsのみ処理
    if (activity.tags) {
      activity.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}
