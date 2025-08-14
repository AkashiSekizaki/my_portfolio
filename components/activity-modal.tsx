"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink, Target, BookOpen, Trophy, Hash } from "lucide-react";
import CustomImage from "@/components/ui/custom-image";
import type { Activity } from "@/data/activities";

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity | null;
  onTagClick?: (tag: string) => void;
}

export function ActivityModal({
  isOpen,
  onClose,
  activity,
  onTagClick,
}: ActivityModalProps) {
  if (!activity) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold pr-8">
              {activity.title}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-6 w-6 rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* メイン画像 */}
          {activity.image && (
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <CustomImage
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          {/* 概要 */}
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              概要
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {activity.description}
            </p>
          </div>

          {/* 挑戦 */}
          {activity.innovations && activity.innovations.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                挑戦
              </h3>
              <ul className="space-y-2">
                {activity.innovations.map((innovation, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{innovation}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 学び */}
          {activity.learnings && activity.learnings.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2" />
                学び
              </h3>
              <ul className="space-y-2">
                {activity.learnings.map((learning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{learning}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 実績・成果 */}
          {activity.achievements && activity.achievements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Trophy className="h-5 w-5 mr-2" />
                実績・成果
              </h3>
              <ul className="space-y-2">
                {activity.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-foreground rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* タグ */}
          {activity.tags && activity.tags.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Hash className="h-5 w-5 mr-2" />
                タグ
              </h3>
              <div className="flex flex-wrap gap-2">
                {activity.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => {
                      onTagClick?.(tag);
                      onClose(); // タグクリック後にモーダルを閉じる
                    }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* 関連リンク */}
          {activity.links && Object.keys(activity.links).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <ExternalLink className="h-5 w-5 mr-2" />
                関連リンク
              </h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(activity.links).map(([label, url]) => (
                  <Button
                    key={label}
                    variant="outline"
                    size="sm"
                    asChild
                    className="h-8"
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      {label}
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
