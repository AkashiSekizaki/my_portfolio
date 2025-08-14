import { StickyContentLayout } from "@/components/sticky-content-layout";
import { mainContents } from "@/data/main-contents";
import { getActivitiesByCategory } from "@/data/activities";

interface DevelopmentPageProps {
  onTagClick?: (tag: string) => void;
}

export function DevelopmentPage({ onTagClick }: DevelopmentPageProps) {
  const wallpaperAppContent = mainContents.find(
    (content) => content.id === "wallpaper-app"
  );

  const relatedActivities = getActivitiesByCategory("development");

  // コンテンツが見つからない場合のフォールバック
  if (!wallpaperAppContent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">開発経験</h2>
          <p className="text-muted-foreground">コンテンツを準備中です。</p>
        </div>
      </div>
    );
  }

  return (
    <StickyContentLayout
      mainContent={wallpaperAppContent}
      relatedActivities={relatedActivities}
      onTagClick={onTagClick}
    />
  );
}
