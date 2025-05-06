'use client';

import { useRouter } from 'next/navigation';
import { createPost } from '@/services/api';
import ArticleForm from '@/components/PostForm';

export default function CreatePostPage(){
    const router = useRouter();

    const handleSubmit = async (title: string, content: string) => {
        await createPost(title, content);
        router.push('/posts');
    };

    return (
            <div>
                <h1>Create Post</h1>
                <ArticleForm onSubmit={handleSubmit} />
            </div>
    );
}