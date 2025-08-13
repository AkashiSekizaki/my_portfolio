"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ActivityModal } from "@/components/activity-modal"
import { Eye } from 'lucide-react'
import Image from "next/image"

const otherActivities = [
  {
    title: "ETロボコンの画像処理",
    image: "/robot-competition.png",
    description: "自律走行ロボットの画像処理アルゴリズムを開発",
    overview: "ETロボコン（組込みソフトウェア技術者試験ロボットコンテスト）において、自律走行ロボットの画像処理システムを開発。リアルタイムでのライン検出と障害物回避アルゴリズムを実装しました。",
    technologies: ["C++", "OpenCV", "組込みシステム", "リアルタイム処理"],
    innovations: [
      "高速なライン検出アルゴリズムの実装",
      "ノイズに強い画像前処理の開発",
      "メモリ効率を考慮した組込み向け最適化"
    ],
    learnings: [
      "組込みシステムでのリソース制約の理解",
      "リアルタイム処理の重要性",
      "チーム開発での役割分担"
    ],
    tags: ["画像処理", "組込み", "ロボット", "チーム開発"]
  },
  {
    title: "学内学習支援",
    image: "/tutoring-session.png",
    description: "後輩向けのプログラミング学習サポートを実施",
    overview: "プログラミング初学者の後輩に対して、個別指導やグループ学習会を通じて学習支援を行いました。基礎から応用まで幅広くサポートし、多くの学生の成長を支援しました。",
    technologies: ["Python", "Java", "Web開発", "データベース"],
    innovations: [
      "個人のレベルに合わせたカリキュラム作成",
      "実践的なプロジェクトベース学習の導入",
      "ピアラーニングの促進"
    ],
    learnings: [
      "教える側の責任と成長",
      "相手の立場に立った説明の重要性",
      "継続的な学習モチベーションの維持方法"
    ],
    tags: ["教育", "メンタリング", "コミュニケーション"]
  },
  {
    title: "オープンキャンパス出展",
    image: "/university-open-campus.png",
    description: "研究室の活動紹介と来場者への技術デモを担当",
    overview: "大学のオープンキャンパスにて、研究室の活動紹介ブースを担当。高校生や保護者に対して、最新の研究成果や技術デモを分かりやすく説明しました。",
    innovations: [
      "分かりやすいデモンストレーションの企画",
      "来場者との双方向コミュニケーション",
      "研究内容の一般向け説明資料作成"
    ],
    learnings: [
      "専門知識を一般向けに伝える難しさ",
      "プレゼンテーション能力の向上",
      "多様な年齢層とのコミュニケーション"
    ],
    tags: ["プレゼンテーション", "コミュニケーション", "イベント運営"]
  },
  {
    title: "学習支援組織での研究発表",
    image: "/placeholder-wl3j8.png",
    description: "学習効果向上に関する研究成果を発表",
    overview: "学習支援組織において、効果的な学習方法に関する研究を実施し、その成果を発表しました。データ分析を通じて学習効果の向上方法を提案しました。",
    technologies: ["統計解析", "Python", "データ可視化", "アンケート調査"],
    innovations: [
      "学習データの定量的分析手法の開発",
      "効果的な学習パターンの発見",
      "個別最適化された学習プランの提案"
    ],
    learnings: [
      "データドリブンな意思決定の重要性",
      "統計的手法の実践的応用",
      "研究成果の実用化プロセス"
    ],
    tags: ["研究発表", "データ分析", "教育効果", "統計"]
  },
  {
    title: "琵琶湖漁業者向けアプリ開発",
    image: "/fishing-app-development.png",
    description: "地域課題解決を目指したアプリ開発（開発中断）",
    overview: "琵琶湖の漁業者が抱える課題を解決するためのモバイルアプリケーション開発プロジェクト。漁獲量管理や市場価格情報の提供を目指しましたが、様々な要因により開発を中断しました。",
    technologies: ["React Native", "Firebase", "Node.js", "地理情報システム"],
    innovations: [
      "漁業者のニーズに特化したUI設計",
      "リアルタイム市場価格情報の統合",
      "GPS機能を活用した漁場管理"
    ],
    learnings: [
      "ステークホルダーとの継続的なコミュニケーションの重要性",
      "プロジェクト管理とリスク評価",
      "失敗から学ぶ価値と次への活かし方"
    ],
    tags: ["モバイルアプリ", "地域課題", "プロジェクト管理", "失敗経験"]
  },
  {
    title: "各種ハッカソン参加",
    image: "/hackathon-team-coding.png",
    description: "複数のハッカソンに参加し、短期間での開発スキルを向上",
    overview: "様々なテーマのハッカソンに積極的に参加し、限られた時間内でのアイデア創出から実装までの一連のプロセスを経験。チームワークと技術力の両面で成長しました。",
    technologies: ["React", "Python", "API連携", "プロトタイピング"],
    innovations: [
      "短時間でのMVP開発手法の習得",
      "異なる専門分野メンバーとの協働",
      "ユーザー視点でのサービス設計"
    ],
    learnings: [
      "時間制約下での優先順位付け",
      "アジャイル開発の実践的理解",
      "多様なバックグラウンドを持つチームでの協働"
    ],
    tags: ["ハッカソン", "チーム開発", "アイデア創出", "短期開発"]
  }
]

export function OtherSection() {
  const [selectedActivity, setSelectedActivity] = useState<typeof otherActivities[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleActivityClick = (activity: typeof otherActivities[0]) => {
    setSelectedActivity(activity)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedActivity(null)
  }

  return (
    <section id="other" className="py-20 bg-gradient-to-br from-muted/10 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            その他の活動
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            多様な経験を通じて培った幅広いスキルと知見
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherActivities.map((activity, index) => (
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
        </div>
      </div>

      <ActivityModal
        isOpen={isModalOpen}
        onClose={closeModal}
        activity={selectedActivity}
      />
    </section>
  )
}
