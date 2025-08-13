import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText, Heart, AlertTriangle } from 'lucide-react'
import Image from "next/image"

interface ProjectDetailCardHorizontalProps {
  title: string
  images: string[]
  overview: string
  technologies: string[]
  innovations: string[]
  learnings: string[]
  achievements: string[]
  vision: string
  challenges: string
  links?: {
    github?: string
    demo?: string
    paper?: string
    presentation?: string
  }
}

export function ProjectDetailCardHorizontal({
  title,
  images,
  overview,
  technologies,
  innovations,
  learnings,
  achievements,
  vision,
  challenges,
  links
}: ProjectDetailCardHorizontalProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      
      <div className="grid lg:grid-cols-2 gap-8 p-8">
        {/* 左側：写真 */}
        <div className="space-y-4">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - 画像${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* 右側：文章 */}
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold mb-3 text-xl">概要</h4>
            <p className="text-muted-foreground leading-relaxed">{overview}</p>
          </div>

          <div className="grid gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg flex items-center">
                <Heart className="h-4 w-4 mr-2 text-red-500" />
                ビジョン
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">{vision}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg flex items-center">
                <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                苦労したこと
              </h4>
              <p className="text-muted-foreground leading-relaxed text-sm">{challenges}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">利用技術</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">開発上の工夫・取り組み</h4>
            <ul className="text-muted-foreground space-y-2">
              {innovations.map((innovation, i) => (
                <li key={i} className="flex items-start text-sm">
                  <span className="text-primary mr-2 mt-1">▸</span>
                  <span className="leading-relaxed">{innovation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">学び</h4>
            <ul className="text-muted-foreground space-y-2">
              {learnings.map((learning, i) => (
                <li key={i} className="flex items-start text-sm">
                  <span className="text-primary mr-2 mt-1">▸</span>
                  <span className="leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">実績</h4>
            <ul className="text-muted-foreground space-y-2">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start text-sm">
                  <span className="text-primary mr-2 mt-1">▸</span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {links && (
            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-3 text-lg">関連リンク</h4>
              <div className="flex flex-wrap gap-3">
                {links.github && (
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                )}
                {links.demo && (
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    デモ
                  </Button>
                )}
                {links.paper && (
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <FileText className="h-4 w-4 mr-2" />
                    論文
                  </Button>
                )}
                {links.presentation && (
                  <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    発表資料
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}
