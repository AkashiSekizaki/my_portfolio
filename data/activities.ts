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
    title: "ETロボコンの画像処理",
    image: "ETロボコン画像処理.png",
    description:
      "ETロボコンの画像処理担当．チームの定めた機能要件・非機能要件を満たす画像処理の要素技術を検討・実装する．また，手法の議論や，方針の決定，モデルに組み込むために，説明資料を作成し，メンバーに説明を行う．",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "チーム活動",
      "個人活動",
      "画像処理",
      "機能要件・非機能要件",
      "アイデア",
      "プレゼン・説明",
      "ドキュメント",
      "コミュニケーション",
      "AIコーディング",
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
    achievements: ["手法説明スライド複数作成"],
  },
  {
    id: "portfolio-site",
    title: "ポートフォリオサイト作成",
    image: "ポートフォリオ.png",
    description:
      "自身の人生の軌跡や，取り組んだ活動の内容を伝えるアプリケーション．最速&簡単にアウトプットを出すことを意識し，AIツールを中心として開発・GitHub ActionsによるCI/CDの自動化を行う．",
    category: "development",
    tags: [
      "課外活動",
      "開発",
      "個人活動",
      "AIコーディング",
      "GitHub Actions",
      "GitHub Pages",
      "公開・活用",
      "Git/GitHub",
      "TypeScript",
      "JavaScript",
      "CSS",
    ],
    innovations: [
      "GitHub ActionsによるCI/CDの自動化",
      "Vercel v0，GitHub Copilotを活用したコード生成",
      "タグによる検索で，多数のコンテンツへのアクセスを促す",
      "シンプルなUIを意識",
      "派手さよりも，内容の充実を重視",
    ],
    learnings: ["AIの活用", "CI/CDの自動化の重要性", "自身の活動の振り返り"],
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
      "学習支援組織や飲み会などで使う調整さんの日程入力が楽になるツール．日程は日付を時間を1行づつ入れていくが，日付＋時間で繰り返しの場合が多かった．そこで，それを自動的に作るツールを作成した．実際に友人たちに使ってもらっているアプリです！",
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
    title: "AIによるメール添削の際に匿名化をサポートするツール",
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
      "プレゼン・説明",
      "AIコーディング",
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
    learnings: ["プレゼンの構成", "形態素解析の理解"],
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
      "初挑戦した 「函館の交通問題をハックする」 がテーマのハッカソン．函館のバス路線が見づらいことに着目し，バス路線に動きをつけるプロダクトを作成．実装上のレベルは低いと感じるが，開発の原点です！",
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
      "主にアイデアが評価され，ハッカソン最優秀賞受賞",
      "（自身の性格への影響）交流会で社長さんと話す機会があったが何も話すことができず 「こんな素晴らしい機会を活かせない自身の性格は勿体無い！」 と思い，自身の行動を変えるきっかけになった",
      "開発に少し自信を持つ（2ヶ月後に打ち砕かれる）",
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
      "チーム活動",
      "マリンIT",
      "リーダーシップ",
      "フィールドワーク",
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
      "メールのやり取り",
      "ドキュメント",
      "Git/GitHub",
      "Ruby on Rails",
      "HTML",
      "Tailwind",
      "CSS",
      "GitHub Actions",
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
    description:
      "プログラミング歴半年の1年生2名とハッカソンに参加．共通のビジョン・方針を決め，合意形成を取った．これにより，経験者の自分に対して，意見ができる下地を作った．また，モチベーションを高めるために「褒め合い会」の実施，アイデアのフレームワークの教え合いなど，学びの場のしての取り組みも行った．",
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
      "HTML",
      "CSS",
    ],
    innovations: [
      "初日にメンバーで「個人ごとの目標・目指すものを言語化して共有」，「採点基準の深堀り（なぜそのような配点になっているのか？そこから，どんなことを評価したいのか？）」を行い，最終的に「チームの目標（軸）」「役割分担」を決定",
      "共通認識を持っている「チームの目標（軸）」に基づいた，意思決定を行った",
      "朝の1分間スピーチで話をする下地を作る",
      "クロージングで 「褒め合い会」 を実施し，１日をプラスで終える",
      "オズボーンのチェックリストを用いて，アイデアのフレームワークを教える",
    ],
    learnings: [
      "リーダーシップの重要性",
      "チームビルディングの難しさ",
      "メンバーとのコミュニケーションの大切さ",
      "メンバーの成長を促すための環境作り",
    ],
    achievements: [
      "CyberAgent賞受賞",
      "メンバーの一人が自分がメンターを務める別のハッカソンに参加，賞を受賞する！",
    ],
    links: {
      "GitHub": "https://github.com/FISH-HACKATHON/Fun-i-Con",
      "ハッカソンの大学ニュース": "https://www.fun.ac.jp/activity/25782",
    },
  },
  {
    id: "osc",
    title: "おもしろサイトコンテスト開催",
    image: "OSC2025.png",
    description:
      "1ヶ月でアイデア出し，実装，プレゼンまでを一人一人に取り組んでもらう開発イベント．Fin-i-Conチームのチュートリアルとして実施．開発が初めて / 経験はあるが，自信のないメンバーなど様々な属性がいる中で，目標を達成するための技術力の底上げを目的としたイベントを開催．また，実装上の課題を一緒に解決することで，必然的に交流が生まれ，チームの結束力を高めることを目指した．",
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
    innovations: [
      "会社へのアプリ導入を目指すため，アイデア出しから実装，プレゼンまでを行うイベントにした",
      "チーム全員で今後の活動を行うために，誰かに頼って終わってしまう可能性のあるチーム単位での活動ではなく，個人単位での活動にした",
      "上記のような目的を全員に説明を行った",
      "多少高い難易度に設定することで，質問が発生するようにした",
      "開発が完全に初めてのメンバー向けに，簡単な技術教育を行った",
      "発表会では，メンバーとオンライン参加のサポート企業の方も一緒に盛り上がれるように，実況チャンネルを用意した",
      "モチベーションの1つとして，賞品を用意した / サポート企業の方にもご用意いただいた",
    ],
    learnings: [
      "イベント設計の難しさ",
      "メンターとしての経験",
      "イベントの楽しさ",
    ],
    achievements: [
      "メンバーの成長！",
      "実況チャンネルのコメント数100件以上",
      "楽しかった度 4.75/5 !",
      "学びになった度 4.83/5 !",
      "外部発表でもお褒めの言葉をもらう",
    ],
  },
  {
    id: "dayly-report-system",
    title: "日報に新しい価値を与えるシステムの検討",
    image: "日報アプリ.png",
    description:
      "サポート企業のクロスティHDでは，企業が適切に給与を支払うとともに，上司の方が業務内容を把握する目的で，日報をつけている．この日報をただの業務内容の報告ではなく，ナレッジ（仕事のノウハウなど）や日々の学びの蓄積・共有の手段に変えていくアプリケーションの開発を目指している．例えば，1年前に自分で行った業務を思い出す・他の人から引き継いだ業務のやり方を知るなどの目的で利用できると考えている．",
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
    innovations: [
      "企業の課題を理解する",
      "ペルソナに基づいて全員でアイデアを出す",
      "カスタマージャーニーマップなどの手法を用いて，ペルソナの行動を深堀りする",
      "アイデアを出しやすい雰囲気を作る",
    ],
    learnings: [
      "ペルソナの重要性",
      "アイデア出しの難しさ",
      "アイデアをまとめる難しさ",
      "価値を言語化する難しさ",
      "チームビルディングの大切さ",
    ],
    achievements: ["アイデアの決定", "メンバーの共通認識の形成", "要件定義"],
  },
  {
    id: "mll-leader",
    title: "メタ学習ラボ チューター長（写真は未来大学HPより引用）",
    image:
      "https://www.fun.ac.jp/wp-content/uploads/2020/02/CML_logo-193x165.png",
    description:
      "学内の自律学習支援組織のチューター長を務める．シフトの作成などの平常業務だけでなく，チューターの教育の仕組みの提案や，共同研究の働きかけ，オープンキャンパスへの出展など発案した．",
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
    innovations: [
      "平常業務を忘れないように，チェックリストを作成",
      "積極的にメンバーと会話・相談をする",
      "アイデアはなるべくオープンな場で発言する",
    ],
    learnings: [
      "協力してくれるメンバー,教員の皆さんの存在の大切さ",
      "アイデアは積極的に発信した方が良い",
    ],
    achievements: [
      "平常通りの運営",
      "共同研究の立ち上げ",
      "組織内の教育の仕組みの提案",
      "オープンキャンパスへの出展",
    ],
    links: {
      "大学HPのメタ学習ラボ紹介ページ": "https://www.fun.ac.jp/meta-leaning",
      "メタ学習ラボ専用HP": "https://meta-lab.jp/intro/index.html",
      "共同研究論文":
        "https://www.jstage.jst.go.jp/article/jsetstudy/2024/4/2024_JSET2024-4-C2/_pdf/-char/ja",
    },
  },
  {
    id: "oc",
    title: "オープンキャンパスへの出展を発案（写真は未来大学HPより引用）",
    image: "https://www.fun.ac.jp/wp-content/uploads/2025/07/20240804_187.jpg",
    description:
      "オープンキャンパスでは，研究についての説明や活発な課外活動の発表が多くあるが，高校生が入った後の1,2年の大学での勉強の不安払拭をする出展はあまりなかった．また，以前別件で参加した際にプログラミングや数学に不安を抱えてる高校生が一定数いた．そこで，所属している自律学習支援組織の存在を知ってもらう出展は，他の出展とは別の価値があると考えた．",
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
    innovations: [
      "メンバー集めのために，直接声がけを行った",
      "企画を組織の教員に説明し，準備時間を業務（謝金が発生する）になるようにした",
    ],
    learnings: [
      "オープンキャンパスでは保護者の方が意欲的であった",
      "手軽さの重要性",
    ],
    achievements: ["出展の実現", "高校生や保護者の方々との交流"],
    links: {
      "大学HPのオープンキャンパス紹介ページ":
        "https://www.fun.ac.jp/open-campus2025",
    },
  },
  {
    id: "cross-team-education-event",
    title: "【失敗】 開発の課外活動のチームを跨いだ教育イベントの企画",
    image: "グループ.png",
    description:
      "自身が参加している大学の開発演習の課外活動「高度ICT演習」では，学部1年生から修士2年生までの幅広い年齢層が参加している．また，チームに分かれ活動しているが，チーム間で交流する機会はあまりない．加えて，チーム内でリーダーは代替わりされていくが，主要メンバーが抜けてしまうケースもあった．そこで，チームを跨いだ教育イベントを企画した．",
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
    innovations: ["企画書の作成", "各リーダーへの呼びかけ", "教員への説明"],
    learnings: ["仲間集めの重要性", "予算確保の難しさ", "企画の難しさ"],
    achievements: ["実施は現実的でないと判断（失敗）"],
    links: {
      "企画書のコピー":
        "https://docs.google.com/document/d/1cEKXl4hHFtu3a1YPaPEmhxcfpZO6drwK/edit?usp=sharing&ouid=109803715284927477840&rtpof=true&sd=true",
    },
  },

  // 研究の関連活動
  {
    id: "corona-tutoring-study",
    title:
      "コロナ前後のチュータリングにおけるチューター・チューティを対象とした印象の検討",
    image: "印象.png",
    description:
      "所属する自律学習支援組織（メタ学習ラボ）の研究が立ち上がり始まった共同研究の取り組み．チュータリング後アンケートの結果を，コロナ前後で比較し，チューター・チューティの印象の変化を検討した．当時学部4年生の先輩2名と自身（当時学部2年生後期）の3名で2年間取り組んだ．",
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
    innovations: [
      "作業時間を決める",
      "メタ学習ラボの教員との定期的なゼミ",
      "定期的な食事会",
    ],
    learnings: ["研究についての理解"],
    achievements: ["日本教育工学会の研究会に論文投稿"],
    links: {
      "論文":
        "https://www.jstage.jst.go.jp/article/jsetstudy/2024/4/2024_JSET2024-4-C2/_pdf/-char/ja",
    },
  },
  {
    id: "tutoring-before-after-study",
    title: "【取り組み中】 チューターになる前後における意識の変化",
    image: "成長.png",
    description:
      "自身が経験したメタ学習ラボの共同研究の文化を引き継ぎ，希望者とともに共同研究の立ち上げを行った．現在は自身（修士1年）と修士1年，学部2年の3名と取り組んでいる．内容は，チューターになる前後での意識の変化を調査するものである．",
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
    innovations: [
      "共同研究の進め方のリード",
      "美味しいご飯chや，timesなどでプレイベートな話の場を設ける",
    ],
    learnings: ["人と取り組むことの楽しさ", "研究の進め方の難しさ"],
    achievements: [
      "研究データの入手",
      "定期的なMTG",
      "（今後の頑張りを記載していきます...！）",
    ],
    links: {
      "説明会資料(写してはいけないものは消しています)":
        "https://docs.google.com/presentation/d/1Y_D-aMfRLiWwzziv8iy_KocvPOOeL7Lv/edit?usp=sharing&ouid=109803715284927477840&rtpof=true&sd=true",
    },
  },

  // 学習支援の関連活動
  {
    id: "hacks-mentor",
    title: "P2hacks2024 メンター（写真は大学HPより引用）",
    image: "https://www.fun.ac.jp/wp-content/uploads/2025/01/1.png",
    description:
      "運営メンバーの一人より，主に学習支援組織のチューターとしての経験を買ってもらい，推薦をもらうことができた．これまでの開発経験からアイデア段階や，Web開発などの相談を受ける．個人的に最も嬉しかったこととして，自身が開発をきっかけになった思い入れのあるハッカソンであり，そこに貢献できたことができたこと．加えて，2ヶ月前に一緒にハッカソンに挑戦した1年生の1人が賞を取ってくれたことがある．",
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
    innovations: [
      "自分のバリューが出せるメンター対応",
      "ほぼ初対面のメンバーであったため，運営メンバーに自身の熱意を伝える🔥",
    ],
    learnings: ["熱意の重要性", "学内には素晴らしい人間が多い"],
    achievements: [
      "新しい人との繋がりができた",
      "p2hacksとして未来大学賞 受賞",
    ],
  },
  {
    id: "education-event-my-team",
    title: "開発チーム内技術教育",
    image: "チーム内教育.jpg",
    description:
      "Fun-i-Conチーム内での技術教育を行う．Fun-i-Conとして，チームで開発を続けていくにあたり，基礎的な知識や開発に対する自信は重要であると考える．しかし，そもそもプログラミングが初めてのメンバーも多い．そこで，開発が初めてのメンバーに対して，HTML, CSS, JavaScriptの基礎をレクチャ．また，アプリ開発とは？についても説明を行った．",
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
    innovations: [
      "メタ学習ラボで学んだ教え方を実践",
      "興味を持てそうな題材で教材作成",
      "JavaScriptの採用率など勉強することが将来どのように役出つのかを話す",
    ],
    learnings: ["相手の理解度に応じた教え方の重要性"],
    achievements: [
      "メンバーの成長",
      "おもしろサイトコンテストで全員が作品を作ってこられた",
    ],
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
