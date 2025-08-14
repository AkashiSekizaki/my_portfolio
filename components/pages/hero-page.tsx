"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// next/imageの代わりにCustomImageを使用
import CustomImage from "@/components/ui/custom-image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const photos = [
  {
    src: "diving.JPG",
    caption: "ダイビングを楽しむ様子",
  },
  {
    src: "fase_600*730.JPG",
    caption: "証明写真",
  },
  {
    src: "留萌.jpg",
    caption: "漁業者の方のもとで泊まり込みで研究データ収集",
  },
  {
    src: "KABEYA訪問_顔のみ.JPG",
    caption: "課外活動の開発で現場に訪問したときの写真",
  },
];

const profileData = [
  { label: "出身", value: "北海道函館市" },
  { label: "卒業予定", value: "2027年3月" },
  { label: "趣味", value: "ダイビング、旅行、グルメ、コーヒー" },
  { label: "喜び", value: "人に喜んでもらうとき、成果が出たとき" },
];

// 価値観データ
const values = [
  "水泳時代よりも辛いことはない！",
  "人との繋がりは財産！",
  "挑戦・楽しむ・継続が大事！",
  "貢献できること、喜んでもらうことがモチベーション！",
];

// 学歴データ
const educationHistory = [
  {
    year: "2018年3月",
    title: "北海道教育大学附属函館中学校 卒業",
    type: "education",
  },
  {
    year: "2021年3月",
    title: "北海道函館中部高等学校 卒業",
    type: "education",
  },
  {
    year: "2025年3月",
    title:
      "公立はこだて未来大学 システム情報科学部情報アーキテクチャ学科 高度ICTコース 卒業",
    type: "education",
  },
  {
    year: "2025年4月",
    title:
      "公立はこだて未来大学大学院 システム情報科学研究科システム情報科学専攻高度ICT領域 入学",
    type: "education",
  },
  {
    year: "2027年3月",
    title:
      "公立はこだて未来大学大学院 システム情報科学研究科システム情報科学専攻高度ICT領域 卒業（予定）",
    type: "education",
  },
];

// イベント履歴
const eventHistory = [
  {
    year: "2018年8月",
    title: "全国JOCジュニアオリンピックカップ夏季水泳競技大会 出場",
    description:
      "100m×4 フリーリレーで出場。\nチームならさらに大きな成果を挙げられることを実感する。",
  },
  {
    year: "2019年12月",
    title: "ダイビングのライセンス取得",
    description:
      "「海」へ強く興味を持つようになる。\n海×ITの研究（マリンIT）の研究ができる公立はこだて未来大学への進学を決心。",
  },
  {
    year: "2022年5月",
    title: "学内の学習支援組織（メタ学習ラボ）へ所属",
    description:
      "自身がプログラミングで苦労した経験から、学習支援活動を始める。\n学習支援スキル・コミュニケーションスキルなどを学び始める。",
  },
  {
    year: "2022年10月",
    title: "学内ハッカソン初参加・最優秀賞",
    description:
      "実践的なものづくりの難しさを知る。\n「プログラミング」ではない「開発」を初めて体験。",
  },
  {
    year: "2022年12月",
    title: "学内ハッカソン サイボーズ賞受賞＆挫折経験",
    description:
      "開発力のあるメンバーに頼り切りで終わってしまう。\n悔しさから本格的に開発力をつけると決意する。",
  },
  {
    year: "2023年4月",
    title: "「高度ICTコース」へ編入＆開発活動開始",
    description:
      "ハッカソンの悔しさから、大学院一貫で開発・マネジメントを実践的に学ぶことのできる学内のコースに編入。\n課外活動のチーム開発活動などに参加。",
  },
  {
    year: "2024年2月",
    title: "北海道アプリコンテスト 北海道経済産業局長賞 受賞",
    description:
      "輸入壁紙販売店向けのアプリケーションで受賞。\n店舗への導入・FBを受けての改善などの実績が高く評価される。",
  },
  {
    year: "2024年10月",
    title: "リーダーとしてハッカソンに参加＆CyberAgent賞 受賞",
    description:
      "プログラミング歴半年の1年生2名とハッカソンに参加。\nリーダーとしてチームづくりを意識。取り組みとプロダクト提案が評価される。",
  },
  {
    year: "2024年12月",
    title: "ハッカソンのメンターを経験",
    description:
      "開発×学習支援スキルを買ってもらい、学内ハッカソンのメンターとして参加。\nハッカソンの挫折を与えてくれた人が運営メンバーのハッカソンであったので、恩返しができた。",
  },
  {
    year: "2025年4月",
    title: "活動の中心的役割を経験",
    description:
      "学内の学習支援組織（メタ学習ラボ）の学生リーダー、課外活動のチームのリーダー、\n共同研究の立ち上げ、学内イベントの企画などを経験。",
  },
  {
    year: "2025年8月",
    title: "課外活動の学内発表で特別賞 受賞",
    description:
      "15名チームメンバーと共に、立ち上げから半年の取り組みが評価される。",
  },
];

export function HeroPage() {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo Slideshow */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <CustomImage
                src={photos[currentPhoto].src || "placeholder.svg"}
                alt="プロフィール写真"
                fill
                className="object-cover transition-opacity duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">
                  {photos[currentPhoto].caption}
                </p>
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
                    index === currentPhoto
                      ? "bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                  onClick={() => setCurrentPhoto(index)}
                />
              ))}
            </div>
          </div>

          {/* Profile Information */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <CustomImage
                  src="my_icon.png"
                  alt="アイコン"
                  width={60}
                  height={60}
                  className="rounded-full mr-4 border-2 border-primary/20 shadow-md"
                />
                <div>
                  <h1 className="text-4xl font-bold">関﨑 証</h1>
                  <p className="text-xl text-muted-foreground mt-1">
                    公立はこだて未来大学大学院 博士(前期)課程 1年
                  </p>
                </div>
              </div>

              {/* Profile Table */}
              <div className="bg-muted/30 rounded-lg p-6 mb-6">
                <table className="w-full">
                  <tbody>
                    {profileData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-b border-muted-foreground/20 last:border-b-0"
                      >
                        <td className="py-3 pr-6 font-medium text-muted-foreground w-32">
                          {item.label}：
                        </td>
                        <td className="py-3 text-foreground">{item.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">主要な実績</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">
                  北海道アプリコンテスト 北海道経済産業局長賞 受賞
                </Badge>
                <Badge variant="secondary">
                  ITTPC CRLA レベル1チューター資格 取得
                </Badge>
                <Badge variant="secondary">
                  全国JOCジュニアオリンピック出場
                </Badge>
                <Badge variant="secondary">未来大学賞 複数受賞</Badge>
                <Badge variant="secondary">学内ハッカソン 複数受賞</Badge>
              </div>
            </div>
          </div>
        </div>

        {/* 価値観セクション */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            価値観
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="border-2 border-primary/20 hover:border-primary/40 transition-colors"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-foreground font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{value}</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                <div
                  key={index}
                  className="flex items-center p-4 bg-muted/20 rounded-lg border-l-4 border-primary"
                >
                  <div className="flex-shrink-0 w-24 text-sm font-medium text-primary">
                    {item.year}
                  </div>
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
            自分史
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

              <div className="space-y-8">
                {eventHistory.map((event, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10"></div>

                    {/* Content */}
                    <div
                      className={`ml-12 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <Card className="shadow-md hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="text-sm text-primary font-medium mb-2">
                            {event.year}
                          </div>
                          <h3 className="text-lg font-semibold mb-3">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground whitespace-pre-line">
                            {event.description}
                          </p>
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
  );
}
