import { getPostById, getPosts } from '@/services/api';
import PostDetail from '@/components/PostDetail';
import { RootPageLayout } from '@/components/RootPageLayout';
import type { Post } from "@/types/Post"

export async function generateMetadata({params} : {params: {id: string}}) {
    if (!params){
        return {
            title: "Post not Found",
            description: "The requested post could not be found",
        };
    }

    const { id } = await params;

    try {
        const post: Post = await getPostById(id);
        return {
            title: post.title,
            description: `View article: ${post.title}`,
        };
    } catch (err) {
        return {
            title: 'Post not found',
            description: "The page does not exist or an error occurred while loading.",
        };
    }
    
}

export default async function PostPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    try {
        const post = await getPostById(id);

        return (
            <RootPageLayout id = {id}>
                <PostDetail post={post} />
            </RootPageLayout>
        );
    } catch (error) {
        return (
            <RootPageLayout id={id}>
                <div>Error loading post. Please try again later.</div>;
            </RootPageLayout>
        );
    }
};


