"use client";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <article
      className="group cursor-pointer rounded-xl border border-border bg-secondary p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.category}</span>
        </div>
        <span className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
          {article.readTime}
        </span>
      </div>
      
      <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
        {article.title}
      </h3>
      
      <p className="mb-4 line-clamp-2 text-muted-foreground">
        {article.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
