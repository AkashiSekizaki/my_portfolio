export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  innovations?: string[];
  learnings?: string[];
  achievements?: string[];
  tags?: string[];
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
    image: "/ポートフォリオ.png",
    description: "自身の活動を伝えるアプリケーション",
    category: "development",
    technologies: ["Vue.js", "フィールドワーク", "マリンIT", "開発"],
    innovations: [
      "GitHub ActionsによるCDの自動化",
      "Vercel v0，GitHub Copilotを活用したコード生成",
    ],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["Vue.js", "フィールドワーク", "マリンIT", "開発"],
  },
  {
    id: "fishing-app",
    title: "琵琶湖漁業者向けアプリ開発",
    image: "/琵琶湖アプリ.png",
    description: "地域課題解決を目指したアプリ開発",
    category: "development",
    technologies: ["Vue.js", "フィールドワーク", "マリンIT", "開発"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["Vue.js", "フィールドワーク", "マリンIT", "開発"],
  },
  {
    id: "hackathon-participation",
    title: "学内ハッカソン・初挑戦",
    image: "",
    description: "ハッカソン初挑戦",
    category: "development",
    technologies: ["React", "チームワーク"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["React", "ハッカソン"],
  },
  {
    id: "ecommerce-site",
    title: "P2hacks2022",
    image: "",
    description: "ハッカソン2回目の挑戦",
    category: "development",
    technologies: ["React", "チームワーク"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["React", "ハッカソン"],
  },

  // リーダーシップの関連活動
  {
    id: "team-management",
    title: "おもしろサイトコンテスト",
    image: "",
    description: "おもしろサイトコンテストの開催",
    category: "leadership",
    technologies: ["イベント企画", "マネジメント"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["イベント企画", "マネジメント"],
  },
  {
    id: "event-planning",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "leadership",
    technologies: ["リーダーシップ"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["リーダーシップ"],
  },

  // 研究の関連活動
  {
    id: "ml-research",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "research",
    technologies: ["機械学習", "研究"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["機械学習", "研究"],
  },
  {
    id: "data-analysis",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "research",
    technologies: ["データ分析", "研究"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["データ分析", "研究"],
  },

  // 学習支援の関連活動
  {
    id: "tutoring-system",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "learning",
    technologies: ["教育工学", "チュータリング"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["教育工学", "チュータリング"],
  },
  {
    id: "educational-content",
    title: "comming soon",
    image: "",
    description: "comming soon",
    category: "learning",
    technologies: ["教育工学", "イベント企画"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["教育工学", "イベント企画"],
  },
];

// 既存の関数
export function getActivitiesByCategory(category: string): Activity[] {
  return activities.filter((activity) => activity.category === category);
}

export function getAllActivityTags(): string[] {
  const tags = new Set<string>();
  activities.forEach((activity) => {
    // tagsがある場合のみ処理
    if (activity.tags) {
      activity.tags.forEach((tag) => tags.add(tag));
    }
    if (activity.technologies) {
      activity.technologies.forEach((tech) => tags.add(tech));
    }
  });
  return Array.from(tags).sort();
}
