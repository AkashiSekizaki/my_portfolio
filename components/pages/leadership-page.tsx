import { StickyContentLayout } from "@/components/sticky-content-layout";
import { mainContents } from "@/data/main-contents";
import { getActivitiesByCategory } from "@/data/activities";

interface LeadershipPageProps {
  onTagClick?: (tag: string) => void;
}

export function LeadershipPage({ onTagClick }: LeadershipPageProps) {
  const leadershipContent = mainContents.find(
    (content) => content.id === "leadership-experience"
  );

  const relatedActivities = getActivitiesByCategory("leadership");

  // コンテンツが見つからない場合のフォールバック
  if (!leadershipContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">リーダーシップ</h2>
          <p className="text-muted-foreground">コンテンツを準備中です。</p>
        </div>
      </div>
    );
  }

  return (
    <StickyContentLayout
      mainContent={leadershipContent}
      relatedActivities={relatedActivities}
      onTagClick={onTagClick}
    />
  );
}
