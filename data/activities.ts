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
    id: "et-robo",
    title: "【大会期間中のため，取り組みのみ記載】 ETロボコンの画像処理",
    image: "ETロボコン画像処理.png",
    description:
      "ETロボコンの画像処理担当．チームの定めた機能要件・非機能要件を満たす画像処理を請け負う．方針の決定やモデルに組み込むために，メンバーに説明を行う．",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "チーム活動",
      "個人活動",
      "アイデア",
      "画像処理",
      "機能要件・非機能要件",
      "コミュニケーション",
      "AIコーディング",
      "プレゼン・説明",
      "ドキュメント",
      "Python",
    ],
    innovations: [
      "ルールや規約の書類を読み，ETロボコン歴の長いメンバーと認識のすり合わせを行う",
      "上記制約に合わせて，画像処理の手法を選定",
      "軽量な処理を書籍で勉強",
      "仕組みの説明スライドを作成し，メンバーと手法についての議論を行う",
      "AIコーディングで，トライアンドエラーを繰り返す",
    ],
    learnings: [
      "チーム内での技術共有の重要性",
      "古典的な画像処理の理解",
      "メンバーとのコミュニケーションの重要性",
    ],
    achievements: ["手法説明スライド複数作成", "大会結果をお待ちください...！"],
  },
  {
    id: "portfolio-site",
    title: "ポートフォリオサイト作成",
    image: "ポートフォリオ.png",
    description: "自身の活動を伝えるアプリケーション",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "個人活動",
      "アイデア",
      "公開・活用",
      "AIコーディング",
      "Git/GitHub",
      "TypeScript",
      "JavaScript",
      "CSS",
      "GitHub Actions",
      "GitHub Pages",
    ],
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
    links: {
      "GitHub": "https://github.com/AkashiSekizaki/my_portfolio",
      "Xでシェア":
        "https://twitter.com/intent/tweet?text=関﨑証のポートフォリオをチェック！&url=https://akashisekizaki.github.io/my_portfolio/",
    },
  },
  {
    id: "tyouseisan",
    title: "調整さん便利ツール",
    image: "調整さん画面.png",
    description:
      "学習支援組織や飲み会などで使う調整さんの日程入力が楽になるツール．実際に友人たちに使ってもらっているアプリ！",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "個人活動",
      "ハッカソン・開発イベント",
      "アイデア",
      "ヒアリング",
      "公開・活用",
      "自動化・効率化",
      "プレゼン・説明",
      "Git/GitHub",
      "JavaScript",
      "HTML",
      "CSS",
      "GitHub Pages",
    ],
    innovations: [
      "クリップボードにコピーする際の関数が，SSL認証の有無に関わらず動作するようにする",
      "上から入力させることで，流れを感じてもらう",
    ],
    learnings: [
      "ユーザーテストの重要性",
      "自分の作ったものを喜んでもらえる体験",
    ],
    achievements: [
      "10名以上の友人に使用してもらった",
      "GitHub Pagesでの公開",
      "チーム内発表会優勝",
    ],
    links: {
      "公開リンク":
        "https://akashisekizaki.github.io/chouseisan_more_convenient/",
      "GitHub": "https://github.com/AkashiSekizaki/chouseisan_more_convenient",
    },
  },

  {
    id: "ai-mail-anonymization",
    title: "AIによるメール添削で匿名化",
    image: "AIメール添削支援.png",
    description:
      "AIにメール添削をする際に，手動で個人情報を消している友人を見つけた．そこで，それを自動化するツールを作成した．また，自身の開催する開発イベントでプレゼンを行った．",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "個人活動",
      "ハッカソン・開発イベント",
      "アイデア",
      "公開・活用",
      "形態素解析",
      "自動化・効率化",
      "AIコーディング",
      "プレゼン・説明",
      "Git/GitHub",
      "JavaScript",
      "HTML",
      "CSS",
      "GitHub Pages",
    ],
    innovations: [
      "開発は初めてのメンバーにも技術を使ってできることを見せる",
      "課題の背景，技術でできること，嬉しさ，開発上の失敗などをプレゼンで説明",
      "アプリの立ち位置を明確にして，あえてAIのAPIを使わない",
    ],
    learnings: [
      "プレゼンの構成",
      "形態素解析の理解",
      "開発に興味を持ってもらうための開発",
    ],
    achievements: ["ユーザーに使ってもらう", "チーム内発表"],
    links: {
      "プレゼン資料":
        "https://docs.google.com/presentation/d/1mSHcIrZzpEIUOkFYXL962ySl76yrwEKqRIJCYPAm8Xw/edit?usp=sharing",
      "デモ動画":
        "https://drive.google.com/file/d/1C10klO6orazvi0fFvgR0D-K5YC7pkGUb/view?usp=sharing",
      "公開リンク":
        "https://akashisekizaki.github.io/Anonymized_Email_Support/",
      "GitHub": "https://github.com/AkashiSekizaki/Anonymized_Email_Support",
    },
  },
  {
    id: "first-hackathon-bus",
    title: "バス経路可視化ツール：初ハッカソン",
    image: "バスアプリ.png",
    description:
      "初挑戦した 「函館の交通問題をハックする」 がテーマのハッカソン．函館のバス路線が見づらいことに着目したプロダクトを作成．実装上のレベルは低いと感じるが，開発の原点です！",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "チーム活動",
      "ハッカソン・開発イベント",
      "アイデア",
      "ペルソナ",
      "コミュニケーション",
      "受賞歴あり",
      "AIコーディング",
      "JavaScript",
      "HTML",
      "CSS",
      "Google Map API",
    ],
    innovations: [
      "バス経路のAPIがなかったため，バス停の位置情報間に対する車の経路をGoogle Map APIで取得することで，バス路線を擬似的に再現する",
      "プロダクトのアイデアを全員で考える",
    ],
    learnings: [
      "開発の難しさ",
      "HTML, CSS, JavaScriptという技術の存在",
      "自身の積極性のなさ",
    ],
    achievements: [
      "ハッカソン最優秀賞受賞（アイデアが主に評価された）",
      "交流会で社長さんと話す機会があったが何も話せず「こんな素晴らしい機会を活かせない自身の性格は勿体無い！」と思い，自身の行動を変えるきっかけになった",
    ],
  },
  {
    id: "ship-position-data-tool",
    title: "研究で使用する漁船の位置情報データ自動取得ツール",
    image: "船跡取得.png",
    description:
      "研究で使用する予定の漁船の船跡データは，別の研究で収集・活用されている．そのデータを自動で取得するツールを作成し，研究の効率化を図る．",
    category: "development",
    tags: [
      "講義",
      "開発",
      "研究",
      "個人活動",
      "マリンIT",
      "ハッカソン・開発イベント",
      "自動化・効率化",
      "AIコーディング",
      "Python",
    ],
    innovations: ["cronを使用して，定期的にデータを取得する"],
    learnings: [
      "自動化しようとする意識",
      "AIツールで解決できない時には，自分で調べた方が早い",
    ],
    achievements: [
      "自動化の達成",
      "漁業者の方に撮影データと船跡データをBlu-rayに焼いたものをお渡しできた",
    ],
  },
  {
    id: "biwa-lake-app",
    title: "琵琶湖漁業者向けアプリ開発",
    image: "琵琶湖での説明.jpg",
    description:
      "琵琶湖の漁業者さんに向けたアプリを開発．漁協全体の最適化や技術継承を目指したが，漁業者さんからは「自分の漁場が明確になることに抵抗感がある」という旨のフィードバックを受けた．",
    category: "development",
    tags: [
      "講義",
      "開発",
      "リーダーシップ",
      "チーム活動",
      "フィールドワーク",
      "マリンIT",
      "ヒアリング",
      "コミュニケーション",
      "プレゼン・説明",
      "Git/GitHub",
      "Vue.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    innovations: [
      "リーダーとして全体のスケジュールとタスクを管理",
      "活動時間に他メンバーが作業ができるように先回りして準備",
    ],
    learnings: [
      "現場のニーズ理解の重要性",
      "全体最適化と個別最適化のバランス",
      "リーダーシップの難しさ",
      "仕事の巻き取りすぎは良くない",
    ],
    achievements: ["現場での漁業者さん，水産課の方々への説明会"],
  },
  {
    id: "digital-archive-system",
    title: "デジタルアーカイブシステム開発バイト",
    image: "デジタルアーカイブ.png",
    description:
      "函館市には歴史的な資料が多く存在する．それらをデジタル化し，公開するシステムの開発に関わった．主に，先方とのメールでのコミュニケーションや，ドキュメントに沿っての資料追加，バグ修正を行った",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "チーム活動",
      "ヒアリング",
      "公開・活用",
      "コミュニケーション",
      "Git/GitHub",
      "Ruby on Rails",
      "HTML",
      "Tailwind",
      "CSS",
      "GitHub Actions",
      "メールのやり取り",
      "ドキュメント",
    ],
    innovations: [
      "ドメイン知識の理解",
      "先輩たちのコードの引き継ぎ",
      "先方とのメールのやり取り",
      "ドキュメントの更新",
    ],
    learnings: [
      "ドキュメントの重要性",
      "新規技術のキャッチアップの難しさ",
      "引き継いだコードの理解",
      "メールの書き方",
    ],
    achievements: [
      "先方とのコミュニケーションを通じて，「仕事」の進め方を学ぶ",
    ],
  },

  // リーダーシップの関連活動
  {
    id: "hacks-leader",
    title: "1年生2名とハッカソンに挑戦！",
    image: "fishhacks.JPG",
    description: "comming soon",
    category: "leadership",
    tags: [
      "課外活動",
      "開発",
      "リーダーシップ",
      "チーム活動",
      "フィールドワーク",
      "ハッカソン・開発イベント",
      "アイデア",
      "ペルソナ",
      "コミュニケーション",
      "チームビルディング",
      "受賞歴あり",
      "AIコーディング",
      "プレゼン・説明",
      "ドキュメント",
      "Git/GitHub",
      "JavaScript",
      "kintone",
      "HTML",
      "CSS",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "osc",
    title: "おもしろサイトコンテスト開催",
    image: "OSC2025.png",
    description: "comming soon",
    category: "leadership",
    tags: [
      "課外活動",
      "開発",
      "リーダーシップ",
      "学習支援",
      "個人活動",
      "ハッカソン・開発イベント",
      "ペルソナ",
      "企画・運営",
      "メンター・チューター",
      "アイデア",
      "公開・活用",
      "コミュニケーション",
      "プレゼン・説明",
      "ドキュメント",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "dayly-report-system",
    title: "日報に新しい価値を与えるシステムの検討",
    image: "日報アプリ.png",
    description: "comming soon",
    category: "leadership",
    tags: [
      "課外活動",
      "開発",
      "リーダーシップ",
      "チーム活動",
      "アイデア",
      "ペルソナ",
      "ヒアリング",
      "公開・活用",
      "機能要件・非機能要件",
      "コミュニケーション",
      "チームビルディング",
      "受賞歴あり",
      "プレゼン・説明",
      "ドキュメント",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "mll-leader",
    title: "メタ学習ラボ チューター長（写真は未来大学HPより引用）",
    image:
      "https://www.fun.ac.jp/wp-content/uploads/2020/02/CML_logo-193x165.png",
    description: "comming soon",
    category: "leadership",
    tags: [
      "課外活動",
      "リーダーシップ",
      "学習支援",
      "チーム活動",
      "企画・運営",
      "メンター・チューター",
      "アイデア",
      "コミュニケーション",
      "プレゼン・説明",
      "ドキュメント",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "oc",
    title: "オープンキャンパスへの出展を発案（写真は未来大学HPより引用）",
    image: "https://www.fun.ac.jp/wp-content/uploads/2025/07/20240804_187.jpg",
    description: "comming soon",
    category: "leadership",
    tags: [
      "課外活動",
      "リーダーシップ",
      "チーム活動",
      "企画・運営",
      "アイデア",
      "公開・活用",
      "コミュニケーション",
      "プレゼン・説明",
      "ドキュメント",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  {
    id: "cross-team-education-event",
    title: "【失敗】 開発の課外活動のチームを跨いだ教育イベントの企画",
    image: "OSC企画書.png",
    description: "comming soon",
    category: "leadership",
    tags: [
      "課外活動",
      "開発",
      "リーダーシップ",
      "学習支援",
      "個人活動",
      "ハッカソン・開発イベント",
      "企画・運営",
      "アイデア",
      "ペルソナ",
      "プレゼン・説明",
      "ドキュメント",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // 研究の関連活動
  {
    id: "corona-tutoring-study",
    title:
      "コロナ前後のチュータリングにおけるチューター・チューティを対象とした印象の検討",
    image: "印象研究.JPG",
    description: "comming soon",
    category: "research",
    tags: [
      "課外活動",
      "研究",
      "学習支援",
      "チーム活動",
      "共同研究",
      "教育工学",
      "統計",
      "コミュニケーション",
      "プレゼン・説明",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
    links: {
      "論文":
        "https://www.jstage.jst.go.jp/article/jsetstudy/2024/4/2024_JSET2024-4-C2/_pdf/-char/ja",
    },
  },
  {
    id: "tutoring-before-after-study",
    title: "【取り組み中】 チューターになる前後における意識の変化",
    image: "チューター前後研究.jpg",
    description: "comming soon",
    category: "research",
    tags: [
      "課外活動",
      "リーダーシップ",
      "研究",
      "学習支援",
      "チーム活動",
      "共同研究",
      "企画・運営",
      "統計",
      "コミュニケーション",
      "チームビルディング",
      "プレゼン・説明",
      "ドキュメント",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },

  // 学習支援の関連活動
  {
    id: "hacks-mentor",
    title: "P2hacks2024 メンター",
    image: "p2hacks-メンター.png",
    description: "comming soon",
    category: "learning",
    tags: [
      "課外活動",
      "開発",
      "学習支援",
      "チーム活動",
      "ハッカソン・開発イベント",
      "メンター・チューター",
      "コミュニケーション",
      "プレゼン・説明",
      "Git/GitHub",
    ],
    innovations: ["comming soon"],
    learnings: ["comming soon"],
    achievements: ["comming soon"],
  },
  {
    id: "education-event-my-team",
    title: "開発チーム内技術教育",
    image: "チーム内教育.jpg",
    description: "comming soon",
    category: "learning",
    tags: [
      "課外活動",
      "開発",
      "リーダーシップ",
      "学習支援",
      "チーム活動",
      "ペルソナ",
      "企画・運営",
      "メンター・チューター",
      "教育工学",
      "コミュニケーション",
      "チームビルディング",
      "AIコーディング",
      "プレゼン・説明",
      "ドキュメント",
      "Git/GitHub",
      "JavaScript",
      "HTML",
      "CSS",
      "GitHub Pages",
    ],
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
