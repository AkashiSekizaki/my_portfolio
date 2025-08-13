"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";

const photos = [
  {
    src: "/professional-headshot.png",
    caption: "プロフェッショナルな環境での一枚",
  },
  {
    src: "/coding-workspace.png",
    caption: "集中してコーディングに取り組む様子",
  },
  { src: "/team-collaboration.png", caption: "チームメンバーとの協力作業" },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "Git",
  "Linux",
  "MySQL",
  "Firebase",
];

export function HeroSection() {
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
    <section
      id="hero"
      className="py-20 bg-gradient-to-br from-background to-muted/20"
    >
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
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">関﨑 証</h1>
              <p className="text-xl text-muted-foreground mb-4">
                公立はこだて未来大学大学院 1年
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium">出身:</span> 北海道函館市
                </p>
                <p>
                  <span className="font-medium">卒業予定:</span> 2027年3月
                </p>
                <p>
                  <span className="font-medium">趣味:</span>{" "}
                  ダイビング、旅行、グルメ、コーヒー
                </p>
                <p>
                  <span className="font-medium">喜び:</span>{" "}
                  人に喜んでもらうとき、成果が出たとき
                </p>
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
              <h3 className="font-semibold mb-3">主要な実績</h3>
              <div className="space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">
                    北海道アプリコンテスト 北海道経済産業局長賞 受賞
                  </Badge>
                  <Badge variant="outline">
                    ITTPC CRLA レベル1チューター資格 取得
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">
                    全国JOCジュニアオリンピックカップ夏季水泳競技大会 出場
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">未来大学賞 複数受賞</Badge>
                  <Badge variant="outline">学内ハッカソン 複数受賞</Badge>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">学歴</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>2018年3月　北海道教育大学附属函館中学校 卒業</p>
                <p>2021年3月　北海道函館中部高等学校 卒業</p>
                <p>
                  2025年3月　公立はこだて未来大学 システム情報科学部
                  高度ICTコース 卒業
                </p>
                <p>
                  2025年4月　公立はこだて未来大学大学院 システム情報科学研究科
                  入学
                </p>
                <p>2027年3月　上記卒業予定</p>
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
  );
}
