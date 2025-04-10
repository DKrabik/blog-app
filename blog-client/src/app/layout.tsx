'use client';

import { Inter , Roboto_Mono } from "next/font/google";
import "../globals.css";
import { usePathname } from "next/navigation"; 

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children}: { children: React.ReactNode}) {
  const pathname = usePathname();

  const isPostPage = pathname.startsWith('/posts/');

  return (
    <html lang="en">
            <body>
              {!isPostPage && (
                <header>
                    <nav>
                        <a href="/posts">Home</a> | <a href="/posts/create">Create Post</a>
                    </nav>
                </header>
              )}
              {isPostPage && pathname.endsWith('create') && (
                <header>
                    <nav>
                        <a href="/posts">Home</a>
                    </nav>
                </header>
              )} 

              {pathname.endsWith('edit') &&(
                <header>
                <nav>
                    <a href="/posts">Home</a> | <a href="/posts/create">Create Post</a> | <a href={`/posts`}>Back</a>
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
                <a href={`/posts/${id}/edit`}>Edit</a> | <a href={`/posts`}>Back</a>
              </>
            )}
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}


