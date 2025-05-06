import Link from 'next/link';
import type { Post } from '@/types/Post';

interface ArticleCardProps {
    post: Post;
}

export default function ArticleCard({ post }: ArticleCardProps) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <h3>
                <Link href={`/posts/${post._id}`}>{post.title}</Link>
            </h3>
            <p>{post.content.substring(0, 100)}...</p>
            <p>🕒 {new Date(post.createdAt).toLocaleString("uk-UA", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}</p>
        </div>
    );
}