"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ActivityModal } from "@/components/activity-modal"
import { Eye } from 'lucide-react'
import Image from "next/image"

interface Activity {
  title: string
  image: string
  description: string
  tags: string[]
  overview?: string
  technologies?: string[]
  innovations?: string[]
  learnings?: string[]
  achievements?: string[]
  links?: {
    github?: string
    demo?: string
    paper?: string
    presentation?: string
  }
}

interface RelatedActivitiesProps {
  title: string
  activities: Activity[]
}

function getDetailedOverview(title: string) {
  const overviews = {
    "ETロボコンの画像処理": "ETロボコン（組込みソフトウェア技術者試験ロボットコンテスト）において、自律走行ロボットの画像処理システムを開発。リアルタイムでのライン検出と障害物回避アルゴリズムを実装しました。",
    "学内学習支援": "プログラミング初学者の後輩に対して、個別指導やグループ学習会を通じて学習支援を行いました。基礎から応用まで幅広くサポートし、多くの学生の成長を支援しました。",
    // 他の活動も同様に追加
  }
  return overviews[title] || "詳細な概要情報"
}

function getDefaultTechnologies(title: string) {
  // 既定の技術を取得するロジックをここに追加
  return ["技術1", "技術2"]
}

function getDefaultInnovations(title: string) {
  // 既定の革新を取得するロジックをここに追加
  return ["革新1", "革新2"]
}

function getDefaultLearnings(title: string) {
  // 既定の学びを取得するロジックをここに追加
  return ["学び1", "学び2"]
}

function getDefaultAchievements(title: string) {
  // 既定の達成を取得するロジックをここに追加
  return ["達成1", "達成2"]
}

export function RelatedActivities({ title, activities }: RelatedActivitiesProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const detailedActivities = activities.map(activity => ({
    ...activity,
    overview: activity.overview || getDetailedOverview(activity.title),
    technologies: activity.technologies || getDefaultTechnologies(activity.title),
    innovations: activity.innovations || getDefaultInnovations(activity.title),
    learnings: activity.learnings || getDefaultLearnings(activity.title),
    achievements: activity.achievements || getDefaultAchievements(activity.title)
  }))

  const handleActivityClick = (activity: Activity) => {
    setSelectedActivity(activity)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedActivity(null)
  }

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
        {title}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {detailedActivities.map((activity, index) => (
          <Card key={index} className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={activity.image || "/placeholder.svg"}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="sm"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={() => handleActivityClick(activity)}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  詳細を見る
                </Button>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {activity.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground text-sm mb-4 flex-1">
                {activity.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {activity.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {activity.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{activity.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ActivityModal
        isOpen={isModalOpen}
        onClose={closeModal}
        activity={selectedActivity}
      />
    </div>
  )
}
