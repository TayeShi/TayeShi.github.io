import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ArticleCard } from "./components/ArticleCard";

const articles = [
  {
    id: 1,
    title: "使用 Tailwind CSS 构建现代化响应式网站",
    excerpt: "Tailwind CSS 是一个功能类优先的 CSS 框架，它可以帮助我们快速构建现代化的用户界面...",
    date: "2026-01-23",
    category: "技术分享",
    readTime: "5 min read",
    tags: ["CSS", "Tailwind"],
  },
  {
    id: 2,
    title: "JavaScript 异步编程完全指南",
    excerpt: "从回调函数到 Promise，再到 async/await，全面理解 JavaScript 的异步编程模式...",
    date: "2026-01-20",
    category: "技术分享",
    readTime: "8 min read",
    tags: ["JavaScript", "Async"],
  },
  {
    id: 3,
    title: "为什么我选择成为全栈开发者",
    excerpt: "全栈开发让我能够从整体视角看待产品开发，让我对技术有了更深的理解...",
    date: "2026-01-15",
    category: "随笔",
    readTime: "3 min read",
    tags: ["随笔"],
  },
  {
    id: 4,
    title: "React Hooks 最佳实践",
    excerpt: "深入理解 React Hooks 的使用模式和最佳实践，让你的代码更加简洁和可维护...",
    date: "2026-01-10",
    category: "技术分享",
    readTime: "10 min read",
    tags: ["React", "Hooks"],
  },
];

const techStack = [
  "React",
  "Vue",
  "Node.js",
  "Python",
  "TypeScript",
  "PostgreSQL",
  "Docker",
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <section className="mx-auto mb-16 max-w-4xl px-6">
          <div className="animate-fade-in">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
              你好，我是 <span className="text-primary">TayeShi</span>
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl">
              全栈开发者 / 技术博主 / 终身学习者
              <br />
              分享技术、思考与生活
            </p>
          </div>
        </section>
        
        <section id="articles" className="mx-auto mb-16 max-w-4xl px-6">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <span>📝</span>
            最新文章
          </h2>
          
          <div className="space-y-6">
            {articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
          
          <button className="mt-8 w-full rounded-lg border border-border py-3 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground">
            加载更多文章 →
          </button>
        </section>
        
        <section id="about" className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold">
            <span>👨‍💻</span>
            关于我
          </h2>
          
          <div className="rounded-xl border border-border bg-secondary p-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center md:col-span-1">
                <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-4xl">
                  👨‍💻
                </div>
                <p className="text-lg font-bold">TayeShi</p>
                <p className="text-sm text-muted-foreground">全栈开发者</p>
              </div>
              
              <div className="space-y-4 md:col-span-2">
                <p className="leading-relaxed text-muted-foreground">
                  嗨，我是一名热爱技术的全栈开发者，拥有多年的 Web 开发经验。
                  我专注于使用现代技术栈构建高质量的 Web 应用程序。
                </p>
                
                <p className="leading-relaxed text-muted-foreground">
                  我的技术栈包括但不限于：
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a href="#" className="text-primary hover:underline transition-colors">
                    GitHub
                  </a>
                  <a href="#" className="text-primary hover:underline transition-colors">
                    Twitter
                  </a>
                  <a href="#" className="text-primary hover:underline transition-colors">
                    Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
