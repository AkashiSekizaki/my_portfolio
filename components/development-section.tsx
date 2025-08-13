import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "壁紙販売店向けアプリ",
    image: "/wallpaper-app-interface.png",
    overview: "壁紙販売店の在庫管理と顧客対応を効率化するWebアプリケーション。リアルタイムでの在庫確認と注文管理機能を実装。",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    innovations: [
      "リアルタイム在庫同期システムの実装",
      "直感的なUI/UXデザインの採用",
      "モバイルファーストなレスポンシブデザイン"
    ],
    learnings: [
      "大規模なデータベース設計の重要性",
      "ユーザビリティテストの価値",
      "チーム開発でのコミュニケーションスキル"
    ],
    achievements: [
      "開発期間3ヶ月で完成",
      "ユーザー満足度90%以上",
      "処理速度50%向上を実現"
    ],
    relatedTags: ["Webアプリ開発", "チーム開発", "UI/UX"],
    links: {
      github: "#",
      demo: "#"
    }
  }
]

export function DevelopmentSection() {
  const handleTagClick = (tag: string) => {
    const element = document.querySelector('#other')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // タグでフィルタリングする処理を追加可能
    }
  }

  return (
    <section id="development" className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            開発経験
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            実際のプロジェクトを通じて培った技術力と問題解決能力
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              onTagClick={handleTagClick}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
