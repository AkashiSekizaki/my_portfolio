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
    id: "tyouseisan",
    title: "調整さん便利ツール",
    image: "noimage.png",
    description: "comming soon",
    category: "development",
    tags: ["個人開発", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "tyouseisan",
    title: "ETロボコンの画像処理",
    image: "noimage.png",
    description: "comming soon",
    category: "development",
    tags: ["個人開発", "機能要件・非機能要件", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "tyouseisan",
    title: "AIによるメール添削で匿名化",
    image: "noimage.png",
    description: "comming soon",
    category: "development",
    tags: ["個人開発", "自然言語処理", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "tyouseisan",
    title: "パス経路可視化ツール：初ハッカソン",
    image: "noimage.png",
    description: "comming soon",
    category: "development",
    tags: ["チーム開発", "ハッカソン", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "tyouseisan",
    title: "研究で使用する漁船の位置情報データ自動取得ツール",
    image: "noimage.png",
    description: "comming soon",
    category: "development",
    tags: ["個人開発", "マリンIT", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "fishing-app",
    title: "琵琶湖漁業者向けアプリ開発",
    image: "琵琶湖アプリ.png",
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
    id: "tyouseisan",
    title: "デジタルアーカイブシステム開発バイト",
    image: "noimage.png",
    description: "comming soon",
    category: "development",
    tags: ["チーム開発", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // リーダーシップの関連活動
  {
    id: "team-management",
    title: "おもしろサイトコンテスト開催",
    image: "noimage.png",
    description: "comming soon",
    category: "leadership",
    tags: ["リーダーシップ", "イベント企画", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "event-planning",
    title: "日報に新しい価値を与えるシステムの提案を牽引",
    image: "noimage.png",
    description: "comming soon",
    category: "leadership",
    tags: ["リーダーシップ", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "event-planning",
    title: "メタ学習ラボ チューター長",
    image: "noimage.png",
    description: "comming soon",
    category: "leadership",
    tags: ["リーダーシップ", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "event-planning",
    title: "オープンキャンパスへの出展を発案",
    image: "noimage.png",
    description: "comming soon",
    category: "leadership",
    tags: ["リーダーシップ", "イベント企画", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "event-planning",
    title: "1年生2名とハッカソンに挑戦！",
    image: "noimage.png",
    description: "comming soon",
    category: "leadership",
    tags: ["リーダーシップ", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "event-planning",
    title: "【頓挫】 開発の課外活動のチームを跨いだ教育イベントの企画",
    image: "noimage.png",
    description: "comming soon",
    category: "leadership",
    tags: ["リーダーシップ", "イベント企画", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // 研究の関連活動
  {
    id: "ml-research",
    title:
      "コロナ前後のチュータリングにおけるチューター・チューティを対象とした印象の検討",
    image: "noimage.png",
    description: "comming soon",
    category: "research",
    tags: ["共同研究", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    links: {
      "論文":
        "https://www.jstage.jst.go.jp/article/jsetstudy/2024/4/2024_JSET2024-4-C2/_pdf/-char/ja",
    },
  },
  {
    id: "ml-research",
    title: "【取り組み中】 チューターになる前後における意識の変化",
    image: "noimage.png",
    description: "comming soon",
    category: "research",
    tags: ["共同研究", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // 学習支援の関連活動
  {
    id: "tutoring-system",
    title: "P2hacks2024 メンター",
    image: "noimage.png",
    description: "comming soon",
    category: "learning",
    tags: ["学習支援", "comming soon"],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "educational-content",
    title: "開発チーム内技術教育",
    image: "noimage.png",
    description: "comming soon",
    category: "learning",
    tags: ["学習支援", "comming soon"],
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
