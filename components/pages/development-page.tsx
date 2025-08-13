import { StickyContentLayout } from "@/components/sticky-content-layout";
import { SlidingRelatedActivities } from "@/components/sliding-related-activities";
import { getMainContentById } from "@/data/main-contents";
import { getActivitiesByCategory } from "@/data/activities";

// 開発経験のメインコンテンツを取得
const projectData = getMainContentById("wallpaper-app")!;

// 開発カテゴリの関連活動を取得
const relatedActivities = getActivitiesByCategory("development");

const handleTagClick = (tag: string) => {
  if (typeof window !== "undefined" && (window as any).addSearchTag) {
    (window as any).addSearchTag(tag);
  }
};

export function DevelopmentPage() {
  return (
    <StickyContentLayout {...projectData} onTagClick={handleTagClick}>
      <SlidingRelatedActivities
        title="関連する活動"
        activities={relatedActivities}
        onTagClick={handleTagClick}
      />
    </StickyContentLayout>
  );
}
