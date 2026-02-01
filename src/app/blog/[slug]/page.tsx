import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'

interface Post {
  slug: string
  title: string
  description: string
  date: string
  published: boolean
  content: string
}

async function getPost(slug: string): Promise<Post | null> {
  const postPath = path.join(process.cwd(), 'src/posts', slug, 'index.md')

  if (!fs.existsSync(postPath)) {
    return null
  }

  const fileContents = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(fileContents)

  if (data.published === false) {
    return null
  }

  // 마크다운 이미지 경로를 public 경로로 변환
  const fixedContent = content.replace(
    /!\[([^\]]*)\]\(\.\/images\//g,
    (_, alt) => `![${alt}](/posts/${slug}/images/`,
  )

  // 마크다운을 HTML로 변환
  const processedContent = await remark().use(html).process(fixedContent)

  return {
    slug,
    title: data.title || slug,
    description: data.description || '',
    date: data.date instanceof Date ? data.date.toISOString() : data.date || '',
    published: data.published || true,
    content: processedContent.toString(),
  }
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/posts')
  const postFolders = fs.readdirSync(postsDirectory)

  return postFolders.map((folder) => ({
    slug: folder,
  }))
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white font-pretendard">
      <div className="max-w-4xl mx-auto p-6">
        {/* 뒤로가기 버튼 */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <svg
              className="mr-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-label="뒤로 가기"
            >
              <title>뒤로 가기</title>

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            블로그 목록으로
          </Link>
        </div>

        {/* 포스트 헤더 */}
        <header className="mb-12">
          <div className="mb-4">
            <time className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('ko-KR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>

          {post.description && (
            <p className="text-xl text-gray-600">{post.description}</p>
          )}
        </header>

        {/* 포스트 내용 */}
        <article className="prose prose-lg max-w-none">
          <div
            className="markdown-content"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* 하단 네비게이션 */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← 모든 포스트 보기
          </Link>
        </div>
      </div>
    </div>
  )
}
