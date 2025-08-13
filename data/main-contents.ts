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
    technologies: [
      "ヒアリング",
      "React",
      "TypeScript",
      "Vite",
      "GCP",
      "Apache",
      "現場導入",
      "開発",
    ],
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
    title: "Fun-i-Con リーダー",
    description: "リーダーシップ",
    category: "リーダーシップ",
    page: "leadership",
    images: [
      { src: "/fun-i-con-写真.jpg", caption: "成果発表会で特別賞" },
      { src: "/fun-i-con-work2.jpg", caption: "ペーパータワー" },
      { src: "/fun-i-con-drink.jpg", caption: "食事会" },
    ],
    overview:
      "「開発経験」で記載している壁紙販売店向けアプリを開発したチームのリーダーを引き継いだ．新規の15名チーム・新規テーマで開発に取り組んでいる．協力企業のクロスティホールディングス株式会社と連携し，業務で使用している「日報に新しい価値を与えるアプリケーションの開発」に取り組んでいる．",
    technologies: [
      "リーダーシップ",
      "チームビルディング",
      "コミュニケーション",
      "学習支援",
    ],
    innovations: [
      "会社への導入に向けて，全員がアイデア出し，実装，プレゼンをできるように「おもしろサイトコンテスト」を開催",
      "ビジョンの言語化と発信",
      "取り組みの意図や意味を全員に伝える",
    ],
    learnings: [
      "協力してくれるメンバーがいることのありがたさ",
      "良いチームを作る難しさ",
      "一人でできる限界量",
    ],
    achievements: [
      "成果発表会で特別賞を受賞",
      "おもしろサイトコンテストの実施",
      "プロダクトの内容決定",
    ],
    vision: "実際に会社で使われるアプリをチームで作り，DXを実現する！",
    challenges:
      "異なるバックグラウンドを持つメンバーと共に，同じゴールを目指すためのチャレンジ（ペーパータワー，勉強会，おもしろサイトコンテスト，食事会など）",
  },

  // 研究
  {
    id: "research-project",
    title: "桁引き網漁のナマコ分布の可視化",
    description: "研究",
    category: "研究",
    page: "research",
    images: [
      { src: "/ナマコ検出.png", caption: "ナマコ検出の様子" },
      { src: "/ナマコ漁船.jpg", caption: "ナマコ漁船の様子" },
      {
        src: "/留萌.jpg",
        caption: "漁業者さんのもとで泊まり込みの研究データ収集",
      },
    ],
    overview:
      "北海道では「桁(けた)引き網漁」という漁法でナマコを獲っている．ナマコがいるのは海底30mほどであり確認する方法がなく，どこでどれだけ獲れたのかが分からなかった．そこで，漁業者さんの協力のもと，桁網に水中カメラを取り付け海底の映像を撮影する．そして，その解析結果と船跡データを組み合わせることで，ナマコの分布を可視化する．これにより漁の最適化ができ，燃料の削減や漁獲量の向上する可能性ある．",
    technologies: [
      "画像認識",
      "マリンIT",
      "フィールドワーク",
      "機械学習",
      "研究",
    ],
    innovations: [
      "実際の現場を知ること",
      "実データの特徴を理解すること",
      "実利用を意識すること",
    ],
    learnings: [
      "「ご縁」の大切さ",
      "現場の仕事のやり方を知ることの重要性",
      "画像処理と機械学習の基礎",
    ],
    achievements: [
      "泊まり込みでデータ収集を実施",
      "漁業者さん向けの研究発表",
      "学会発表",
    ],
    vision: "情報技術を活用して，少しでも漁業者さんの力になる！",
    challenges:
      "商業として行なっている漁にお邪魔しているため，最大限ご迷惑をおかけしないようにデータを集める必要があること",
  },

  // 学習支援
  {
    id: "tutoring-experience",
    title: "メタ学習ラボ チューター活動",
    description: "学習支援",
    category: "学習支援",
    page: "learning",
    images: [
      {
        src: "https://meta-lab.jp/images/recruit/about/tutoring_1.jpg",
        caption:
          "チュータリング風景(メタ学習ラボHP：https://meta-lab.jp/intro/index.html より引用) ",
      },
      { src: "/メタラボ資格.JPG", caption: "資格証明書" },
      { src: "/メタラボ研修.JPG", caption: "研修風景" },
    ],
    overview:
      "学部1,2年生向けの学生同士の個別指導（チュータリング）を行うメタ学習ラボで，チューターとして4年間活動．プログラミングと数学の個別指導を通じて、学習者一人ひとりに寄り添った教育支援を行っています．また，その準備として専用の研修を受け，教育工学を学んでいます．加えて，学習イベントの企画や，教育に関する研究，チューター長としても活動を行なっています．",
    technologies: [
      "チュータリング",
      "教育工学",
      "イベント企画",
      "マネジメント",
      "研究",
    ],
    innovations: [
      "チューター同士の情報共有とフィードバックの仕組み",
      "学習者の理解度に応じた個別カリキュラム",
      "人に合わせた教え方の工夫",
    ],
    learnings: [
      "学習支援必要な知識の習得",
      "学習支援の実践に関する知見",
      "イベント企画・運営の方法",
    ],
    achievements: [
      "CRLA ITTPC レベル1チューター資格（国際規格のチュータリング資格）取得",
      "チュータリング研修50件以上",
      "イベント運営10件以上",
      "共同研究への参加・立ち上げ",
    ],
    vision: "公立はこだて未来大学の学生が自律的な学習者となる",
    challenges: "個々の学習者の特性や相談内容を理解し，適切な支援を行うこと",
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
