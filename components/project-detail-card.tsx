import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText, Heart, AlertTriangle } from 'lucide-react'
import Image from "next/image"

interface ProjectDetailCardProps {
  title: string
  image: string
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

export function ProjectDetailCard({
  title,
  image,
  overview,
  technologies,
  innovations,
  learnings,
  achievements,
  vision,
  challenges,
  links
}: ProjectDetailCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {title}
        </CardTitle>
      </CardHeader>
      
      <div className="px-8 pb-8">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-md mb-8">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        <CardContent className="p-0 space-y-8">
          <div>
            <h4 className="font-semibold mb-4 text-xl">概要</h4>
            <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-xl flex items-center">
                <Heart className="h-5 w-5 mr-2 text-red-500" />
                ビジョン
              </h4>
              <p className="text-muted-foreground leading-relaxed">{vision}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-xl flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
                苦労したこと
              </h4>
              <p className="text-muted-foreground leading-relaxed">{challenges}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl">利用技術</h4>
            <div className="flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl">開発上の工夫・取り組み</h4>
            <ul className="text-muted-foreground space-y-3">
              {innovations.map((innovation, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-3 mt-1 text-lg">▸</span>
                  <span className="leading-relaxed">{innovation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl">学び</h4>
            <ul className="text-muted-foreground space-y-3">
              {learnings.map((learning, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-3 mt-1 text-lg">▸</span>
                  <span className="leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-xl">実績</h4>
            <ul className="text-muted-foreground space-y-3">
              {achievements.map((achievement, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-primary mr-3 mt-1 text-lg">▸</span>
                  <span className="leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {links && (
            <div className="pt-6 border-t">
              <h4 className="font-semibold mb-4 text-xl">関連リンク</h4>
              <div className="flex flex-wrap gap-4">
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
        </CardContent>
      </div>
    </Card>
  )
}
