"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText, Heart, AlertTriangle } from "lucide-react"
import { Slideshow } from "@/components/slideshow"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: {
    title: string
    images?: { src: string; caption: string }[]
    overview: string
    technologies: string[]
    innovations: string[]
    learnings: string[]
    achievements: string[]
    vision?: string
    challenges?: string
    links?: {
      github?: string
      demo?: string
      paper?: string
      presentation?: string
    }
  } | null
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* スライドショー */}
          {project.images && (
            <div className="flex justify-center">
              <Slideshow images={project.images} className="max-w-lg w-full" />
            </div>
          )}

          {/* コンテンツ */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-xl">概要</h4>
              <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
            </div>

            {project.vision && project.challenges && (
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg flex items-center">
                    <Heart className="h-4 w-4 mr-2 text-red-500" />
                    ビジョン
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.vision}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 text-lg flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                    苦労したこと
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.challenges}</p>
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold mb-3 text-lg">利用技術</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="bg-primary/5 hover:bg-primary/10 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-lg">開発上の工夫・取り組み</h4>
              <ul className="text-muted-foreground space-y-2">
                {project.innovations.map((innovation, i) => (
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
                {project.learnings.map((learning, i) => (
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
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="text-primary mr-2 mt-1">▸</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.links && (
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-3 text-lg">関連リンク</h4>
                <div className="flex flex-wrap gap-3">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      GitHub
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      デモ
                    </Button>
                  )}
                  {project.links.paper && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      論文
                    </Button>
                  )}
                  {project.links.presentation && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      発表資料
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
