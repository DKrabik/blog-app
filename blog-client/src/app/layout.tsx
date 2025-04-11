'use client';

import "../globals.css";
import { usePathname } from "next/navigation"; 
import Link from "next/link";

export default function RootLayout({ children}: { children: React.ReactNode}) {
  const pathname = usePathname();

  const isPostPage = pathname.startsWith('/posts/');

  return (
    <html lang="en">
            <body>
              {!isPostPage && (
                <header>
                    <nav>
                        <Link href="/posts">Home</Link> | <Link href="/posts/create">Create Post</Link>
                    </nav>
                </header>
              )}
              {isPostPage && pathname.endsWith('create') && (
                <header>
                    <nav>
                        <Link href="/posts">Home</Link>
                    </nav>
                </header>
              )} 

              {pathname.endsWith('edit') &&(
                <header>
                <nav>
                    <Link href="/posts">Home</Link> | <Link href="/posts/create">Create Post</Link> | <Link href={`/posts`}>Back</Link>
                </nav>
            </header>
              )}
                <main>{children}</main>
            </body>
        </html>
  );
}

export function RootPageLayout({ children, id }: { children: React.ReactNode, id: string }) {
  return (
    <>
      <header>
        <nav>
            <a href="/posts">Home</a> |
            <a href="/posts/create">Create Post</a> |
            {id && (
              <>
                <Link href={`/posts/${id}/edit`}>Edit</Link> | <Link href={`/posts`}>Back</Link>
              </>
            )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}


