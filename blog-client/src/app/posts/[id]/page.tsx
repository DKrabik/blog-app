import { getPostById, getPosts } from '@/services/api';
import PostDetail from '@/components/PostDetail';
import { RootPageLayout } from '@/app/layout';

export const metadata = async ({ params }: { params: {id: string }}) => {
    console.log(params)
    if (!params){
        return {
            title: "Post not Found",
            description: "The requested post could not be found",
        };
    }

    try {
        const post = await getPostById(params.id);
        return {
            title: `Edit: ${post.title}`,
            description: `Editing post: ${post.title}`,
        };
    } catch (err) {
        console.log('Error fetching post in metadata:', err);
        return {
            title: 'Error',
            description: "An error occurred while fetching the post.",
        };
    }
};

export async function generateStaticParams(){
    try {
        const posts = await getPosts();
        return posts.map((post: any) => ({
            id: post._id,
        }))
    } catch (error) {
        console.error('Error geterating static params:', error);
        return [];
    }
};

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


