'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { updatePost, deletePost } from '@/services/api';
import PostForm from '@/components/PostForm';
import Swal from 'sweetalert2';

export default function EditPostClient({ post }: { post: { _id: string; title: string; content: string }}){
    const [title, ] = useState(post.title);
    const [content, ] = useState(post.content);
    const router = useRouter();

    const handleSubmit = async (newTitle: string, newContent: string) => {
        try {
            await updatePost(post._id, newTitle, newContent);
            router.push(`/posts/${post._id}`);
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deletePost(post._id);
                await Swal.fire({
                    title: 'Видалено!', 
                    text: 'Ваш пост було видалено.', 
                    icon: 'success',
                    confirmButtonText: 'ОК'
                });
                router.push('/posts')
        } catch (error) {
            console.error('Помилка видалення', error);
            await Swal.fire({
                title: 'Помилка!', 
                text: 'Щось пішло не так при видаленні поста.', 
                icon: 'error',
                confirmButtonText: 'ОК'
            });
        }
    };

    return (
        <PostForm 
            onSubmit={handleSubmit} 
            onDelete={handleDelete}
            initialTitle={title} 
            initialContent={content} 
        />
    );
}

