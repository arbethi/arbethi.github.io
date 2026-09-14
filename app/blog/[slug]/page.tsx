import { getPostBySlug, getPostSlugs } from '../../blog/utils';
import type { Metadata } from 'next';
import { Title } from '@/components/Title';
import { renderMarkdown } from '../markdown';

type Params = { slug: string };

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  console.log("📁 Slugs trouvés:", slugs);

  return slugs
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      if (!slug) console.error("❌ Slug vide pour le fichier:", file);
      return slug;
    })
    .filter((slug) => slug && slug.trim() !== '')
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { meta } = getPostBySlug(params.slug);
  return { title: meta.title, description: meta.description };
}

export default async function BlogPost({ params }: { params: Params }) {
  const { meta, content } = getPostBySlug(params.slug);
  const mdxSource = await renderMarkdown(content);

  return (
    <div>
      <Title title="" />
      <article className="prose prose-invert max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">{meta.title}</h1>
        <time dateTime={meta.date} className="mt-2 block text-sm text-neutral-500">
          {new Date(meta.date).toLocaleDateString('fr-FR', { dateStyle: 'long' })}
        </time>
        <div className="prose-base mt-10" dangerouslySetInnerHTML={{ __html: mdxSource }} />
      </article>
    </div>
  );
}