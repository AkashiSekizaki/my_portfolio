"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, FileText } from "lucide-react"
import Image from "next/image"

interface ActivityModalProps {
  isOpen: boolean
  onClose: () => void
  activity: {
    title: string
    image: string
    overview: string
    technologies?: string[]
    innovations?: string[]
    learnings?: string[]
    achievements?: string[]
    tags: string[]
    links?: {
      github?: string
      demo?: string
      paper?: string
      presentation?: string
    }
  } | null
}

export function ActivityModal({ isOpen, onClose, activity }: ActivityModalProps) {
  if (!activity) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {activity.title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image src={activity.image || "/placeholder.svg"} alt={activity.title} fill className="object-cover" />
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-lg">概要</h4>
            <p className="text-muted-foreground leading-relaxed">{activity.overview}</p>
          </div>

          {activity.innovations && activity.innovations.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-lg">工夫点</h4>
              <ul className="text-muted-foreground space-y-2">
                {activity.innovations.map((innovation, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">▸</span>
                    <span className="leading-relaxed">{innovation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activity.learnings && activity.learnings.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-lg">学び</h4>
              <ul className="text-muted-foreground space-y-2">
                {activity.learnings.map((learning, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">▸</span>
                    <span className="leading-relaxed">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activity.achievements && activity.achievements.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3 text-lg">実績</h4>
              <ul className="text-muted-foreground space-y-2">
                {activity.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">▸</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="font-semibold mb-3 text-lg">タグ</h4>
            <div className="flex flex-wrap gap-2">
              {activity.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => {
                    ;(window as any).addSearchTag?.(tag)
                  }}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {activity.links && (
            <div className="flex flex-wrap gap-3 pt-4">
              {activity.links.github && (
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
              )}
              {activity.links.demo && (
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  デモ
                </Button>
              )}
              {activity.links.paper && (
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  論文
                </Button>
              )}
              {activity.links.presentation && (
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  発表資料
                </Button>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
