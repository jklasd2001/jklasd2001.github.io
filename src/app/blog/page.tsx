import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'
import Link from 'next/link'

interface Post {
  slug: string
  title: string
  description: string
  date: string
  published: boolean
}

async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const postFolders = fs.readdirSync(postsDirectory)

  const posts: Post[] = []

  for (const folder of postFolders) {
    const postPath = path.join(postsDirectory, folder, 'index.md')

    if (fs.existsSync(postPath)) {
      const fileContents = fs.readFileSync(postPath, 'utf8')
      const { data } = matter(fileContents)

      if (data.published !== false) {
        posts.push({
          slug: folder,
          title: data.title || folder,
          description: data.description || '',
          date: data.date || '',
          published: data.published || true,
        })
      }
    }
  }

  // 날짜순으로 정렬 (최신순)
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-white font-pretendard">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">블로그</h1>
          <p className="text-lg text-gray-600">
            개발하면서 배우고 정리한 내용들을 공유합니다.
          </p>
        </div>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-gray-200 pb-8">
              <div className="mb-4">
                <time className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {post.title}
                </Link>
              </h2>

              {post.description && (
                <p className="text-gray-600 mb-4">{post.description}</p>
              )}

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                읽어보기
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">아직 작성된 포스트가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}
