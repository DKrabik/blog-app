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
              {!isPostPage && pathname.endsWith('create') && (
                <header>
                    <nav>
                        <Link href="/posts">Home</Link>
                    </nav>
                </header>
              )}

              {pathname.endsWith('edit') && (
                <header>
                    <nav>
                        <Link href="/posts">Home</Link> | <Link href="/posts/create">Create Post</Link> | <Link href="/posts">Back</Link>
                    </nav>
                </header>
              )} 

              {!isPostPage &&(
                <header>
                  <nav>
                   <Link href="/posts">Home</Link> | <Link href="/posts/create">Create Post</Link>
                  </nav>
                </header>
              )}

              <main>{children}</main>
            </body>
    </html>
  );
}




