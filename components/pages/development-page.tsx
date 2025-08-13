import { StickyContentLayout } from "@/components/sticky-content-layout";
import { SlidingRelatedActivities } from "@/components/sliding-related-activities";

// 型定義を追加
interface ProjectLinks {
  demo?: string;
  article1?: string;
  article2?: string;
  article3?: string;
  github?: string;
  paper?: string;
  presentation?: string;
}

const projectData = {
  title: "壁紙販売店向けアプリ",
  description: "開発経験",
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
    demo: "https://drive.google.com/file/d/1kCqkZ2jIhkjj8MFwl6Xyut8J1a7eNujX/view",
    article1:
      "https://www.hmcc.jp/2024/02/22/北海道学生アプリコンテスト2024結果発表/",
    article2: "https://www.fun.ac.jp/en/activity/23044",
    article3:
      "https://www.wantedly.com/companies/crosstyhd/post_articles/926524",
  } as ProjectLinks,
};

const relatedActivities = [
  {
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
  },
  {
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
  },
  {
    title: "ECサイト構築プロジェクト",
    image: "/wallpaper-app-interface.png",
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
  },
  {
    title: "IoTセンサーシステム開発",
    image: "/wallpaper-app-interface.png",
    description: "農業向けIoTセンサーシステムの開発",
    overview:
      "農業の効率化を目指し、土壌の湿度や温度を監視するIoTセンサーシステムを開発。リアルタイムでデータを収集し、スマートフォンで確認できるシステムを構築しました。",
    technologies: ["Arduino", "Python", "MQTT", "React Native"],
    innovations: [
      "低消費電力センサーの活用",
      "クラウドベースのデータ管理",
      "アラート機能の実装",
    ],
    learnings: [
      "IoTシステムの設計",
      "センサーデータの処理",
      "リアルタイム通信の実装",
    ],
    achievements: [
      "農家3軒での実証実験",
      "水やり効率30%向上",
      "技術コンテスト入賞",
    ],
    tags: ["Arduino", "Python", "MQTT", "React Native", "IoT", "農業技術"],
  },
];

const handleTagClick = (tag: string) => {
  if (typeof window !== "undefined" && (window as any).addSearchTag) {
    (window as any).addSearchTag(tag);
  }
};

export function DevelopmentPage() {
  return (
    <StickyContentLayout {...projectData} onTagClick={handleTagClick}>
      <SlidingRelatedActivities
        title="関連する活動"
        activities={relatedActivities}
        onTagClick={handleTagClick}
      />
    </StickyContentLayout>
  );
}
