package com.library.api.services;

import com.library.api.dto.BookDTO;
import com.library.api.models.Book;
import com.library.api.repositories.BookRepository;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class BookService {
    private final BookRepository bookRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public BookService(BookRepository bookRepository, ModelMapper modelMapper) {
        this.bookRepository = bookRepository;
        this.modelMapper = modelMapper;
    }

    private BookDTO FromEntityToDTO(Book book) {
        return new BookDTO(
                book.getId(),
                book.getTitle(),
                book.getPublishingHouse(),
                book.getLanguageOriginal(),
                book.getNumberOfPages(),
                book.getPublicationDate(),
                book.getType(),
                book.getCover(),
                book.getHeight(),
                book.getWidth(),
                book.getDepth()
        );
    }

    public List<BookDTO> getAllBooks() {
        List<Book> bookList = bookRepository.findAll();
        return bookList.stream().map(this::FromEntityToDTO).collect(Collectors.toList());
    }

    public BookDTO getBookById(Long bookId) {
        Book book = bookRepository.findById(bookId).orElseThrow(() -> new IllegalStateException("Book with id " + bookId + " does not exist!"));
        return this.modelMapper.map(book, BookDTO.class);
    }

    public void createBook(Book book) {
        bookRepository.save(book);
    }

    public void deleteBook(Long bookId) {
        boolean bookExist = bookRepository.existsById(bookId);
        if (!bookExist) {
            throw new IllegalStateException("Book with id " + bookId + " does not exist!");
        }
        bookRepository.deleteById(bookId);
    }

    @Transactional
    public void updateBook(
            Long bookId,
            Book book
    ) {
        Book bookData = bookRepository.findById(bookId).orElseThrow(() -> new IllegalStateException("Book with id " + bookId + " does not exist!"));
        if (bookData.getTitle() != null && bookData.getTitle().isEmpty() && !Objects.equals(bookData.getTitle(), book.getTitle())) {
            bookData.setTitle(book.getTitle());
        }
        if (bookData.getPublishingHouse() != null && !bookData.getPublishingHouse().isEmpty() && !Objects.equals(bookData.getPublishingHouse(), book.getPublishingHouse())) {
            bookData.setPublishingHouse(book.getPublishingHouse());
        }
        if (bookData.getLanguageOriginal() != null && !bookData.getLanguageOriginal().isEmpty() && !Objects.equals(bookData.getLanguageOriginal(), book.getLanguageOriginal())) {
            bookData.setLanguageOriginal(book.getLanguageOriginal());
        }
        if (bookData.getPublicationDate() != null && !Objects.equals(bookData.getPublicationDate(), book.getPublicationDate())) {
            bookData.setPublicationDate(book.getPublicationDate());
        }
        if (bookData.getNumberOfPages() != null && !Objects.equals(bookData.getNumberOfPages(), book.getNumberOfPages())) {
            bookData.setNumberOfPages(book.getNumberOfPages());
        }
        if (bookData.getType() != null && !bookData.getType().isEmpty() && !Objects.equals(bookData.getType(), book.getType())) {
            bookData.setType(book.getType());
        }
        if (bookData.getCover() != null && !bookData.getCover().isEmpty() && !Objects.equals(bookData.getCover(), book.getCover())) {
            bookData.setCover(book.getCover());
        }
        if (bookData.getHeight() != null && !Objects.equals(bookData.getHeight(), book.getHeight())) {
            bookData.setHeight(book.getHeight());
        }
        if (bookData.getWidth() != null && !Objects.equals(bookData.getWidth(), book.getWidth())) {
            bookData.setWidth(book.getWidth());
        }
        if (bookData.getDepth() != null && !Objects.equals(bookData.getDepth(), book.getDepth())) {
            bookData.setDepth(book.getDepth());
        }
        bookRepository.save(bookData);
    }
}
