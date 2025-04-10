import Link from 'next/link';

interface ArticleCardProps {
    post: {
        _id: string;
        title: string;
        content: string;
    };
}

export default function ArticleCard({ post }: ArticleCardProps) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
            <h3>
                <Link href={`/posts/${post._id}`}>{post.title}</Link>
            </h3>
            <p>{post.content.substring(0, 100)}...</p>
        </div>
    );
}