"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { mainContents, getAllMainContentTags } from "@/data/main-contents";
import {
  activities,
  getAllActivityTags,
  getCategoryLabel,
} from "@/data/activities";
import type { SearchResult } from "@/types/search";

interface SearchBarProps {
  onResultClick: (result: SearchResult) => void;
  selectedTags?: string[];
  onTagsChange?: (tags: string[]) => void;
}

export function SearchBar({
  onResultClick,
  selectedTags = [],
  onTagsChange,
}: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // 全タグを収集
  useEffect(() => {
    const mainTags = getAllMainContentTags();
    const activityTags = getAllActivityTags();
    const combinedTags = Array.from(
      new Set([...mainTags, ...activityTags])
    ).sort();
    setAllTags(combinedTags);
  }, []);

  // 検索データを準備
  const searchData: SearchResult[] = [
    ...mainContents.map((content) => ({
      id: content.id,
      title: content.title,
      category: content.category,
      tags: content.technologies,
      type: "main" as const,
      page: content.page,
    })),
    ...activities.map((activity) => ({
      id: activity.id,
      title: activity.title,
      category: getCategoryLabel(activity.categories),
      tags: [...activity.tags, ...(activity.technologies || [])],
      type: "activity" as const,
    })),
  ];

  // 外部からタグを追加する関数を常に定義
  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onTagsChange?.([...selectedTags, tag]);
    }
    setIsOpen(true); // タグが追加されたら検索バーを開く
  };

  // コンポーネントがマウントされた時点で関数を公開
  useEffect(() => {
    (window as any).addSearchTag = addTag;
    console.log("addSearchTag関数を登録しました"); // デバッグ用
  }, [selectedTags, onTagsChange]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedTags.length === 0) {
      setSearchResults([]);
      return;
    }

    const results = searchData.filter((item) => {
      return selectedTags.some((tag) => item.tags.includes(tag));
    });

    setSearchResults(results);
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagsChange?.(newTags);
  };

  const removeTag = (tag: string) => {
    const newTags = selectedTags.filter((t) => t !== tag);
    onTagsChange?.(newTags);
  };

  const clearAll = () => {
    onTagsChange?.([]);
  };

  return (
    <div className="relative" ref={searchRef}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2"
      >
        <Search className="h-4 w-4" />
        <span>検索</span>
        {selectedTags.length > 0 && (
          <Badge variant="secondary" className="ml-1">
            {selectedTags.length}
          </Badge>
        )}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-full mt-2 w-96 z-50"
          >
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">タグで検索</CardTitle>
                  {selectedTags.length > 0 && (
                    <Button variant="ghost" size="sm" onClick={clearAll}>
                      <X className="h-4 w-4 mr-1" />
                      クリア
                    </Button>
                  )}
                </div>
                {selectedTags.length > 0 && (
                  <div className="max-h-20 overflow-y-auto border rounded-md p-2 bg-muted/20">
                    <div className="flex flex-wrap gap-2">
                      {selectedTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          className="flex items-center gap-1 flex-shrink-0"
                        >
                          {tag}
                          <button onClick={() => removeTag(tag)}>
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="max-h-40 overflow-y-auto">
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={
                          selectedTags.includes(tag) ? "default" : "outline"
                        }
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {searchResults.length > 0 && (
                  <div className="border-t pt-4">
                    <h4 className="font-semibold mb-2">
                      検索結果 ({searchResults.length}件)
                    </h4>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                      {searchResults.map((result) => (
                        <div
                          key={result.id}
                          className="p-3 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => {
                            onResultClick(result);
                            setIsOpen(false);
                          }}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <h5 className="font-medium text-sm">
                              {result.title}
                            </h5>
                            <Badge variant="outline" className="text-xs">
                              {result.category}
                            </Badge>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {result.tags
                              .filter((tag) => selectedTags.includes(tag))
                              .slice(0, 4)
                              .map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
