// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/app/blog/utils'
import { renderMarkdown } from '@/app/blog/markdown'
import { Title } from '@/components/Title'

export const dynamicParams = false

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const posts = getAllPosts()
  const params = posts
    .filter((p) => p.slug && p.slug.trim() !== '')
    .map((p) => ({ slug: p.slug }))

  if (params.length === 0) {
    throw new Error('Aucun post trouvé — vérifie le chemin du dossier content')
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: 'Article introuvable' }

  return { title: post.meta.title, description: post.meta.description }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const html = await renderMarkdown(post.content)
  const date = new Date(post.meta.date)

  return (
    <div>
      <Title title="" />
      <article className="prose prose-invert max-w-4xl mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">{post.meta.title}</h1>
        <time dateTime={date.toISOString()} className="mt-2 block text-sm text-neutral-500">
          {date.toLocaleDateString('fr-FR', { dateStyle: 'long' })}
        </time>
        <div
          className="prose-base mt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  )
}