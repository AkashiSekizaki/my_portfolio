"use client";

import type React from "react";
import { Slideshow } from "@/components/slideshow";
import { SlidingRelatedActivities } from "@/components/sliding-related-activities";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  FileText,
  Flag,
  Triangle,
  Tag,
  PenLine,
  ThumbsUp,
  Award,
  Book,
  Link,
} from "lucide-react";
import type { Activity } from "@/data/activities";

interface MainContent {
  title: string;
  description: string;
  images: { src: string; caption: string }[];
  overview: string;
  technologies: string[];
  innovations: string[];
  learnings: string[];
  achievements: string[];
  vision: string;
  challenges: string;
  links?: Record<string, string>;
}

interface StickyContentLayoutProps {
  mainContent: MainContent;
  relatedActivities: Activity[];
  onTagClick?: (tag: string) => void;
}

export function StickyContentLayout({
  mainContent,
  relatedActivities,
  onTagClick,
}: StickyContentLayoutProps) {
  // mainContentがundefinedの場合の安全なチェック
  if (!mainContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            コンテンツが見つかりません
          </h2>
          <p className="text-muted-foreground">
            指定されたコンテンツが存在しないか、読み込み中です。
          </p>
        </div>
      </div>
    );
  }

  const {
    title,
    description,
    images,
    overview,
    technologies,
    innovations,
    learnings,
    achievements,
    vision,
    challenges,
    links,
  } = mainContent;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <div className="py-20 bg-gradient-to-br from-background via-background to-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {description}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              実際の取り組みについてご紹介します。
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* 左側：スティッキーなスライドショー */}
              <div className="lg:sticky lg:top-24">
                <Slideshow images={images} className="max-w-md mx-auto" />
              </div>

              {/* 右側：スクロール可能なコンテンツ */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {title}
                  </h2>
                  <h4 className="font-semibold mb-4 text-xl flex items-center">
                    <Book className="h-5 w-5 mr-2" />
                    概要
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {overview}
                  </p>
                </div>

                <div className="grid gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-xl flex items-center">
                      <Flag className="h-5 w-5 mr-2" />
                      ゴール
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {vision}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-4 text-xl flex items-center">
                      <Triangle className="h-5 w-5 mr-2" />
                      苦労したこと
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {challenges}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-xl flex items-center">
                    <Tag className="h-5 w-5 mr-2" />
                    タグ
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="bg-primary/5 hover:bg-primary/10 transition-colors text-sm px-3 py-1 cursor-pointer"
                        onClick={() => onTagClick?.(tech)}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-xl flex items-center">
                    <ThumbsUp className="h-5 w-5 mr-2" />
                    開発上の工夫・取り組み
                  </h4>
                  <ul className="text-muted-foreground space-y-3">
                    {innovations.map((innovation, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-3 mt-1 text-lg">
                          ▸
                        </span>
                        <span className="leading-relaxed">{innovation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-xl flex items-center">
                    <PenLine className="h-5 w-5 mr-2" />
                    学び
                  </h4>
                  <ul className="text-muted-foreground space-y-3">
                    {learnings.map((learning, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-3 mt-1 text-lg">
                          ▸
                        </span>
                        <span className="leading-relaxed">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 text-xl flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    実績
                  </h4>
                  <ul className="text-muted-foreground space-y-3">
                    {achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-3 mt-1 text-lg">
                          ▸
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {links && Object.keys(links).length > 0 && (
                  <div className="pt-6 border-t">
                    <h4 className="font-semibold mb-4 text-xl flex items-center">
                      <Link className="h-5 w-5 mr-2" />
                      関連リンク
                    </h4>
                    <div className="flex flex-wrap gap-4">
                      {Object.entries(links).map(([key, url]) => (
                        <Button
                          key={key}
                          variant="outline"
                          size="sm"
                          className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
                          onClick={() => window.open(url, "_blank")}
                        >
                          {key.toLowerCase() === "github" ? (
                            <Github className="h-4 w-4 mr-2" />
                          ) : (
                            <ExternalLink className="h-4 w-4 mr-2" />
                          )}
                          {key}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 関連する活動セクション */}
      <SlidingRelatedActivities
        title="関連する活動"
        activities={relatedActivities}
        onTagClick={onTagClick}
      />
    </div>
  );
}
