import { getAllPosts } from './blog/utils';
import { Card } from '@/components/Card';
import { Title } from "@/components/Title";

export default function Home() {
  const posts = getAllPosts();

  return (
    <div>
      <Title title="Arbethi Blog"/>
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Card
            key={post.slug}
            title={post.meta.title}
            path={post.meta.coverImage}
            url={`/blog/${post.slug}`}
          />
        ))}
      </div>
    </div>
    </div>
  );
}