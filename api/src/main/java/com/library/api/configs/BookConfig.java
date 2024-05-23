package com.library.api.configs;

import com.library.api.models.Author;
import com.library.api.models.Book;
import com.library.api.models.Translator;
import com.library.api.repositories.AuthorRepository;
import com.library.api.repositories.BookRepository;
import com.library.api.repositories.TranslatorRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class BookConfig {

    @Bean
    CommandLineRunner commandLineRunner(
            BookRepository bookRepository,
            AuthorRepository authorRepository,
            TranslatorRepository translatorRepository
    ) {
        return getCommandLineRunner(bookRepository, authorRepository, translatorRepository);
    }

    private static CommandLineRunner getCommandLineRunner(
            BookRepository bookRepository,
            AuthorRepository authorRepository,
            TranslatorRepository translatorRepository
    ) {
        return args -> {
            Author author = getAuthor();
            Translator translator = getTranslator();
            Book oldMen = getBook(author, translator);

            authorRepository.save(author);
            translatorRepository.save(translator);
            bookRepository.save(oldMen);
        };
    }

    private static Author getAuthor() {
        Author author = new Author();
        author.setFirstName("Ernest");
        author.setLastName("Hemingway");
        return author;
    }

    private static Translator getTranslator() {
        Translator translator = new Translator();
        translator.setFirstName("Kaja");
        translator.setLastName("Gucio");
        translator.setLanguageRelease("polski");
        return translator;
    }

    private static Book getBook(Author author, Translator translator) {
        Book oldMen = new Book();
        oldMen.setTitle("Stary człowiek i morze");
        oldMen.setPublishingHouse("Wydawnictwo Marginesy");
        oldMen.setLanguageOriginal("angielski");
        oldMen.setNumberOfPages(160);
        oldMen.setPublicationDate(LocalDate.parse("2024-05-23"));
        oldMen.setType("ksiązka");
        oldMen.setCover("twarda");
        oldMen.setHeight(220.0);
        oldMen.setWidth(100.0);
        oldMen.setDepth(10.0);
        oldMen.setAuthor(author);
        oldMen.setTranslator(translator);
        return oldMen;
    }
}
