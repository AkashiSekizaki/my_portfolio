"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface SearchResult {
  title: string
  category: string
  tags: string[]
  type: "main" | "related"
  data: any
}

interface SearchBarProps {
  onResultClick: (result: SearchResult) => void
  selectedTags?: string[]
  onTagsChange?: (tags: string[]) => void
}

const allTags = [
  "React",
  "React Native",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "チームマネジメント",
  "イベント企画",
  "メンタリング",
  "PyTorch",
  "BERT",
  "Flask",
  "機械学習",
  "自然言語処理",
  "教育",
  "コミュニケーション",
  "プレゼンテーション",
  "画像処理",
  "組込み",
  "ロボット",
  "チーム開発",
  "ハッカソン",
  "アイデア創出",
  "短期開発",
  "モバイルアプリ",
  "地域課題",
  "プロジェクト管理",
  "研究発表",
  "データ分析",
  "統計",
  "UI/UX",
  "Vue.js",
  "Laravel",
  "MySQL",
  "ECサイト",
  "IoT",
  "Arduino",
  "農業技術",
  "PostgreSQL",
  "Java",
  "Web開発",
  "データベース",
  "教育手法",
  "C++",
  "OpenCV",
  "組込みシステム",
  "リアルタイム処理",
  "デモンストレーション",
  "イベント運営",
  "Firebase",
  "地理情報システム",
  "失敗経験",
  "API連携",
  "プロトタイピング",
  "Stripe",
  "MQTT",
  "統計解析",
  "データ可視化",
  "アンケート調査",
  "教育効果",
]

const searchData: SearchResult[] = [
  {
    title: "壁紙販売店向けアプリ",
    category: "開発経験",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "UI/UX", "チーム開発"],
    type: "main",
    data: {
      images: [
        { src: "/wallpaper-app-interface.png", caption: "メイン画面のUI" },
        { src: "/wallpaper-app-interface.png", caption: "在庫管理画面" },
        { src: "/wallpaper-app-interface.png", caption: "注文管理システム" },
      ],
      overview:
        "壁紙販売店の在庫管理と顧客対応を効率化するWebアプリケーション。リアルタイムでの在庫確認と注文管理機能を実装。",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
      innovations: [
        "リアルタイム在庫同期システムの実装",
        "直感的なUI/UXデザインの採用",
        "モバイルファーストなレスポンシブデザイン",
      ],
      learnings: [
        "大規模なデータベース設計の重要性",
        "ユーザビリティテストの価値",
        "チーム開発でのコミュニケーションスキル",
      ],
      achievements: ["開発期間3ヶ月で完成", "ユーザー満足度90%以上", "処理速度50%向上を実現"],
      vision: "技術を通じて地域の小規模事業者の業務効率化を支援し、デジタル格差の解消に貢献したい",
      challenges:
        "初めての本格的なWebアプリ開発で、データベース設計やセキュリティ対策に苦労。特にリアルタイム同期の実装では何度も設計を見直した",
    },
  },
  {
    title: "プログラミングサークル リーダー",
    category: "リーダー経験",
    tags: ["チームマネジメント", "イベント企画", "メンタリング", "教育", "プレゼンテーション"],
    type: "main",
    data: {
      images: [
        { src: "/team-leadership-meeting.png", caption: "チームミーティングの様子" },
        { src: "/programming-circle-poster.png", caption: "イベントポスター" },
        { src: "/team-leadership-meeting.png", caption: "勉強会の風景" },
      ],
      overview:
        "大学のプログラミングサークルでリーダーを務め、30名のメンバーをまとめながら技術勉強会やハッカソンの企画・運営を行いました。",
      technologies: ["チームマネジメント", "イベント企画", "メンタリング"],
      innovations: [
        "定期的な技術勉強会の企画・実施",
        "初心者向けメンタリング制度の導入",
        "外部企業との連携イベントの開催",
      ],
      learnings: [
        "多様なスキルレベルのメンバーをまとめる難しさ",
        "モチベーション管理の重要性",
        "リーダーシップとフォロワーシップのバランス",
      ],
      achievements: [
        "メンバー数を20名から30名に増加",
        "学内ハッカソンで3チームが入賞",
        "企業との共同イベントを5回開催",
      ],
      vision: "技術コミュニティを通じて、互いに学び合い成長できる環境を作り、次世代のエンジニアを育成したい",
      challenges:
        "メンバーのモチベーション格差や技術レベルの違いをどう調整するかが最大の課題。個別面談や適切な役割分担で解決を図った",
    },
  },
  {
    title: "自然言語処理を用いた感情分析システム",
    category: "研究",
    tags: ["Python", "PyTorch", "BERT", "Flask", "Docker", "機械学習", "自然言語処理", "研究発表"],
    type: "main",
    data: {
      images: [
        { src: "/nlp-research.png", caption: "研究システムの概要" },
        { src: "/nlp-research.png", caption: "データ分析結果" },
        { src: "/nlp-research.png", caption: "学会発表の様子" },
      ],
      overview:
        "SNSの投稿データから感情を自動分析するシステムの研究開発。深層学習モデルを用いて高精度な感情分類を実現。",
      technologies: ["Python", "PyTorch", "BERT", "Flask", "Docker"],
      innovations: [
        "データ前処理とモデル改良により精度を60%から85%まで向上",
        "学会発表では多くの質問を受け、研究の意義を再認識",
        "企業との共同研究の機会を得て、実用化への道筋を見つけた",
      ],
      learnings: ["研究における仮説検証の重要性", "論文執筆とプレゼンテーションスキル", "最新技術のキャッチアップ方法"],
      achievements: ["学内研究発表会で最優秀賞受賞", "国際会議への論文投稿（査読中）", "企業との共同研究契約締結"],
      vision: "AI技術を活用して人々の感情やメンタルヘルスをサポートし、より良い社会の実現に貢献したい",
      challenges:
        "初期のモデル精度が低く、何度も挫折しそうになった。データの質と前処理の重要性を痛感し、基礎から学び直した",
    },
  },
  {
    title: "学習支援プログラム",
    category: "学習支援",
    tags: ["Python", "Java", "Web開発", "データベース", "教育手法", "教育", "メンタリング", "コミュニケーション"],
    type: "main",
    data: {
      images: [
        { src: "/tutoring-session.png", caption: "個別指導の様子" },
        { src: "/tutoring-session.png", caption: "グループ学習会" },
        { src: "/tutoring-session.png", caption: "プロジェクト発表会" },
      ],
      overview:
        "プログラミング初学者の後輩に対して、個別指導やグループ学習会を通じて学習支援を行いました。基礎から応用まで幅広くサポートし、多くの学生の成長を支援しました。",
      technologies: ["Python", "Java", "Web開発", "データベース", "教育手法"],
      innovations: [
        "個人のレベルに合わせたカリキュラム作成",
        "実践的なプロジェクトベース学習の導入",
        "ピアラーニングの促進",
      ],
      learnings: ["教える側の責任と成長", "相手の立場に立った説明の重要性", "継続的な学習モチベーションの維持方法"],
      achievements: ["100時間以上の学習支援を実施", "支援した学生の80%が目標達成", "学習支援組織で優秀指導者賞を受賞"],
      vision: "教育を通じて次世代のエンジニアを育成し、技術の民主化と教育格差の解消に貢献したい",
      challenges:
        "学習者一人ひとりの理解度や学習スタイルが異なるため、個別対応に苦労。試行錯誤を重ねて最適な指導法を見つけた",
    },
  },
  {
    title: "ETロボコンの画像処理",
    category: "研究",
    tags: [
      "C++",
      "OpenCV",
      "組込みシステム",
      "リアルタイム処理",
      "Python",
      "画像処理",
      "組込み",
      "ロボット",
      "チーム開発",
    ],
    type: "related",
    data: {
      overview:
        "ETロボコン（組込みソフトウェア技術者試験ロボットコンテスト）において、自律走行ロボットの画像処理システムを開発。リアルタイムでのライン検出と障害物回避アルゴリズムを実装しました。",
      technologies: ["C++", "OpenCV", "組込みシステム", "リアルタイム処理", "Python"],
      innovations: [
        "高速なライン検出アルゴリズムの実装",
        "ノイズに強い画像前処理の開発",
        "メモリ効率を考慮した組込み向け最適化",
      ],
      learnings: ["組込みシステムでのリソース制約の理解", "リアルタイム処理の重要性", "チーム開発での役割分担"],
      achievements: ["地区大会で3位入賞", "画像処理速度30%向上を実現", "チーム内技術リーダーとして貢献"],
    },
  },
  {
    title: "各種ハッカソン参加",
    category: "開発経験",
    tags: [
      "React",
      "Python",
      "TypeScript",
      "API連携",
      "プロトタイピング",
      "ハッカソン",
      "チーム開発",
      "アイデア創出",
      "短期開発",
    ],
    type: "related",
    data: {
      overview:
        "様々なテーマのハッカソンに積極的に参加し、限られた時間内でのアイデア創出から実装までの一連のプロセスを経験。チームワークと技術力の両面で成長しました。",
      technologies: ["React", "Python", "TypeScript", "API連携", "プロトタイピング"],
      innovations: ["短時間でのMVP開発手法の習得", "異なる専門分野メンバーとの協働", "ユーザー視点でのサービス設計"],
      learnings: [
        "時間制約下での優先順位付け",
        "アジャイル開発の実践的理解",
        "多様なバックグラウンドを持つチームでの協働",
      ],
      achievements: ["3回のハッカソン参加", "1回の入賞経験", "チームリーダーとしての経験"],
    },
  },
  {
    title: "オープンキャンパス出展",
    category: "学習支援",
    tags: ["プレゼンテーション", "デモンストレーション", "コミュニケーション", "教育", "イベント運営"],
    type: "related",
    data: {
      overview:
        "大学のオープンキャンパスにて、研究室の活動紹介ブースを担当。高校生や保護者に対して、最新の研究成果や技術デモを分かりやすく説明しました。",
      technologies: ["プレゼンテーション", "デモンストレーション", "コミュニケーション"],
      innovations: [
        "分かりやすいデモンストレーションの企画",
        "来場者との双方向コミュニケーション",
        "研究内容の一般向け説明資料作成",
      ],
      learnings: [
        "専門知識を一般向けに伝える難しさ",
        "プレゼンテーション能力の向上",
        "多様な年齢層とのコミュニケーション",
      ],
      achievements: ["3年連続でオープンキャンパスに参加", "来場者満足度90%以上を達成", "高校生の進路選択に貢献"],
    },
  },
  {
    title: "琵琶湖漁業者向けアプリ開発",
    category: "開発経験",
    tags: [
      "React Native",
      "Firebase",
      "Node.js",
      "地理情報システム",
      "モバイルアプリ",
      "地域課題",
      "プロジェクト管理",
      "失敗経験",
    ],
    type: "related",
    data: {
      overview:
        "琵琶湖の漁業者が抱える課題を解決するためのモバイルアプリケーション開発プロジェクト。漁獲量管理や市場価格情報の提供を目指しましたが、様々な要因により開発を中断しました。",
      technologies: ["React Native", "Firebase", "Node.js", "地理情報システム"],
      innovations: ["漁業者のニーズに特化したUI設計", "リアルタイム市場価格情報の統合", "GPS機能を活用した漁場管理"],
      learnings: [
        "ステークホルダーとの継続的なコミュニケーションの重要性",
        "プロジェクト管理とリスク評価",
        "失敗から学ぶ価値と次への活かし方",
      ],
      achievements: ["プロトタイプの完成", "漁業者へのヒアリング実施", "技術的課題の特定と解決策の提案"],
    },
  },
  {
    title: "ECサイト構築プロジェクト",
    category: "開発経験",
    tags: ["Vue.js", "Laravel", "MySQL", "Stripe", "ECサイト", "UI/UX"],
    type: "related",
    data: {
      overview:
        "地域の小規模事業者向けに、簡単に商品を販売できるECサイトを開発。ユーザビリティを重視した設計で、ITに不慣れな事業者でも使いやすいシステムを構築しました。",
      technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
      innovations: ["直感的な商品登録システム", "自動在庫管理機能", "モバイル決済対応"],
      learnings: ["ユーザー中心設計の重要性", "決済システムの実装", "セキュリティ対策の実践"],
      achievements: ["5社での導入実績", "売上20%向上を実現", "ユーザー満足度95%達成"],
    },
  },
  {
    title: "IoTセンサーシステム開発",
    category: "開発経験",
    tags: ["Arduino", "Python", "MQTT", "React Native", "IoT", "農業技術"],
    type: "related",
    data: {
      overview:
        "農業の効率化を目指し、土壌の湿度や温度を監視するIoTセンサーシステムを開発。リアルタイムでデータを収集し、スマートフォンで確認できるシステムを構築しました。",
      technologies: ["Arduino", "Python", "MQTT", "React Native"],
      innovations: ["低消費電力センサーの活用", "クラウドベースのデータ管理", "アラート機能の実装"],
      learnings: ["IoTシステムの設計", "センサーデータの処理", "リアルタイム通信の実装"],
      achievements: ["農家3軒での実証実験", "水やり効率30%向上", "技術コンテスト入賞"],
    },
  },
  {
    title: "学内学習支援",
    category: "学習支援",
    tags: ["Python", "Java", "Web開発", "データベース", "教育手法", "教育", "メンタリング", "コミュニケーション"],
    type: "related",
    data: {
      overview:
        "プログラミング初学者の後輩に対して、個別指導やグループ学習会を通じて学習支援を行いました。基礎から応用まで幅広くサポートし、多くの学生の成長を支援しました。",
      technologies: ["Python", "Java", "Web開発", "データベース", "教育手法"],
      innovations: [
        "個人のレベルに合わせたカリキュラム作成",
        "実践的なプロジェクトベース学習の導入",
        "ピアラーニングの促進",
      ],
      learnings: ["教える側の責任と成長", "相手の立場に立った説明の重要性", "継続的な学習モチベーションの維持方法"],
      achievements: ["100時間以上の学習支援を実施", "支援した学生の80%が目標達成", "学習支援組織で優秀指導者賞を受賞"],
    },
  },
  {
    title: "学習支援組織での研究発表",
    category: "研究",
    tags: ["統計解析", "Python", "データ可視化", "アンケート調査", "研究発表", "データ分析", "教育効果", "統計"],
    type: "related",
    data: {
      overview:
        "学習支援組織において、効果的な学習方法に関する研究を実施し、その成果を発表しました。データ分析を通じて学習効果の向上方法を提案しました。",
      technologies: ["統計解析", "Python", "データ可視化", "アンケート調査"],
      innovations: [
        "学習データの定量的分析手法の開発",
        "効果的な学習パターンの発見",
        "個別最適化された学習プランの提案",
      ],
      learnings: ["データドリブンな意思決定の重要性", "統計的手法の実践的応用", "研究成果の実用化プロセス"],
      achievements: ["学習支援組織で研究発表賞受賞", "提案手法の実用化", "学習効果20%向上を実現"],
    },
  },
]

export function SearchBar({ onResultClick, selectedTags = [], onTagsChange }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    if (selectedTags.length === 0) {
      setSearchResults([])
      return
    }

    // ANDからORに変更
    const results = searchData.filter((item) => selectedTags.some((tag) => item.tags.includes(tag)))
    setSearchResults(results)
  }, [selectedTags])

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag) ? selectedTags.filter((t) => t !== tag) : [...selectedTags, tag]
    onTagsChange?.(newTags)
  }

  const removeTag = (tag: string) => {
    const newTags = selectedTags.filter((t) => t !== tag)
    onTagsChange?.(newTags)
  }

  const clearAll = () => {
    onTagsChange?.([])
  }

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onTagsChange?.([...selectedTags, tag])
    }
    setIsOpen(true)
  }

  // 外部からタグを追加する関数を公開
  useEffect(() => {
    ;(window as any).addSearchTag = addTag
  }, [selectedTags])

  return (
    <div className="relative" ref={searchRef}>
      <Button variant="outline" size="sm" onClick={() => setIsOpen(!isOpen)} className="flex items-center space-x-2">
        <Search className="h-4 w-4" />
        <span>検索</span>
        {selectedTags.length > 0 && (
          <Badge variant="secondary" className="ml-1">
            {selectedTags.length}
          </Badge>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-full mt-2 w-96 z-50"
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">タグで検索</CardTitle>
                  {selectedTags.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAll}>
                      <X className="h-4 w-4 mr-1" />
                      クリア
                    </Button>
                  )}
                </div>
                {selectedTags.length > 0 && (
                  <div className="max-h-20 overflow-y-auto border rounded-md p-2 bg-muted/20">
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <Badge key={tag} variant="default" className="flex items-center gap-1 flex-shrink-0">
                          {tag}
                          <button onClick={() => removeTag(tag)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="max-h-40 overflow-y-auto">
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {searchResults.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">検索結果 ({searchResults.length}件)</h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <div
                          key={index}
                          className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => {
                            onResultClick(result)
                            setIsOpen(false)
                          }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-medium text-sm">{result.title}</h5>
                            <Badge variant="outline" className="text-xs">
                              {result.category}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {result.tags
                              .filter((tag) => selectedTags.includes(tag))
                              .slice(0, 4)
                              .map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
