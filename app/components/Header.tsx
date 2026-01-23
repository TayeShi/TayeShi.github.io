"use client";

import Link from "next/link";
import { useTheme } from "../hooks/useTheme";

export function Header() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          TayeShi
        </Link>
        
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            首页
          </Link>
          <Link href="#articles" className="text-muted-foreground hover:text-foreground transition-colors">
            文章
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            关于
          </Link>
        </nav>

        <button
          onClick={toggleTheme}
          className="relative h-8 w-14 rounded-full bg-secondary transition-colors"
          aria-label="切换主题"
        >
          <span
            className={`absolute top-1 text-sm transition-transform duration-300 ${
              theme === "light" ? "left-1" : "left-6"
            }`}
          >
            {theme === "light" ? "☀️" : "🌙"}
          </span>
        </button>
      </div>
    </header>
  );
}
