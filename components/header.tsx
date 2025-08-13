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
}

export function Header({ currentPage, onPageChange }: HeaderProps) {
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
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex ml-4">
            <a
              className="mr-6 flex items-center space-x-2 cursor-pointer"
              onClick={() => handleNavClick("hero")}
            >
              <span className="font-bold text-xl">Akashi Sekizaki</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center space-x-2 transition-colors hover:text-foreground/80 ${
                    currentPage === item.page
                      ? "text-primary font-semibold"
                      : "text-foreground/60"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Search Bar */}
          <div className="ml-auto mr-4">
            <SearchBar
              onResultClick={handleSearchResult}
              selectedTags={searchTags}
              onTagsChange={setSearchTags}
            />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">メニューを開く</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavClick(item.page)}
                      className={`flex items-center space-x-2 text-lg font-medium transition-colors hover:text-foreground/80 text-left ${
                        currentPage === item.page ? "text-primary" : ""
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
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
