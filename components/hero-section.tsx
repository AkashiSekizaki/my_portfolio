"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Mail, Github, Linkedin } from 'lucide-react'
import Image from "next/image"

const photos = [
  { src: "/professional-headshot.png", caption: "プロフェッショナルな環境での一枚" },
  { src: "/coding-workspace.png", caption: "集中してコーディングに取り組む様子" },
  { src: "/team-collaboration.png", caption: "チームメンバーとの協力作業" },
]

const skills = ["React", "TypeScript", "Node.js", "Python", "AWS", "Docker"]

export function HeroSection() {
  const [currentPhoto, setCurrentPhoto] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <section id="hero" className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Slideshow */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={photos[currentPhoto].src || "/placeholder.svg"}
                alt="プロフィール写真"
                fill
                className="object-cover transition-opacity duration-500"
              />
              {/* 説明文オーバーレイ */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">{photos[currentPhoto].caption}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                onClick={prevPhoto}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90"
                onClick={nextPhoto}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex justify-center mt-4 space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPhoto ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentPhoto(index)}
                />
              ))}
            </div>
          </div>

          {/* Profile Information */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">田中 太郎</h1>
              <p className="text-xl text-muted-foreground mb-4">情報工学科 4年生</p>
              <div className="space-y-2 text-muted-foreground">
                <p><span className="font-medium">出身:</span> 東京都</p>
                <p><span className="font-medium">卒業予定:</span> 2025年3月</p>
                <p><span className="font-medium">趣味:</span> プログラミング、読書、映画鑑賞</p>
                <p><span className="font-medium">喜びを感じる時:</span> 人の役に立つこと・喜んでもらうこと</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">技術スキル</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">主な実績</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">ハッカソン3回参加</Badge>
                <Badge variant="secondary">学習支援100時間以上</Badge>
                <Badge variant="secondary">オープンキャンパス3年連続参加</Badge>
                <Badge variant="secondary">研究発表5回実施</Badge>
                <Badge variant="secondary">学内研究発表会最優秀賞</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">連絡先</h3>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  <Mail className="h-4 w-4 mr-2" />
                  メール
                </Button>
                <Button variant="outline" size="sm">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="outline" size="sm">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
