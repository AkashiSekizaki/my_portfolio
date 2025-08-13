"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ActivityModal } from "@/components/activity-modal";
<<<<<<< HEAD
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import CustomImage from "@/components/ui/custom-image";
// 共通の型をインポート
=======
import CustomImage from "@/components/ui/custom-image";
>>>>>>> d8aa8743474ee9b30450bf5be0ba226a2b02cbe8
import type { Activity } from "@/data/activities";

interface SlidingRelatedActivitiesProps {
  title: string;
  activities: Activity[];
  onTagClick?: (tag: string) => void;
}

export function SlidingRelatedActivities({
  title,
  activities,
  onTagClick,
}: SlidingRelatedActivitiesProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % activities.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + activities.length) % activities.length
    );
  };

  const openModal = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  if (activities.length === 0) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
          <p className="text-center text-muted-foreground">
            関連する活動はありません。
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

        <div className="relative">
          {/* ナビゲーションボタン */}
          {activities.length > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

<<<<<<< HEAD
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-12">
          {visibleActivities.map((activity, index) => (
            <Card
              key={`${activity.id}-${index}`}
              className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <CustomImage
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
                  {activity.technologies?.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        onTagClick?.(tag);
                      }}
=======
          {/* カードコンテナ */}
          <div className="overflow-hidden mx-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {activities
                  .slice(currentIndex, currentIndex + 3)
                  .map((activity) => (
                    <Card
                      key={activity.id}
                      className="cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => openModal(activity)}
>>>>>>> d8aa8743474ee9b30450bf5be0ba226a2b02cbe8
                    >
                      <CardHeader>
                        <div className="relative w-full h-48 mb-4">
                          <CustomImage
                            src={activity.image}
                            alt={activity.title}
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                        <CardTitle className="text-lg">
                          {activity.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {activity.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {activity.technologies?.slice(0, 3).map((tech) => (
                            <Badge
                              key={tech}
                              variant="secondary"
                              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                              onClick={(e) => {
                                e.stopPropagation();
                                onTagClick?.(tech);
                              }}
                            >
                              {tech}
                            </Badge>
                          ))}
                          {activity.technologies &&
                            activity.technologies.length > 3 && (
                              <Badge variant="outline">
                                +{activity.technologies.length - 3}
                              </Badge>
                            )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
<<<<<<< HEAD
                  {activity.technologies &&
                    activity.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{activity.technologies.length - 3}
                      </Badge>
                    )}
                </div>
              </CardContent>
            </Card>
          ))}
=======
              </motion.div>
            </AnimatePresence>
          </div>

          {/* インジケーター */}
          {activities.length > 3 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: Math.ceil(activities.length / 3) }).map(
                (_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      Math.floor(currentIndex / 3) === index
                        ? "bg-primary"
                        : "bg-muted-foreground"
                    }`}
                    onClick={() => setCurrentIndex(index * 3)}
                  />
                )
              )}
            </div>
          )}
>>>>>>> d8aa8743474ee9b30450bf5be0ba226a2b02cbe8
        </div>
      </div>

      {/* モーダル */}
      <ActivityModal
        isOpen={isModalOpen}
        onClose={closeModal}
        activity={selectedActivity}
      />
    </section>
  );
}
