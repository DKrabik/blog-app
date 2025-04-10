import { IsNotEmpty, isNotEmpty } from 'class-validator'

export class CreatePostDto {
    @IsNotEmpty({ message: "Поле title є обов'язковим"})
    title: string;

    @IsNotEmpty({ message: "Поле content є обов'язковим"})
    content: string;
}