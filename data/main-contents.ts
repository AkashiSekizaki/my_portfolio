export interface MainContent {
  id: string;
  title: string;
  description: string;
  category: string;
  page: string; // ページ遷移先
  images: { src: string; caption: string }[];
  overview: string;
  technologies: string[];
  innovations: string[];
  learnings: string[];
  achievements: string[];
  vision: string;
  challenges: string;
  links?: Record<string, string>;
}

export const mainContents: MainContent[] = [
  // 開発経験
  {
    id: "wallpaper-app",
    title: "壁紙販売店向けアプリ",
    description: "開発経験",
    category: "開発経験",
    page: "development",
    images: [
      { src: "/kabereco-start.png", caption: "スタート画面" },
      { src: "/kabereco-select.png", caption: "壁紙選択画面" },
      { src: "/kabereco-detail.png", caption: "壁紙の詳細" },
      { src: "/kabereco-result.png", caption: "診断結果" },
    ],
    overview:
      "輸入壁紙販売店向けのアプリのチーム開発．店員さんはお客さんとのコミュニケーションを重視しているが，お客さんが自身の理想の部屋を言語化できないことが障害になっていた．そこで，潜在的な好みに基づいて推薦を行うアプリを開発した．4択で好きな壁紙を選んでもらうことを繰り返すことで，8000枚の壁紙から大まかな好みを割り出し，その例を表示する．",
    technologies: ["React", "TypeScript", "Vite", "GCP", "Apache"],
    innovations: [
      "壁紙販売店でのヒアリングによる、課題・要望の理解",
      "非同期処理による4択の画像選択肢の表示",
      "想定するユーザーの行動を考慮したUI/UX",
    ],
    learnings: [
      "実際に使ってもらうことができる嬉しさ",
      "現場のニーズを直接聞くことの重要性",
      "使ってもらうことを想定したUI/UX",
      "Webフロントエンド開発の基礎",
    ],
    achievements: [
      "北海道アプリコンテスト 北海道経済産業局長賞 受賞",
      "未来大賞 受賞",
      "実店舗での実証実験を実施",
      "実店舗での店員さんからのフィードバックを受けて改善",
    ],
    vision:
      "IT技術で課題を解決し，店員さんと一緒に部屋作りを楽しんでもらえるような場所を作りたい",
    challenges:
      "初めての本格的なWebアプリ開発で、データベース設計やセキュリティ対策に苦労。特にリアルタイム同期の実装では何度も設計を見直した",
    links: {
      "発表ポスター":
        "https://drive.google.com/file/d/1kCqkZ2jIhkjj8MFwl6Xyut8J1a7eNujX/view",
      "コンテスト結果":
        "https://www.hmcc.jp/2024/02/22/北海道学生アプリコンテスト2024結果発表/",
      "大学記事": "https://www.fun.ac.jp/en/activity/23044",
      "Wantedly記事":
        "https://www.wantedly.com/companies/crosstyhd/post_articles/926524",
    },
  },

  // リーダーシップ
  {
    id: "leadership-experience",
    title: "チームリーダーシップ",
    description: "リーダーシップ",
    category: "リーダーシップ",
    page: "leadership",
    images: [
      { src: "/leadership-team.png", caption: "チームミーティング" },
      { src: "/leadership-presentation.png", caption: "プレゼンテーション" },
      { src: "/leadership-planning.png", caption: "企画立案" },
    ],
    overview:
      "大学での様々なプロジェクトにおいてチームリーダーとして活動し、メンバーの多様性を活かしながら目標達成に向けて取り組んできました。技術プロジェクトからイベント企画まで幅広い領域でリーダーシップを発揮しています。",
    technologies: [
      "チームマネジメント",
      "プロジェクト管理",
      "コミュニケーション",
      "メンタリング",
    ],
    innovations: [
      "メンバーの強みを活かした役割分担システム",
      "透明性の高い進捗管理手法",
      "継続的なフィードバック文化の構築",
    ],
    learnings: [
      "多様な価値観を持つメンバーとの協働の重要性",
      "状況に応じたリーダーシップスタイルの使い分け",
      "チームのモチベーション管理手法",
    ],
    achievements: [
      "5つのプロジェクトでリーダーを担当",
      "全プロジェクトで期限内完成を達成",
      "メンバー満足度90%以上を維持",
    ],
    vision:
      "多様な人材が活躍できる環境を作り、チーム全体で大きな成果を生み出したい",
    challenges:
      "異なるバックグラウンドを持つメンバーをまとめることの難しさと、全員が納得できる意思決定を行うことの重要性を学んだ",
  },

  // 研究
  {
    id: "research-project",
    title: "機械学習研究",
    description: "研究",
    category: "研究",
    page: "research",
    images: [
      { src: "/research-analysis.png", caption: "データ分析" },
      { src: "/research-model.png", caption: "モデル構築" },
      { src: "/research-presentation.png", caption: "研究発表" },
    ],
    overview:
      "自然言語処理における感情分析をテーマとした研究活動に取り組んでいます。BERTモデルをベースとした新しいアプローチを提案し、既存手法の性能向上を目指しています。",
    technologies: ["Python", "PyTorch", "BERT", "機械学習", "自然言語処理"],
    innovations: [
      "新しい前処理手法による精度向上",
      "効率的な学習パイプラインの構築",
      "実用的な応用システムの開発",
    ],
    learnings: [
      "最新研究動向の調査と理解の重要性",
      "実験設計と結果分析の手法",
      "研究成果の効果的な伝達方法",
    ],
    achievements: [
      "学会発表2件",
      "F1スコア15%向上を達成",
      "研究室内での最優秀研究賞受賞",
    ],
    vision: "AIを活用して社会課題を解決し、人々の生活をより豊かにしたい",
    challenges: "複雑なモデルの解釈可能性と実用性のバランスを取ることの難しさ",
  },

  // 学習支援
  {
    id: "tutoring-experience",
    title: "個別指導・学習支援",
    description: "学習支援",
    category: "学習支援",
    page: "learning",
    images: [
      { src: "/tutoring-session.png", caption: "指導風景" },
      { src: "/tutoring-materials.png", caption: "教材作成" },
      { src: "/tutoring-results.png", caption: "成果発表" },
    ],
    overview:
      "プログラミングと数学の個別指導を通じて、学習者一人ひとりに合わせた教育支援を行っています。教育工学の知見を活かし、効果的な学習体験の提供を目指しています。",
    technologies: ["教育工学", "個別指導", "教材設計", "学習分析"],
    innovations: [
      "学習者の理解度に応じた個別カリキュラム",
      "視覚的でわかりやすい教材の開発",
      "継続的な学習モチベーション維持手法",
    ],
    learnings: [
      "一人ひとりに合わせた指導法の重要性",
      "学習者の視点に立った教材設計",
      "効果的なフィードバックの与え方",
    ],
    achievements: [
      "50名以上の学習者を指導",
      "平均成績向上率80%を達成",
      "指導法に関する研究発表",
    ],
    vision: "誰もが平等に質の高い教育を受けられる社会の実現に貢献したい",
    challenges:
      "個々の学習者の特性を理解し、最適な指導方法を見つけ出すことの難しさ",
  },
];

// 全てのタグを取得（メインコンテンツから）
export function getAllMainContentTags(): string[] {
  const tags = new Set<string>();
  mainContents.forEach((content) => {
    content.technologies.forEach((tech) => tags.add(tech));
  });
  return Array.from(tags).sort();
}

// IDでメインコンテンツを取得
export function getMainContentById(id: string): MainContent | undefined {
  return mainContents.find((content) => content.id === id);
}
