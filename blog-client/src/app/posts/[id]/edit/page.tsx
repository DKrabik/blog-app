import { getPostById } from '@/services/api';
import EditPostServer from './EditPostServer';
import type { Post } from "@/types/Post"

export const dynamic = "force-dynamic";

export async function generateMetadata({params} : {params: {id: string}}) {
    const { id } =  await params;
    const post: Post = await getPostById(id);
    return {
        
        title: `Post editing: ${post.title}`,
    };
}

export default EditPostServer;




