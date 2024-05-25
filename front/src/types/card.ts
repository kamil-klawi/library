import { Author } from './author.ts';
import { Translator } from './translator.ts';
import { Book } from './book.ts';

export interface CardProps {
    packageInstance: Book | Author | Translator;
}

export interface InfoCardProps {
    title: string;
    description: string;
    image: {
        uri: string;
        alt: string;
    };
}
