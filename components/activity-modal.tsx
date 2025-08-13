"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
// 共通の型をインポート
import type { Activity } from "@/data/activities";

interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  activity: Activity | null;
}

export function ActivityModal({
  isOpen,
  onClose,
  activity,
}: ActivityModalProps) {
  if (!activity) return null;

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{activity.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* 画像 */}
          <div className="relative w-full h-64">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* 概要 */}
          <div>
            <h3 className="text-lg font-semibold mb-2">概要</h3>
            <p className="text-muted-foreground">{activity.overview}</p>
          </div>

          {/* 技術スタック */}
          {activity.technologies && activity.technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">技術スタック</h3>
              <div className="flex flex-wrap gap-2">
                {activity.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* 革新的な取り組み */}
          {activity.innovations && activity.innovations.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">革新的な取り組み</h3>
              <ul className="list-disc list-inside space-y-1">
                {activity.innovations.map((innovation, index) => (
                  <li key={index} className="text-muted-foreground">
                    {innovation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 学んだこと */}
          {activity.learnings && activity.learnings.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">学んだこと</h3>
              <ul className="list-disc list-inside space-y-1">
                {activity.learnings.map((learning, index) => (
                  <li key={index} className="text-muted-foreground">
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 実績・成果 */}
          {activity.achievements && activity.achievements.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">実績・成果</h3>
              <ul className="list-disc list-inside space-y-1">
                {activity.achievements.map((achievement, index) => (
                  <li key={index} className="text-muted-foreground">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* リンク */}
          {activity.links && Object.keys(activity.links).length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">関連リンク</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(activity.links).map(([key, url]) => (
                  <Button
                    key={key}
                    variant="outline"
                    size="sm"
                    onClick={() => handleLinkClick(url)}
                    className="flex items-center gap-2"
                  >
                    {key === "github" ? (
                      <Github className="h-4 w-4" />
                    ) : (
                      <ExternalLink className="h-4 w-4" />
                    )}
                    {key}
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
