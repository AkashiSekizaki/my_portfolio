"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ActivityModal } from "@/components/activity-modal"
import { Eye, ChevronLeft, ChevronRight } from "lucide-react"
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

interface SlidingRelatedActivitiesProps {
  title: string
  activities: Activity[]
  onTagClick?: (tag: string) => void
}

export function SlidingRelatedActivities({ title, activities, onTagClick }: SlidingRelatedActivitiesProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const displayCount = 3
  const shouldSlide = activities.length > displayCount

  useEffect(() => {
    if (!shouldSlide) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [activities.length, shouldSlide])

  const getVisibleActivities = () => {
    if (!shouldSlide) return activities

    const visible = []
    for (let i = 0; i < displayCount; i++) {
      const index = (currentIndex + i) % activities.length
      visible.push(activities[index])
    }
    return visible
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + activities.length) % activities.length)
  }

  const handleActivityClick = (activity: Activity) => {
    setSelectedActivity(activity)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedActivity(null)
  }

  const visibleActivities = getVisibleActivities()

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-8">
        {title}
      </h3>

      <div className="relative">
        {/* 左右のナビゲーションボタン */}
        {shouldSlide && (
          <>
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90 shadow-lg"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background/90 shadow-lg"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          {visibleActivities.map((activity, index) => (
            <Card
              key={`${activity.title}-${index}`}
              className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
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
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-muted-foreground text-sm mb-4 flex-1">{activity.description}</p>
                <div className="flex flex-wrap gap-1">
                  {activity.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={(e) => {
                        e.stopPropagation()
                        onTagClick?.(tag)
                      }}
                    >
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
      </div>

      {/* インジケーター */}
      {shouldSlide && (
        <div className="flex justify-center mt-6 space-x-2">
          {activities.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      )}

      <ActivityModal isOpen={isModalOpen} onClose={closeModal} activity={selectedActivity} />
    </div>
  )
}
