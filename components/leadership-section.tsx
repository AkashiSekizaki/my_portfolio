import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"

const leadershipExperiences = [
  {
    title: "プログラミングサークル リーダー",
    image: "/team-leadership-meeting.png",
    overview: "大学のプログラミングサークルでリーダーを務め、30名のメンバーをまとめながら技術勉強会やハッカソンの企画・運営を行いました。",
    technologies: ["チームマネジメント", "イベント企画", "メンタリング"],
    innovations: [
      "定期的な技術勉強会の企画・実施",
      "初心者向けメンタリング制度の導入",
      "外部企業との連携イベントの開催"
    ],
    learnings: [
      "多様なスキルレベルのメンバーをまとめる難しさ",
      "モチベーション管理の重要性",
      "リーダーシップとフォロワーシップのバランス"
    ],
    achievements: [
      "メンバー数を20名から30名に増加",
      "学内ハッカソンで3チームが入賞",
      "企業との共同イベントを5回開催"
    ],
    relatedTags: ["リーダーシップ", "チームビルディング", "イベント企画"]
  }
]

export function LeadershipSection() {
  const handleTagClick = (tag: string) => {
    const element = document.querySelector('#other')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="leadership" className="py-20 bg-gradient-to-br from-muted/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            リーダー経験
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            チームを率いて成果を上げた経験と学んだリーダーシップ
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          {leadershipExperiences.map((experience, index) => (
            <ProjectCard
              key={index}
              {...experience}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
