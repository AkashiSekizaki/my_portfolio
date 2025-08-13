"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const photos = [
  { src: "/professional-headshot.png", caption: "プロフェッショナルな環境での一枚" },
  { src: "/coding-workspace.png", caption: "集中してコーディングに取り組む様子" },
  { src: "/team-collaboration.png", caption: "チームメンバーとの協力作業" },
]

const profileData = [
  { label: "出身", value: "東京都" },
  { label: "卒業予定", value: "2025年3月" },
  { label: "趣味", value: "プログラミング、読書、映画鑑賞" },
  { label: "喜び", value: "人の役に立つこと・喜んでもらうこと" },
]

// 学歴データ
const educationHistory = [
  {
    year: "2019年3月",
    title: "○○中学校 卒業",
    type: "education",
  },
  {
    year: "2022年3月",
    title: "○○高等学校 卒業",
    type: "education",
  },
  {
    year: "2025年3月",
    title: "○○大学 情報工学科 卒業予定",
    type: "education",
  },
  {
    year: "2025年4月",
    title: "○○大学大学院 入学予定",
    type: "education",
  },
  {
    year: "2027年3月",
    title: "○○大学大学院 修了予定",
    type: "education",
  },
]

// イベント履歴
const eventHistory = [
  {
    year: "2021年4月",
    title: "大学入学",
    description: "情報工学科に入学。プログラミングの基礎を学び始める。\n初めてのプログラミング言語としてPythonを習得。",
  },
  {
    year: "2022年4月",
    title: "プログラミングサークル参加",
    description: "大学のプログラミングサークルに参加し、チーム開発を経験。\nWebアプリケーション開発の基礎を学ぶ。",
  },
  {
    year: "2022年12月",
    title: "初のハッカソン参加",
    description:
      "学内ハッカソンに参加し、チームでアプリを開発。\n48時間という限られた時間での開発の難しさと楽しさを体験。",
  },
  {
    year: "2023年4月",
    title: "研究室配属",
    description: "AI・機械学習研究室に配属。深層学習の研究を開始。\n論文読解とプログラム実装のスキルを向上。",
  },
  {
    year: "2023年8月",
    title: "インターンシップ参加",
    description:
      "IT企業でのインターンシップに参加。実際の開発現場を経験。\nアジャイル開発手法とチームワークの重要性を学ぶ。",
  },
  {
    year: "2024年4月",
    title: "卒業研究開始",
    description: "自然言語処理をテーマとした卒業研究を開始。\n研究の進め方と論文執筆のスキルを習得中。",
  },
]

export function HeroPage() {
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
    <div className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo Slideshow */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={photos[currentPhoto].src || "/placeholder.svg"}
                alt="プロフィール写真"
                fill
                className="object-cover transition-opacity duration-500"
              />
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
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">田中 太郎</h1>
              <p className="text-xl text-muted-foreground mb-6">情報工学科 4年生</p>

              {/* Profile Table */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <table className="w-full">
                  <tbody>
                    {profileData.map((item, index) => (
                      <tr key={index} className="border-b border-muted-foreground/20 last:border-b-0">
                        <td className="py-3 pr-6 font-medium text-muted-foreground w-32">{item.label}：</td>
                        <td className="py-3 text-foreground">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">主な実績</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">ハッカソン3回参加</Badge>
                <Badge variant="secondary">学習支援100時間以上</Badge>
                <Badge variant="secondary">オープンキャンパス3年連続参加</Badge>
                <Badge variant="secondary">研究発表5回実施</Badge>
                <Badge variant="secondary">学内研究発表会最優秀賞</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* 学歴セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            学歴
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {educationHistory.map((item, index) => (
                <div key={index} className="flex items-center p-4 bg-muted/20 rounded-lg border-l-4 border-primary">
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">{item.year}</div>
                  <div className="flex-1 ml-6">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* イベント履歴セクション */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            経歴・イベント
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-8">
                {eventHistory.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-sm text-primary font-medium mb-2">{event.year}</div>
                          <h3 className="text-lg font-semibold mb-3">{event.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line">{event.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
