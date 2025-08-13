export interface Activity {
  id: string;
  title: string;
  image: string;
  description: string;
  overview: string;
  technologies?: string[];
  innovations?: string[];
  learnings?: string[];
  achievements?: string[];
  tags: string[];
  categories: string[]; // 複数カテゴリに対応
  links?: {
    github?: string;
    demo?: string;
    paper?: string;
    presentation?: string;
  };
}

// カテゴリIDから日本語名への変換
export const categoryLabels: Record<string, string> = {
  development: "開発経験",
  leadership: "リーダーシップ",
  research: "研究",
  learning: "学習支援",
};

// カテゴリの日本語名を取得
export function getCategoryLabel(categories: string[]): string {
  return categories.map((cat) => categoryLabels[cat] || cat).join(", ");
}

export const activities: Activity[] = [
  // 開発経験の関連活動
  {
    id: "fishing-app",
    title: "琵琶湖漁業者向けアプリ開発",
    image: "琵琶湖アプリ.png",
    description: "地域課題解決を目指したアプリ開発",
    overview:
      "琵琶湖の漁業者向けのアプリの開発．船跡の共有や漁獲効率を出すことで，漁に役立ててもらうことを目指したが，受け入れには課題が残りました．",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["Vue.js", "フィールドワーク", "マリンIT", "開発"],
    categories: ["development", "leadership"],
  },
  {
    id: "hackathon-participation",
    title: "学内ハッカソン・初挑戦",
    image: "",
    description: "ハッカソン初挑戦",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["development", "leadership"],
  },
  {
    id: "ecommerce-site",
    title: "P2hacks2022",
    image: "",
    description: "ハッカソン2回目の挑戦",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["development"],
  },

  // リーダーシップの関連活動
  {
    id: "team-management",
    title: "おもしろサイトコンテスト",
    image: "",
    description: "おもしろサイトコンテストの開催",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["leadership"],
  },
  {
    id: "event-planning",
    title: "comming soon",
    image: "",
    description: "comming soon",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["leadership"],
  },

  // 研究の関連活動
  {
    id: "ml-research",
    title: "comming soon",
    image: "",
    description: "comming soon",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["research"],
  },
  {
    id: "data-analysis",
    title: "comming soon",
    image: "",
    description: "comming soon",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["research"],
  },

  // 学習支援の関連活動
  {
    id: "tutoring-system",
    title: "comming soon",
    image: "",
    description: "comming soon",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["learning", "development"],
  },
  {
    id: "educational-content",
    title: "comming soon",
    image: "",
    description: "comming soon",
    overview: "comming soon",
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    tags: ["comming soon"],
    categories: ["learning"],
  },
];

// 既存の関数
export function getActivitiesByCategory(category: string): Activity[] {
  return activities.filter((activity) =>
    activity.categories.includes(category)
  );
}

export function getAllActivityTags(): string[] {
  const tags = new Set<string>();
  activities.forEach((activity) => {
    activity.tags.forEach((tag) => tags.add(tag));
    if (activity.technologies) {
      activity.technologies.forEach((tech) => tags.add(tech));
    }
  });
  return Array.from(tags).sort();
}
