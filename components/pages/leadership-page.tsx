import { StickyContentLayout } from "@/components/sticky-content-layout";
import { SlidingRelatedActivities } from "@/components/sliding-related-activities";
import { sharedActivities } from "@/components/shared-data";

const projectData = {
  title: "プログラミングサークル リーダー",
  description: "リーダー経験",
  images: [
    {
      src: "/team-leadership-meeting.png",
      caption: "チームミーティングの様子",
    },
    { src: "/programming-circle-poster.png", caption: "イベントポスター" },
    { src: "/team-leadership-meeting.png", caption: "勉強会の風景" },
  ],
  overview:
    "大学のプログラミングサークルでリーダーを務め、30名のメンバーをまとめながら技術勉強会やハッカソンの企画・運営を行いました。",
  technologies: ["チームマネジメント", "イベント企画", "メンタリング"],
  innovations: [
    "定期的な技術勉強会の企画・実施",
    "初心者向けメンタリング制度の導入",
    "外部企業との連携イベントの開催",
  ],
  learnings: [
    "多様なスキルレベルのメンバーをまとめる難しさ",
    "モチベーション管理の重要性",
    "リーダーシップとフォロワーシップのバランス",
  ],
  achievements: [
    "メンバー数を20名から30名に増加",
    "学内ハッカソンで3チームが入賞",
    "企業との共同イベントを5回開催",
  ],
  vision:
    "技術コミュニティを通じて、互いに学び合い成長できる環境を作り、次世代のエンジニアを育成したい",
  challenges:
    "メンバーのモチベーション格差や技術レベルの違いをどう調整するかが最大の課題。個別面談や適切な役割分担で解決を図った",
};

const relatedActivities = [
  {
    title: "学内学習支援",
    image: "/tutoring-session.png",
    description: "後輩向けのプログラミング学習サポートを実施",
    overview:
      "プログラミング初学者の後輩に対して、個別指導やグループ学習会を通じて学習支援を行いました。基礎から応用まで幅広くサポートし、多くの学生の成長を支援しました。",
    technologies: ["Python", "Java", "Web開発", "データベース", "教育手法"],
    innovations: [
      "個人のレベルに合わせたカリキュラム作成",
      "実践的なプロジェクトベース学習の導入",
      "ピアラーニングの促進",
    ],
    learnings: [
      "教える側の責任と成長",
      "相手の立場に立った説明の重要性",
      "継続的な学習モチベーションの維持方法",
    ],
    achievements: [
      "100時間以上の学習支援を実施",
      "支援した学生の80%が目標達成",
      "学習支援組織で優秀指導者賞を受賞",
    ],
    tags: [
      "Python",
      "Java",
      "Web開発",
      "データベース",
      "教育手法",
      "教育",
      "メンタリング",
      "コミュニケーション",
    ],
  },
  {
    ...sharedActivities.openCampus,
    tags: [
      "プレゼンテーション",
      "デモンストレーション",
      "コミュニケーション",
      "教育",
      "イベント運営",
    ],
  },
];

const handleTagClick = (tag: string) => {
  (window as any).addSearchTag?.(tag);
};

export function LeadershipPage() {
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
