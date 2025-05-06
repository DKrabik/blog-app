import { getPostById } from "@/services/api";
import EditPostClient from "./EditPostClient";

export default async function EditPostServer({params}: { params: { id: string }}) {
    const { id }=  await params;
    
    if (!id) {
        return (
            <div>
                <h1>Error</h1>
                <p>Post ID is missing.</p>
            </div>
        );
    }
    
    try {
        const post = await getPostById(id);

        return (
            <div>
                <h1>Edit Post</h1>
                <EditPostClient post={post} />
            </div>
        );
    } catch (error) {
        return (
            <div>
                <h1>Error</h1>
                <p>Не вдалося завантажити пост.</p>
                <p>{`Error: ${error}`}</p>
            </div>
        );
    }
    
}