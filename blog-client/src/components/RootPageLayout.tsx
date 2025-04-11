'use client'

import Link from 'next/link'

export function RootPageLayout({ children, id }: { children: React.ReactNode, id: string }) {
    return (
      <>
        <header>
          <nav>
              <Link href="/posts">Home</Link> |{" "}
              <Link href="/posts/create">Create Post</Link> |
              {id && (
                <>
                    {" "}
                    <Link href={`/posts/${id}/edit`}>Edit</Link> |{" "}
                    <Link href={`/posts`}>Back</Link>
                </>
              )}
          </nav>
        </header>
        <main>{children}</main>
      </>
    );
  }