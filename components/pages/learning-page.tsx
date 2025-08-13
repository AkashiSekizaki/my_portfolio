import { StickyContentLayout } from "@/components/sticky-content-layout";
import { SlidingRelatedActivities } from "@/components/sliding-related-activities";
import { getMainContentById } from "@/data/main-contents";
import { getActivitiesByCategory } from "@/data/activities";

const projectData = getMainContentById("tutoring-experience")!;
const relatedActivities = getActivitiesByCategory("learning");

const handleTagClick = (tag: string) => {
  if (typeof window !== "undefined" && (window as any).addSearchTag) {
    (window as any).addSearchTag(tag);
  }
};

export function LearningPage() {
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
