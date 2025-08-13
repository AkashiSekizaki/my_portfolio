import { StickyContentLayout } from "@/components/sticky-content-layout"
import { SlidingRelatedActivities } from "@/components/sliding-related-activities"

const projectData = {
  title: "壁紙販売店向けアプリ",
  description: "開発経験",
  images: [
    { src: "/wallpaper-app-interface.png", caption: "メイン画面のUI" },
    { src: "/wallpaper-app-interface.png", caption: "在庫管理画面" },
    { src: "/wallpaper-app-interface.png", caption: "注文管理システム" },
  ],
  overview:
    "壁紙販売店の在庫管理と顧客対応を効率化するWebアプリケーション。リアルタイムでの在庫確認と注文管理機能を実装。",
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
  innovations: [
    "リアルタイム在庫同期システムの実装",
    "直感的なUI/UXデザインの採用",
    "モバイルファーストなレスポンシブデザイン",
  ],
  learnings: [
    "大規模なデータベース設計の重要性",
    "ユーザビリティテストの価値",
    "チーム開発でのコミュニケーションスキル",
  ],
  achievements: ["開発期間3ヶ月で完成", "ユーザー満足度90%以上", "処理速度50%向上を実現"],
  vision: "技術を通じて地域の小規模事業者の業務効率化を支援し、デジタル格差の解消に貢献したい",
  challenges:
    "初めての本格的なWebアプリ開発で、データベース設計やセキュリティ対策に苦労。特にリアルタイム同期の実装では何度も設計を見直した",
  links: {
    github: "#",
    demo: "#",
  },
}

const relatedActivities = [
  {
    title: "琵琶湖漁業者向けアプリ開発",
    image: "/fishing-app-development.png",
    description: "地域課題解決を目指したアプリ開発（開発中断）",
    overview:
      "琵琶湖の漁業者が抱える課題を解決するためのモバイルアプリケーション開発プロジェクト。漁獲量管理や市場価格情報の提供を目指しましたが、様々な要因により開発を中断しました。",
    technologies: ["React Native", "Firebase", "Node.js", "地理情報システム"],
    innovations: ["漁業者のニーズに特化したUI設計", "リアルタイム市場価格情報の統合", "GPS機能を活用した漁場管理"],
    learnings: [
      "ステークホルダーとの継続的なコミュニケーションの重要性",
      "プロジェクト管理とリスク評価",
      "失敗から学ぶ価値と次への活かし方",
    ],
    achievements: ["プロトタイプの完成", "漁業者へのヒアリング実施", "技術的課題の特定と解決策の提案"],
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
    technologies: ["React", "Python", "TypeScript", "API連携", "プロトタイピング"],
    innovations: ["短時間でのMVP開発手法の習得", "異なる専門分野メンバーとの協働", "ユーザー視点でのサービス設計"],
    learnings: [
      "時間制約下での優先順位付け",
      "アジャイル開発の実践的理解",
      "多様なバックグラウンドを持つチームでの協働",
    ],
    achievements: ["3回のハッカソン参加", "1回の入賞経験", "チームリーダーとしての経験"],
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
    innovations: ["直感的な商品登録システム", "自動在庫管理機能", "モバイル決済対応"],
    learnings: ["ユーザー中心設計の重要性", "決済システムの実装", "セキュリティ対策の実践"],
    achievements: ["5社での導入実績", "売上20%向上を実現", "ユーザー満足度95%達成"],
    tags: ["Vue.js", "Laravel", "MySQL", "Stripe", "ECサイト", "UI/UX"],
  },
  {
    title: "IoTセンサーシステム開発",
    image: "/wallpaper-app-interface.png",
    description: "農業向けIoTセンサーシステムの開発",
    overview:
      "農業の効率化を目指し、土壌の湿度や温度を監視するIoTセンサーシステムを開発。リアルタイムでデータを収集し、スマートフォンで確認できるシステムを構築しました。",
    technologies: ["Arduino", "Python", "MQTT", "React Native"],
    innovations: ["低消費電力センサーの活用", "クラウドベースのデータ管理", "アラート機能の実装"],
    learnings: ["IoTシステムの設計", "センサーデータの処理", "リアルタイム通信の実装"],
    achievements: ["農家3軒での実証実験", "水やり効率30%向上", "技術コンテスト入賞"],
    tags: ["Arduino", "Python", "MQTT", "React Native", "IoT", "農業技術"],
  },
]

const handleTagClick = (tag: string) => {
  ;(window as any).addSearchTag?.(tag)
}

export function DevelopmentPage() {
  return (
    <StickyContentLayout {...projectData} onTagClick={handleTagClick}>
      <SlidingRelatedActivities title="関連する活動" activities={relatedActivities} onTagClick={handleTagClick} />
    </StickyContentLayout>
  )
}
