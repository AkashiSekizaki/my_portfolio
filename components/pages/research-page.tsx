import { StickyContentLayout } from "@/components/sticky-content-layout";
import { mainContents } from "@/data/main-contents";
import { getActivitiesByCategory } from "@/data/activities";

interface ResearchPageProps {
  onTagClick?: (tag: string) => void;
}

export function ResearchPage({ onTagClick }: ResearchPageProps) {
  const researchContent = mainContents.find(
    (content) => content.id === "research-project"
  );

  const relatedActivities = getActivitiesByCategory("research");

  // コンテンツが見つからない場合のフォールバック
  if (!researchContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">研究</h2>
          <p className="text-muted-foreground">コンテンツを準備中です。</p>
        </div>
      </div>
    );
  }

  return (
    <StickyContentLayout
      mainContent={researchContent}
      relatedActivities={relatedActivities}
      onTagClick={onTagClick}
    />
  );
}
