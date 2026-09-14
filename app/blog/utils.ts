import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// ✅ Crée le dossier s'il n'existe pas
if (!fs.existsSync(postsDirectory)) {
  fs.mkdirSync(postsDirectory, { recursive: true });
}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
}


export function getPostBySlug(slug: string) {
  if (!slug) {
    // ✅ Retourne un article vide au lieu de planter
    return {
      slug: '',
      meta: { title: 'Article introuvable', date: '', coverImage: '' },
      content: '# Article introuvable'
    };
  }
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`Post not found: ${realSlug}`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);
  return { slug: realSlug, meta: data, content };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs
    .map(slug => getPostBySlug(slug.replace(/\.md$/, '')))
    .sort((a, b) => new Date(b.meta.date) > new Date(a.meta.date) ? 1 : -1);
}