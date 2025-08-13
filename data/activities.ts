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
    image: "/fishing-app-development.png",
    description: "地域課題解決を目指したアプリ開発（開発中断）",
    overview:
      "琵琶湖の漁業者が抱える課題を解決するためのモバイルアプリケーション開発プロジェクト。漁獲量管理や市場価格情報の提供を目指しましたが、様々な要因により開発を中断しました。",
    technologies: ["React Native", "Firebase", "Node.js", "地理情報システム"],
    innovations: [
      "漁業者のニーズに特化したUI設計",
      "リアルタイム市場価格情報の統合",
      "GPS機能を活用した漁場管理",
    ],
    learnings: [
      "ステークホルダーとの継続的なコミュニケーションの重要性",
      "プロジェクト管理とリスク評価",
      "失敗から学ぶ価値と次への活かし方",
    ],
    achievements: [
      "プロトタイプの完成",
      "漁業者へのヒアリング実施",
      "技術的課題の特定と解決策の提案",
    ],
    tags: [
      "React Native",
      "Firebase",
      "Node.js",
      "地理情報システム",
      "モバイルアプリ",
      "地域課題",
      "プロジェクト管理",
      "失敗経験",
    ],
    categories: ["development", "leadership"],
  },
  {
    id: "hackathon-participation",
    title: "各種ハッカソン参加",
    image: "/hackathon-team-coding.png",
    description: "複数のハッカソンに参加し、短期間での開発スキルを向上",
    overview:
      "様々なテーマのハッカソンに積極的に参加し、限られた時間内でのアイデア創出から実装までの一連のプロセスを経験。チームワークと技術力の両面で成長しました。",
    technologies: [
      "React",
      "Python",
      "TypeScript",
      "API連携",
      "プロトタイピング",
    ],
    innovations: [
      "短時間でのMVP開発手法の習得",
      "異なる専門分野メンバーとの協働",
      "ユーザー視点でのサービス設計",
    ],
    learnings: [
      "時間制約下での優先順位付け",
      "アジャイル開発の実践的理解",
      "多様なバックグラウンドを持つチームでの協働",
    ],
    achievements: [
      "3回のハッカソン参加",
      "1回の入賞経験",
      "チームリーダーとしての経験",
    ],
    tags: [
      "React",
      "Python",
      "TypeScript",
      "API連携",
      "プロトタイピング",
      "ハッカソン",
      "チーム開発",
      "アイデア創出",
      "短期開発",
    ],
    categories: ["development", "leadership"],
  },
  {
    id: "ecommerce-site",
    title: "ECサイト構築プロジェクト",
    image: "/ecommerce-development.png",
    description: "小規模事業者向けECサイトの開発",
    overview:
      "地域の小規模事業者向けに、簡単に商品を販売できるECサイトを開発。ユーザビリティを重視した設計で、ITに不慣れな事業者でも使いやすいシステムを構築しました。",
    technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
    innovations: [
      "直感的な商品登録システム",
      "自動在庫管理機能",
      "モバイル決済対応",
    ],
    learnings: [
      "ユーザー中心設計の重要性",
      "決済システムの実装",
      "セキュリティ対策の実践",
    ],
    achievements: [
      "5社での導入実績",
      "売上20%向上を実現",
      "ユーザー満足度95%達成",
    ],
    tags: ["Vue.js", "Laravel", "MySQL", "Stripe", "ECサイト", "UI/UX"],
    categories: ["development"],
  },

  // リーダーシップの関連活動
  {
    id: "team-management",
    title: "チームマネジメント経験",
    image: "/team-management.png",
    description: "複数プロジェクトでのチームリーダー経験",
    overview:
      "大学でのプロジェクト活動において、5〜8名のチームをリードし、メンバーのスキルや特性を活かしながら目標達成に向けて取り組みました。",
    technologies: ["プロジェクト管理", "アジャイル", "Slack", "Notion"],
    innovations: [
      "メンバーの強みを活かした役割分担",
      "定期的な1on1ミーティングの実施",
      "透明性の高い進捗管理システム",
    ],
    learnings: [
      "多様な価値観を持つメンバーとの協働",
      "モチベーション管理の重要性",
      "リーダーシップスタイルの使い分け",
    ],
    achievements: [
      "3つのプロジェクトでチームリーダーを担当",
      "全プロジェクトで期限内完成を達成",
      "メンバー満足度90%以上を維持",
    ],
    tags: [
      "チームマネジメント",
      "リーダーシップ",
      "プロジェクト管理",
      "コミュニケーション",
      "メンタリング",
    ],
    categories: ["leadership"],
  },
  {
    id: "event-planning",
    title: "イベント企画・運営",
    image: "/event-planning.png",
    description: "学内外のイベント企画・運営経験",
    overview:
      "技術カンファレンスや勉強会の企画・運営を通じて、多くの人を巻き込みながらイベントを成功に導いた経験があります。",
    technologies: ["イベント管理", "マーケティング", "SNS運用"],
    innovations: [
      "参加者のニーズに応じたコンテンツ設計",
      "効果的な集客戦略の立案",
      "運営チームのモチベーション管理",
    ],
    learnings: [
      "ステークホルダー管理の重要性",
      "リスク管理と contingency planning",
      "チームビルディングの手法",
    ],
    achievements: [
      "5つのイベントを企画・運営",
      "累計参加者数500名以上",
      "参加者満足度95%達成",
    ],
    tags: [
      "イベント企画",
      "イベント運営",
      "マーケティング",
      "チームビルディング",
      "プレゼンテーション",
    ],
    categories: ["leadership"],
  },

  // 研究の関連活動
  {
    id: "ml-research",
    title: "機械学習を用いた研究プロジェクト",
    image: "/ml-research.png",
    description: "自然言語処理の研究に従事",
    overview:
      "BERTモデルを用いたテキスト分類タスクの研究を行い、既存手法の改良と新しいアプローチの提案を行いました。",
    technologies: ["Python", "PyTorch", "BERT", "機械学習", "自然言語処理"],
    innovations: [
      "既存モデルの改良によるF1スコア向上",
      "新しい前処理手法の提案",
      "効率的な学習パイプラインの構築",
    ],
    learnings: [
      "最新論文の読解と実装能力",
      "実験設計と結果分析の手法",
      "研究倫理と再現性の重要性",
    ],
    achievements: ["学会発表1件", "論文投稿準備中", "F1スコア15%向上を達成"],
    tags: [
      "Python",
      "PyTorch",
      "BERT",
      "機械学習",
      "自然言語処理",
      "研究発表",
      "データ分析",
    ],
    categories: ["research"],
  },
  {
    id: "data-analysis",
    title: "データ分析プロジェクト",
    image: "/data-analysis.png",
    description: "統計的手法を用いたデータ分析",
    overview:
      "教育データの分析を通じて、学習効果に影響を与える要因を特定し、改善施策の提案を行いました。",
    technologies: ["Python", "R", "統計", "データ可視化", "機械学習"],
    innovations: [
      "多角的な分析アプローチの採用",
      "わかりやすいデータ可視化の実現",
      "統計的に有意な知見の発見",
    ],
    learnings: [
      "統計的思考の重要性",
      "データの前処理と品質管理",
      "結果の解釈と説明責任",
    ],
    achievements: [
      "3つの有意な要因を特定",
      "改善施策の効果を定量的に証明",
      "分析結果の学内発表",
    ],
    tags: [
      "Python",
      "R",
      "統計",
      "データ分析",
      "データ可視化",
      "統計解析",
      "機械学習",
    ],
    categories: ["research"],
  },

  // 学習支援の関連活動
  {
    id: "tutoring-system",
    title: "オンライン学習支援システム開発",
    image: "/tutoring-system.png",
    description: "個別指導を効率化するシステムの開発",
    overview:
      "従来の対面指導を補完するオンライン学習支援システムを開発し、学習者の進捗管理と個別サポートを効率化しました。",
    technologies: ["React", "Node.js", "PostgreSQL", "WebRTC"],
    innovations: [
      "リアルタイム画面共有機能",
      "学習進捗の可視化システム",
      "個別最適化された課題提供",
    ],
    learnings: [
      "教育工学の基礎知識",
      "ユーザビリティテストの重要性",
      "継続的な改善の必要性",
    ],
    achievements: [
      "50名の学習者が利用",
      "学習効率30%向上を達成",
      "指導者の負担軽減を実現",
    ],
    tags: [
      "React",
      "Node.js",
      "PostgreSQL",
      "WebRTC",
      "教育技術",
      "学習支援",
      "UI/UX",
    ],
    categories: ["learning", "development"],
  },
  {
    id: "educational-content",
    title: "教育コンテンツ制作",
    image: "/educational-content.png",
    description: "プログラミング学習教材の制作",
    overview:
      "初学者向けのプログラミング学習教材を制作し、わかりやすい説明と実践的な演習を通じて効果的な学習体験を提供しました。",
    technologies: ["教材設計", "動画編集", "インストラクショナルデザイン"],
    innovations: [
      "段階的な難易度設計",
      "実際のプロジェクトベースの演習",
      "フィードバックループの組み込み",
    ],
    learnings: [
      "効果的な教育手法の研究",
      "学習者の視点に立った設計",
      "継続的な教材改善の重要性",
    ],
    achievements: [
      "20本の教育動画を制作",
      "累計視聴時間1000時間達成",
      "学習者満足度92%獲得",
    ],
    tags: [
      "教育手法",
      "コンテンツ制作",
      "インストラクショナルデザイン",
      "プログラミング教育",
      "動画制作",
    ],
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
