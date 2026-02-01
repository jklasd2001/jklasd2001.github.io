'use client'

import { type ReactNode, useState } from 'react'

import bookmarks from 'src/data/bookmarks.json'

type Category = 'all' | 'blog' | 'youtube' | 'tool' | 'docs'

interface Bookmark {
  title: string
  url: string
  description: string
  category: string
  tags: string[]
}

const CATEGORY_CONFIG: Record<
  Exclude<Category, 'all'>,
  { label: string; color: string; bgColor: string; icon: ReactNode }
> = {
  blog: {
    label: '블로그',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    ),
  },
  youtube: {
    label: '유튜브',
    color: 'text-red-700',
    bgColor: 'bg-red-100',
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  tool: {
    label: '도구',
    color: 'text-green-700',
    bgColor: 'bg-green-100',
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  docs: {
    label: '문서',
    color: 'text-purple-700',
    bgColor: 'bg-purple-100',
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
}

const TABS: { key: Category; label: string }[] = [
  { key: 'all', label: '전체' },
  { key: 'blog', label: '블로그' },
  { key: 'youtube', label: '유튜브' },
  { key: 'tool', label: '도구' },
  { key: 'docs', label: '문서' },
]

export default function BookmarksPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filtered: Bookmark[] =
    activeCategory === 'all'
      ? bookmarks
      : bookmarks.filter((b) => b.category === activeCategory)

  return (
    <div className="min-h-screen bg-white font-pretendard">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">북마크</h1>
          <p className="text-lg text-gray-600">
            개발에 도움이 되는 블로그, 유튜브, 도구, 문서 모음입니다.
          </p>
        </div>

        <div className="flex gap-2 mb-8 flex-wrap">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === tab.key
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map((bookmark) => {
              const config =
                CATEGORY_CONFIG[
                  bookmark.category as Exclude<Category, 'all'>
                ]

              return (
                <a
                  key={bookmark.url}
                  href={bookmark.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${config.bgColor} ${config.color}`}
                    >
                      {config.icon}
                      {config.label}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {bookmark.title}
                  </h2>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {bookmark.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {bookmark.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">해당 카테고리에 북마크가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}
