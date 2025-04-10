import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async getAll(){
        return this.postsService.getAllPosts();
    }

    @Get(":id")
    async getById(@Param('id') id: string){
        const post = await this.postsService.getPostById(id);
        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true}))
    async create(@Body() dto: CreatePostDto){
        return this.postsService.createPost(dto.title, dto.content);
    }

    @Put(":id")
    async update(@Param('id') id: string, @Body() body: { title: string, content: string}){
        const post = await this.postsService.updatePost(id, body.title, body.content);
        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }

    @Delete(":id")
    async delete(@Param('id') id: string)
    {
        const post = await this.postsService.deletePost(id);
        if (!post) {
            throw new NotFoundException(`Post with ID ${id} not found`);
        }
        return post;
    }
}

