"use client";

import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-background via-muted/20 to-background border-t py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              お気軽にご連絡ください
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              バリバリ働ける20代のうちに、開発からマネジメントまで幅広い経験を積みたいと考えています。
              ご質問やお話の機会がございましたら、お気軽にお声がけください。
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-4">
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=g2125042@fun.ac.jp",
                  "_blank"
                )
              }
            >
              <Mail className="h-4 w-4 mr-2" />
              g2125042@fun.ac.jp
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              onClick={() =>
                window.open("https://github.com/AkashiSekizaki", "_blank")
              }
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground transition-colors bg-transparent"
              onClick={() =>
                window.open(
                  "https://twitter.com/intent/tweet?text=関﨑証のポートフォリオをチェック！&url=https://www.fun.ac.jp/",
                  "_blank"
                )
              }
            >
              <Twitter className="h-4 w-4 mr-2" />
              Xでシェア
            </Button>
          </div>

          <div className="pt-8 border-t border-muted-foreground/20 text-sm text-muted-foreground">
            <p>&copy; 2025 関﨑証. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
