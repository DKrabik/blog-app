import type { Post } from "@/types/Post"

interface ArticleDetailProps {
    post: Post;
}

export default function ArticleDetail({ post }: ArticleDetailProps) {
    if (!post){
        return <div>Post not found.</div>;
    }
    
    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
            <h1 style={{ fontSize: '24px', marginBottom: '10px' }}>{post.title}</h1>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{post.content}</p>
            <p>🕒 {new Date(post.createdAt).toLocaleString("uk-UA", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}</p>
        </div>
    );
}
