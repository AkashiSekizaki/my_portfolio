import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, ExternalLink } from 'lucide-react'
import Image from "next/image"
import { ProjectCard } from "@/components/project-card"

const researchProjects = [
  {
    title: "自然言語処理を用いた感情分析システム",
    image: "/nlp-research.png",
    overview: "SNSの投稿データから感情を自動分析するシステムの研究開発。深層学習モデルを用いて高精度な感情分類を実現。",
    technologies: ["Python", "PyTorch", "BERT", "Flask", "Docker"],
    innovations: [
      "初期のモデルでは精度が60%程度だったが、データ前処理とモデル改良により85%まで向上",
      "学会発表では多くの質問を受け、研究の意義を再認識",
      "企業との共同研究の機会を得て、実用化への道筋を見つけた"
    ],
    learnings: [
      "研究における仮説検証の重要性",
      "論文執筆とプレゼンテーションスキル",
      "最新技術のキャッチアップ方法"
    ],
    achievements: [
      "学内研究発表会で最優秀賞受賞",
      "国際会議への論文投稿（査読中）",
      "企業との共同研究契約締結"
    ],
    relatedTags: ["機械学習", "自然言語処理", "研究発表"],
    links: {
      paper: "#",
      presentation: "#"
    }
  }
]

export function ResearchSection() {
  const handleTagClick = (tag: string) => {
    const element = document.querySelector('#other')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="research" className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            研究
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            学術的な探究心と技術的な深掘りによる研究成果
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          {researchProjects.map((project, index) => (
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
