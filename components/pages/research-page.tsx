import { StickyContentLayout } from "@/components/sticky-content-layout"
import { SlidingRelatedActivities } from "@/components/sliding-related-activities"

const projectData = {
  title: "自然言語処理を用いた感情分析システム",
  description: "研究",
  images: [
    { src: "/nlp-research.png", caption: "研究システムの概要" },
    { src: "/nlp-research.png", caption: "データ分析結果" },
    { src: "/nlp-research.png", caption: "学会発表の様子" },
  ],
  overview: "SNSの投稿データから感情を自動分析するシステムの研究開発。深層学習モデルを用いて高精度な感情分類を実現。",
  technologies: ["Python", "PyTorch", "BERT", "Flask", "Docker"],
  innovations: [
    "データ前処理とモデル改良により精度を60%から85%まで向上",
    "学会発表では多くの質問を受け、研究の意義を再認識",
    "企業との共同研究の機会を得て、実用化への道筋を見つけた",
  ],
  learnings: ["研究における仮説検証の重要性", "論文執筆とプレゼンテーションスキル", "最新技術のキャッチアップ方法"],
  achievements: ["学内研究発表会で最優秀賞受賞", "国際会議への論文投稿（査読中）", "企業との共同研究契約締結"],
  vision: "AI技術を活用して人々の感情やメンタルヘルスをサポートし、より良い社会の実現に貢献したい",
  challenges:
    "初期のモデル精度が低く、何度も挫折しそうになった。データの質と前処理の重要性を痛感し、基礎から学び直した",
  links: {
    paper: "#",
    presentation: "#",
  },
}

const relatedActivities = [
  {
    title: "ETロボコンの画像処理",
    image: "/robot-competition.png",
    description: "自律走行ロボットの画像処理アルゴリズムを開発",
    overview:
      "ETロボコン（組込みソフトウェア技術者試験ロボットコンテスト）において、自律走行ロボットの画像処理システムを開発。リアルタイムでのライン検出と障害物回避アルゴリズムを実装しました。",
    technologies: ["C++", "OpenCV", "組込みシステム", "リアルタイム処理", "Python"],
    innovations: [
      "高速なライン検出アルゴリズムの実装",
      "ノイズに強い画像前処理の開発",
      "メモリ効率を考慮した組込み向け最適化",
    ],
    learnings: ["組込みシステムでのリソース制約の理解", "リアルタイム処理の重要性", "チーム開発での役割分担"],
    achievements: ["地区大会で3位入賞", "画像処理速度30%向上を実現", "チーム内技術リーダーとして貢献"],
    tags: [
      "C++",
      "OpenCV",
      "組込みシステム",
      "リアルタイム処理",
      "Python",
      "画像処理",
      "組込み",
      "ロボット",
      "チーム開発",
    ],
  },
  {
    title: "学習支援組織での研究発表",
    image: "/placeholder-wl3j8.png",
    description: "学習効果向上に関する研究成果を発表",
    overview:
      "学習支援組織において、効果的な学習方法に関する研究を実施し、その成果を発表しました。データ分析を通じて学習効果の向上方法を提案しました。",
    technologies: ["統計解析", "Python", "データ可視化", "アンケート調査"],
    innovations: ["学習データの定量的分析手法の開発", "効果的な学習パターンの発見", "個別最適化された学習プランの提案"],
    learnings: ["データドリブンな意思決定の重要性", "統計的手法の実践的応用", "研究成果の実用化プロセス"],
    achievements: ["学習支援組織で研究発表賞受賞", "提案手法の実用化", "学習効果20%向上を実現"],
    tags: ["統計解析", "Python", "データ可視化", "アンケート調査", "研究発表", "データ分析", "教育効果", "統計"],
  },
]

const handleTagClick = (tag: string) => {
  ;(window as any).addSearchTag?.(tag)
}

export function ResearchPage() {
  return (
    <StickyContentLayout {...projectData} onTagClick={handleTagClick}>
      <SlidingRelatedActivities title="関連する活動" activities={relatedActivities} onTagClick={handleTagClick} />
    </StickyContentLayout>
  )
}
