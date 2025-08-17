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
      { src: "kabereco-start.png", caption: "スタート画面" },
      { src: "kabereco-select.png", caption: "壁紙選択画面" },
      { src: "kabereco-detail.png", caption: "壁紙の詳細" },
      { src: "kabereco-result.png", caption: "診断結果" },
    ],
    overview:
      "輸入壁紙販売店向けのアプリのチーム開発．店員さんはお客さんに理想の部屋を作る楽しさを感じて欲しいと考えながら仕事をしている．そのため，お客さんとのコミュニケーションを重視しているが，お客さんが自身の理想の部屋を言語化できない場合があることがその障害になっていた．そこで，潜在的な好みに基づいて壁紙の系統を推薦を行うアプリを開発した．4択で好きな壁紙を選んでもらうことを繰り返すことで，8,000枚の壁紙から大まかな好みを割り出し，その例を表示する．加えて，接客時に重たい壁紙見本帳を取り出す必要がある課題と，メーカーを跨いだ見た目の特徴から壁紙を検索することができる機能を作成した．",
    technologies: [
      "課外活動",
      "開発",
      "チーム活動",
      "フィールドワーク",
      "アイデア",
      "ペルソナ",
      "ヒアリング",
      "公開・活用",
      "自動化・効率化",
      "UI/UX",
      "機能要件・非機能要件",
      "コミュニケーション",
      "AIコーディング",
      "プレゼン・説明",
      "受賞歴あり",
      "Git/GitHub",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Vite",
      "GCP",
      "Apache",
    ],
    innovations: [
      "壁紙販売店でのヒアリングによる、課題・要望の理解",
      "非同期処理による4択の画像選択肢の表示",
      "想定するユーザーの行動を考慮したUI/UX",
    ],
    learnings: [
      "実際に使ってもらうことができる嬉しさ・楽しさ",
      "現場のニーズを直接聞くことの重要性",
      "Webフロントエンド開発に関する知識と，実際の開発経験",
    ],
    achievements: [
      "実店舗での実証実験を実施",
      "実店舗での店員さんからのフィードバックを受けて改善",
      "北海道アプリコンテスト 北海道経済産業局長賞 受賞",
      "未来大賞 受賞",
    ],
    vision:
      "アプリケーションを通じて課題を解決し，店員さんとお客さんが一緒に部屋作りを楽しむことができる体験を提供する",
    challenges:
      "お店で実際に使ってもらうための正しいニーズの理解と，そのニーズに合ったアプリを開発すること．また，ペルソナが適切に使えて，お店に置きたくなるようなUI/UXの設計．例えば，UIでは言葉選びや，ボタンの配置，全体の色などをチームで検討した．また，UXはお客さんがアプリを使うシーンを想定して，使いやすいか？過剰に待つ時間がないか？などを考慮した．実装として，非同期処理による4択の質問を受け取る通信，何度もクリックされた場合の対処などを，ペルソナから想定されるユーザー体験を悪くさせない実装を行った．",
    links: {
      "学内発表の発表ポスター":
        "https://drive.google.com/file/d/1kCqkZ2jIhkjj8MFwl6Xyut8J1a7eNujX/view",
      "北海道アプリコンテストの記事":
        "https://www.hmcc.jp/2024/02/22/北海道学生アプリコンテスト2024結果発表/",
      "大学ニュース記事": "https://www.fun.ac.jp/en/activity/23044",
      "サポート企業様の記事":
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
      { src: "fun-i-con-写真.jpg", caption: "成果発表会で特別賞！" },
      {
        src: "fun-i-con_発表会.jpg",
        caption: "成果発表会でのセッションでは全員が活動を語れる状態！",
      },
      { src: "fun-i-con-work2.jpg", caption: "ペーパータワー" },
      { src: "fun-i-con-drink.jpg", caption: "食事会" },
    ],
    overview:
      "「開発経験」で記載している壁紙販売店向けアプリを開発したチームのリーダーを引き継いだ．新規の15名チーム・新規テーマで開発に取り組んでいる．協力企業のクロスティホールディングス株式会社が業務で使用している「日報に新しい価値を与えるアプリケーションの開発」に取り組んでいる．現在は，プロジェクトの進行管理や，チームビルディング，メンバーのサポートを行っている．年内にはプロダクトを企業様に使ってもらうことを目指している．また，メンバーに「最高の活動だった」 と思ってもらうことを目指している．",
    technologies: [
      "課外活動",
      "開発",
      "リーダーシップ",
      "チームビルディング",
      "コミュニケーション",
      "プレゼン・説明",
      "チーム活動",
      "アイデア",
      "ヒアリング",
      "受賞歴あり",
      "学習支援",
      "機能要件・非機能要件",
      "ドキュメント",
      "Git/GitHub",
      "kintone",
    ],
    innovations: [
      "会社への導入に向けて，全員がアイデア出し，実装，プレゼンをできるように「おもしろサイトコンテスト」を開催",
      "チームづくりのペーパータワー",
      "仲を深める・みんなの頑張りを祝うための食事会",
      "ビジョンの言語化と発信",
      "取り組みの意図や意味を全員に伝える",
    ],
    learnings: [
      "協力してくれるメンバーがいることのありがたさ",
      "良いチームを作る難しさ",
      "一人でできる限界量",
    ],
    achievements: [
      "15名のメンバーでチームを立ち上げ",
      "成果発表会で特別賞を受賞",
      "おもしろサイトコンテストの実施",
    ],
    vision:
      "実際に会社で使われるアプリをチームで作り，DXを実現する！また，Fun-i-Conが10年続くチームにしたい！",
    challenges:
      "異なるバックグラウンドを持つメンバーと共に，同じゴールを目指すための施策の考案．また，どの施策の意図をどうやってメンバーに腹落ちした状態で取り組んでもらうかの設計，伝え方の工夫",
    links: {
      "ポスター":
        "https://drive.google.com/file/d/1sv361WstSzOHlzqQpSnl_P2bn1CKxOO0/view",
    },
  },

  // 研究
  {
    id: "research-project",
    title: "ナマコ漁における分布の可視化",
    description: "研究",
    category: "研究",
    page: "research",
    images: [
      { src: "ナマコ検出.png", caption: "ナマコ検出の様子" },
      { src: "ナマコ_カメラ.png", caption: "桁網に設置したカメラ" },
      { src: "ナマコ漁船.jpg", caption: "ナマコ漁船の様子" },
      {
        src: "留萌.jpg",
        caption: "漁業者さんのもとで泊まり込みの研究データ収集",
      },
      {
        src: "ナマコ_ご飯.png",
        caption: "漁師さんのご家族にいただいた朝ごはん",
      },
    ],
    overview:
      "北海道留萌市では 「桁(けた)引き網漁」 という漁法でナマコを獲っている．この漁法は底引網漁のように桁網を海に沈め，漁船で引くことで海底にいるナマコを獲る漁法である．着目した点として，ナマコがいるのは海底30mほどであり確認する方法がなく，どこでどれだけ獲れたのかが分からなかった．そこで，漁業者さんの協力のもと，桁網に水中カメラを取り付け海底の映像を撮影する．そして，その解析結果と船跡データを組み合わせることで，ナマコの分布を可視化することを目指す．これにより漁の最適化ができ，燃料の削減や漁獲量の向上する可能性ある．",
    technologies: [
      "講義",
      "研究",
      "マリンIT",
      "画像処理",
      "ヒアリング",
      "フィールドワーク",
      "コミュニケーション",
      "自動化・効率化",
      "プレゼン・説明",
      "個人活動",
      "AIコーディング",
      "Python",
    ],
    innovations: [
      "実際の現場を知ること",
      "実データの特徴を理解すること",
      "実利用を意識すること",
    ],
    learnings: [
      "「ご縁」 の大切さ",
      "現場への重要性・楽しさ",
      "画像処理と機械学習の基礎",
    ],
    achievements: [
      "泊まり込みでデータ収集を実施",
      "漁業者さん向けの研究発表",
      "学会発表",
    ],
    vision: "情報技術を活用して，少しでも漁業者さんの力になる！",
    challenges:
      "商業として行なっている漁にお邪魔しているため，最大限ご迷惑をおかけしないようにデータを集める必要があること．また，漁業者さんとの信頼関係の上で成り立っているので，その関係を大切にすること．",
    links: {
      "大学パンフレットに研究が掲載":
        "https://www.d-pam.com/fun/2515040/index.html#target/page_no=27",
    },
  },

  // 学習支援
  {
    id: "tutoring-experience",
    title: "メタ学習ラボ チューター活動",
    description: "学習支援",
    category: "学習支援",
    page: "learning",
    images: [
      { src: "メタラボ資格.JPG", caption: "資格証明書" },
      { src: "メタラボ研修.JPG", caption: "研修風景" },
      {
        src: "https://meta-lab.jp/images/recruit/about/tutoring_1.jpg",
        caption:
          "チュータリング風景(メタ学習ラボHP：https://meta-lab.jp/intro/index.html より引用) ",
      },
    ],
    overview:
      "学部1,2年生向けの学生同士の個別指導（チュータリング）を行うメタ学習ラボで，チューターとして4年間活動．プログラミングと数学の個別指導（チュータリング）を通じて，学習者一人ひとりに寄り添った教育支援を行っている．また，そのチュータリングを行うための研修を受けている．チュータリング以外にも，学習イベントの企画や，教育に関する共同研究，チューター長としても活動を行なっている．",
    technologies: [
      "課外活動",
      "学習支援",
      "チーム活動",
      "企画・運営",
      "メンター・チューター",
      "公開・活用",
      "教育工学",
      "コミュニケーション",
      "プレゼン・説明",
      "ドキュメント",
    ],
    innovations: [
      "人に合わせた教え方の工夫",
      "チューター同士の情報共有とフィードバックの仕組み",
      "毎週月曜日の研修",
    ],
    learnings: [
      "学習支援必要な知識の習得",
      "学習支援の実践に関する知見",
      "イベント企画・運営の方法（企画書作成，教材準備，運営 など）",
    ],
    achievements: [
      "CRLA ITTPC レベル1チューター資格（国際規格のチュータリング資格）取得",
      "チュータリング研修50件以上",
      "イベント運営10件以上",
      "共同研究への参加・立ち上げ",
    ],
    vision:
      "公立はこだて未来大学の学生が，自律的な学習者と支援を行うことができる",
    challenges: "個々の学習者の特性や相談内容を理解し，適切な支援を行うこと",
    links: {
      "大学HPのメタ学習ラボ紹介ページ": "https://www.fun.ac.jp/meta-leaning",
      "メタ学習ラボ専用HP": "https://meta-lab.jp/intro/index.html",
      "共同研究論文":
        "https://www.jstage.jst.go.jp/article/jsetstudy/2024/4/2024_JSET2024-4-C2/_pdf/-char/ja",
    },
  },
];

// 全てのタグを取得（メインコンテンツから）
export function getAllMainContentTags(): string[] {
  const tags = new Set<string>();
  mainContents.forEach((content) => {
    if (content.technologies) {
      content.technologies.forEach((tech) => tags.add(tech));
    }
  });
  return Array.from(tags).sort();
}

// IDでメインコンテンツを取得
export function getMainContentById(id: string): MainContent | undefined {
  return mainContents.find((content) => content.id === id);
}
