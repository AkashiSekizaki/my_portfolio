"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SearchBar } from "@/components/search-bar";
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
  const navItems = [
    { id: "hero", label: "ホーム" },
    { id: "development", label: "開発経験" },
    { id: "leadership", label: "リーダーシップ" },
    { id: "research", label: "研究" },
    { id: "learning", label: "学習支援" },
  ];

  // ヘッダーがマウントされたときに検索バーを強制的に初期化
  useEffect(() => {
    console.log("ヘッダーがマウントされました"); // デバッグ用
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold">Portfolio</h1>
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

          {/* 検索バーを常に表示 */}
          <div className="flex items-center space-x-4">
            {onSearchResult && onTagsChange && (
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
  );
}
