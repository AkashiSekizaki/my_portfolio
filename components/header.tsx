"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchBar } from "@/components/search-bar";
import { ProjectModal } from "@/components/project-modal";
import { ActivityModal } from "@/components/activity-modal";
import {
  Menu,
  User,
  Code,
  Users,
  FlaskConical,
  GraduationCap,
} from "lucide-react";

const navItems = [
  { name: "自己紹介", page: "hero", icon: User },
  { name: "開発経験", page: "development", icon: Code },
  { name: "リーダー経験", page: "leadership", icon: Users },
  { name: "研究", page: "research", icon: FlaskConical },
  { name: "学習支援", page: "learning", icon: GraduationCap },
];

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  selectedTags?: string[];
  onTagsChange?: (tags: string[]) => void;
  onSearchResult?: (result: any) => void;
}

export function Header({
  currentPage,
  onPageChange,
  selectedTags = [],
  onTagsChange,
  onSearchResult,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
  const [searchTags, setSearchTags] = useState<string[]>([]);

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  const handleSearchResult = (result: any) => {
    if (result.type === "main") {
      setSelectedProject(result.data);
      setIsProjectModalOpen(true);
    } else {
      setSelectedActivity({
        ...result.data,
        title: result.title,
        image: "/robot-competition.png", // デフォルト画像
        tags: result.tags,
      });
      setIsActivityModalOpen(true);
    }
  };

  // グローバル関数として公開
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).addSearchTag = (tag: string) => {
        if (!searchTags.includes(tag)) {
          setSearchTags([...searchTags, tag]);
        }
      };
    }
  }, [searchTags]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold">Portfolio</h1>
              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.name}
                      variant={currentPage === item.page ? "default" : "ghost"}
                      onClick={() => handleNavClick(item.page)}
                      className="relative"
                    >
                      {item.name}
                    </Button>
                  );
                })}
              </nav>
            </div>

            {/* Search Bar */}
            <div className="flex items-center space-x-4">
              {onSearchResult && (
                <SearchBar
                  onResultClick={onSearchResult}
                  selectedTags={selectedTags}
                  onTagsChange={onTagsChange}
                />
              )}
            </div>
          </div>
        </div>
      </header>

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        project={selectedProject}
      />

      <ActivityModal
        isOpen={isActivityModalOpen}
        onClose={() => setIsActivityModalOpen(false)}
        activity={selectedActivity}
      />
    </>
  );
}
