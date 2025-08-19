"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import type { SearchResult } from "@/types/search";

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  selectedTags?: string[];
  onTagsChange?: (tags: string[]) => void;
  onSearchResult?: (result: SearchResult) => void;
}

export function Header({
  currentPage,
  onPageChange,
  selectedTags = [],
  onTagsChange,
  onSearchResult,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "自己紹介" },
    { id: "development", label: "開発経験" },
    { id: "leadership", label: "リーダーシップ" },
    { id: "research", label: "研究" },
    { id: "learning", label: "学習支援" },
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    setIsOpen(false); // メニューを閉じる
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1
              className="text-xl font-bold cursor-pointer hover:text-primary transition-colors"
              onClick={() => onPageChange("hero")}
            >
              Akashi Sekizaki
            </h1>

            {/* デスクトップ用ナビゲーション */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={currentPage === item.id ? "default" : "ghost"}
                  onClick={() => onPageChange(item.id)}
                  className="relative"
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </div>

          {/* 右側：検索バー + ハンバーガーメニュー */}
          <div className="flex items-center space-x-4">
            {/* 検索バー */}
            {onSearchResult && onTagsChange && (
              <SearchBar
                onResultClick={onSearchResult}
                selectedTags={selectedTags}
                onTagsChange={onTagsChange}
              />
            )}

            {/* モバイル用ハンバーガーメニュー */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">メニューを開く</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  <h2 className="text-lg font-semibold mb-4">ナビゲーション</h2>
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={currentPage === item.id ? "default" : "ghost"}
                      onClick={() => handlePageChange(item.id)}
                      className="justify-start text-left h-12"
                    >
                      {item.label}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
