import { StickyContentLayout } from "@/components/sticky-content-layout";
import { mainContents } from "@/data/main-contents";
import { getActivitiesByCategory } from "@/data/activities";

interface LearningPageProps {
  onTagClick?: (tag: string) => void;
}

export function LearningPage({ onTagClick }: LearningPageProps) {
  const learningContent = mainContents.find(
    (content) => content.id === "tutoring-experience"
  );

  const relatedActivities = getActivitiesByCategory("learning");

  // コンテンツが見つからない場合のフォールバック
  if (!learningContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">学習支援</h2>
          <p className="text-muted-foreground">コンテンツを準備中です。</p>
        </div>
      </div>
    );
  }

  return (
    <StickyContentLayout
      mainContent={learningContent}
      relatedActivities={relatedActivities}
      onTagClick={onTagClick}
    />
  );
}
