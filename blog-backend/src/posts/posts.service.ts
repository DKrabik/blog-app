import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './schemas/post.schema';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}

    async getAllPosts(): Promise<Post[]> {
        return this.postModel.find().exec();
    }

    async getPostById(id: string): Promise<Post | null> {
        return this.postModel.findById(id).exec();
    }

    async createPost(title: string, content: string): Promise<Post> {
        const newPost = new this.postModel({ title, content });
        return newPost.save();
    }

    async updatePost(id: string, title: string, content: string): Promise<Post | null> {
        return this.postModel.findByIdAndUpdate(id, { title, content }, { new: true }).exec();
    }

    async deletePost(id: string): Promise<Post | null> {
        return this.postModel.findByIdAndDelete(id).exec();
    }
}
