"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { HeroPage } from "@/components/pages/hero-page";
import { DevelopmentPage } from "@/components/pages/development-page";
import { LeadershipPage } from "@/components/pages/leadership-page";
import { ResearchPage } from "@/components/pages/research-page";
import { LearningPage } from "@/components/pages/learning-page";
import { Footer } from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -100 },
  };

  const pageTransition = {
    type: "tween" as const,
    ease: "anticipate" as const,
    duration: 0.5,
  };

  const handlePageChange = (newPage: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPage(newPage);
      setIsTransitioning(false);
    }, 300);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "hero":
        return <HeroPage />;
      case "development":
        return <DevelopmentPage />;
      case "leadership":
        return <LeadershipPage />;
      case "research":
        return <ResearchPage />;
      case "learning":
        return <LearningPage />;
      default:
        return <HeroPage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header currentPage={currentPage} onPageChange={handlePageChange} />

      {/* ページ遷移時の顔アイコン */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="relative w-100 h-100 rounded-full overflow-hidden shadow-2xl border-4 border-primary/20"
            >
              <Image
                src="/my_icon.png"
                alt="アイコン"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
