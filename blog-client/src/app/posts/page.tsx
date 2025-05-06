import { getPosts } from '@/services/api';
import  type { Post } from '@/types/Post'
import PostCard from '@/components/PostCard';

export const metadata = {
    title: 'Home Page',
    description: 'This is a home page.',
};



export default async function HomePage() {
    const posts: Post[] = await getPosts();

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.map((post: Post) => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    )
}

