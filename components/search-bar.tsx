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

  // selectedTagsが変更されたら検索バーを自動で開く
  useEffect(() => {
    if (selectedTags.length > 0) {
      setIsOpen(true);
    }
  }, [selectedTags]);

  // 検索データを準備
  const searchData: SearchResult[] = [
    ...mainContents.map((content) => ({
      id: content.id,
      title: content.title,
      category: content.category,
      tags: content.technologies, // main-contentsはtechnologiesを使用
      type: "main" as const,
      page: content.page,
    })),
    ...activities.map((activity) => ({
      id: activity.id,
      title: activity.title,
      category: activity.category,
      tags: activity.tags || [], // activitiesはtagsのみ使用
      type: "activity" as const,
    })),
  ];

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
        <span>タグで検索</span>
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
            className="absolute right-0 top-full mt-2 w-80 sm:w-96 z-50"
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
                          key={`${result.type}-${result.id}`}
                          className="p-3 rounded-lg border hover:bg-muted/50 cursor-pointer transition-colors"
                          onClick={() => {
                            onResultClick(result);
                            setIsOpen(false);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <h5 className="font-medium text-sm line-clamp-1">
                              {result.title}
                            </h5>
                            <Badge
                              variant="outline"
                              className="ml-2 flex-shrink-0"
                            >
                              {result.type === "activity"
                                ? getCategoryLabel([result.category])
                                : result.category}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                            {result.description}
                          </p>
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
