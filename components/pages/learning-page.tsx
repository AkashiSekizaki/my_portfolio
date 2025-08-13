import { StickyContentLayout } from "@/components/sticky-content-layout"
import { SlidingRelatedActivities } from "@/components/sliding-related-activities"
import { sharedActivities } from "@/components/shared-data"

const projectData = {
  title: "学習支援プログラム",
  description: "学習支援",
  images: [
    { src: "/tutoring-session.png", caption: "個別指導の様子" },
    { src: "/tutoring-session.png", caption: "グループ学習会" },
    { src: "/tutoring-session.png", caption: "プロジェクト発表会" },
  ],
  overview:
    "プログラミング初学者の後輩に対して、個別指導やグループ学習会を通じて学習支援を行いました。基礎から応用まで幅広くサポートし、多くの学生の成長を支援しました。",
  technologies: ["Python", "Java", "Web開発", "データベース", "教育手法"],
  innovations: [
    "個人のレベルに合わせたカリキュラム作成",
    "実践的なプロジェクトベース学習の導入",
    "ピアラーニングの促進",
  ],
  learnings: ["教える側の責任と成長", "相手の立場に立った説明の重要性", "継続的な学習モチベーションの維持方法"],
  achievements: ["100時間以上の学習支援を実施", "支援した学生の80%が目標達成", "学習支援組織で優秀指導者賞を受賞"],
  vision: "教育を通じて次世代のエンジニアを育成し、技術の民主化と教育格差の解消に貢献したい",
  challenges:
    "学習者一人ひとりの理解度や学習スタイルが異なるため、個別対応に苦労。試行錯誤を重ねて最適な指導法を見つけた",
}

const relatedActivities = [
  {
    ...sharedActivities.openCampus,
    tags: ["プレゼンテーション", "デモンストレーション", "コミュニケーション", "教育", "イベント運営"],
  },
]

const handleTagClick = (tag: string) => {
  ;(window as any).addSearchTag?.(tag)
}

export function LearningPage() {
  return (
    <StickyContentLayout {...projectData} onTagClick={handleTagClick}>
      <SlidingRelatedActivities title="関連する活動" activities={relatedActivities} onTagClick={handleTagClick} />
    </StickyContentLayout>
  )
}
