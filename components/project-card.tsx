import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText } from 'lucide-react'
import Image from "next/image"

interface ProjectCardProps {
  title: string
  image: string
  overview: string
  technologies: string[]
  innovations: string[]
  learnings: string[]
  achievements: string[]
  links?: {
    github?: string
    demo?: string
    paper?: string
    presentation?: string
  }
  relatedTags?: string[]
  onTagClick?: (tag: string) => void
}

export function ProjectCard({
  title,
  image,
  overview,
  technologies,
  innovations,
  learnings,
  achievements,
  links,
  relatedTags,
  onTagClick
}: ProjectCardProps) {
  return (
    <Card className="mb-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="grid lg:grid-cols-2 gap-0">
        <div className="relative aspect-[4/3]">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="p-8">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg">概要</h4>
              <p className="text-muted-foreground leading-relaxed">{overview}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">利用技術</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">開発上の工夫</h4>
              <ul className="text-muted-foreground space-y-2">
                {innovations.map((innovation, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">▸</span>
                    <span className="leading-relaxed">{innovation}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">学び</h4>
              <ul className="text-muted-foreground space-y-2">
                {learnings.map((learning, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">▸</span>
                    <span className="leading-relaxed">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">実績</h4>
              <ul className="text-muted-foreground space-y-2">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">▸</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {relatedTags && relatedTags.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-lg">関連する活動</h4>
                <div className="flex flex-wrap gap-2">
                  {relatedTags.map((tag) => (
                    <Button
                      key={tag}
                      variant="outline"
                      size="sm"
                      onClick={() => onTagClick?.(tag)}
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tag}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {links && (
              <div className="flex flex-wrap gap-3 pt-4">
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
            )}
          </CardContent>
        </div>
      </div>
    </Card>
  )
}
