'use client'

import React, { useEffect, useState, useRef } from 'react';
import Swal from 'sweetalert2';

interface ArticleFormProps {
    onSubmit: (title: string, content: string) => void;
    onDelete?: () => void;
    initialTitle?: string;
    initialContent?: string;
}

export default function ArticleForm({
    onSubmit,
    onDelete,
    initialTitle = '',
    initialContent = '',
}: ArticleFormProps) {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);
    const [error, setError] = useState<string | null>(null);

    const textareaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        setTitle(initialTitle);
        setContent(initialContent);
    }, [initialTitle, initialContent]);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [content]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !content.trim()){
            setError("Title and Content can't be empty");
            return;
        }

        setError(null);
        onSubmit(title.trim(), content.trim());
    };

    const handleDeleteClick = async () => {
        const result = await Swal.fire({
            title: 'Ви впевнені?',
            text: 'Цю дію не можна скасувати!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Так, видалити!',
            cancelButtonText: 'Скасувати',
        })

        if (result.isConfirmed && onDelete){
            onDelete();
        }
    }

    return (<form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {error && <p style={{ color: "red", fontWeight: 500}}>{error}</p>}

        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style = {{
                fontSize: '16px',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
            }}
            required
        />
        <textarea
            ref={textareaRef}
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style = {{
                fontSize: '16px',
                padding: '10px',
                width: '100%',
                boxSizing: 'border-box',
                resize: 'none',
                overflow: 'hidden',
            }}
            required
        />
        {onDelete && (
            <button
                type="button"
                onClick={handleDeleteClick}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none'
                }}
            >Delete</button>
        )}
        <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>
            Save Changed
         </button>
    </form>
    );
}