import { Card, CardContent } from "@/components/ui/card"

const timelineEvents = [
  {
    year: "2021年4月",
    title: "大学入学",
    description: "情報工学科に入学。プログラミングの基礎を学び始める。\n初めてのプログラミング言語としてPythonを習得。"
  },
  {
    year: "2022年4月",
    title: "プログラミングサークル参加",
    description: "大学のプログラミングサークルに参加し、チーム開発を経験。\nWebアプリケーション開発の基礎を学ぶ。"
  },
  {
    year: "2022年12月",
    title: "初のハッカソン参加",
    description: "学内ハッカソンに参加し、チームでアプリを開発。\n48時間という限られた時間での開発の難しさと楽しさを体験。"
  },
  {
    year: "2023年4月",
    title: "研究室配属",
    description: "AI・機械学習研究室に配属。深層学習の研究を開始。\n論文読解とプログラム実装のスキルを向上。"
  },
  {
    year: "2023年8月",
    title: "インターンシップ参加",
    description: "IT企業でのインターンシップに参加。実際の開発現場を経験。\nアジャイル開発手法とチームワークの重要性を学ぶ。"
  },
  {
    year: "2024年4月",
    title: "卒業研究開始",
    description: "自然言語処理をテーマとした卒業研究を開始。\n研究の進め方と論文執筆のスキルを習得中。"
  }
]

export function TimelineSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">自分史</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card>
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
    </section>
  )
}
