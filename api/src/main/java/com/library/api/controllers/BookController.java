package com.library.api.controllers;

import com.library.api.dto.BookDTO;
import com.library.api.models.Book;
import com.library.api.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/books")
@CrossOrigin
public class BookController {
    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<BookDTO> getAllBooks() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{bookId}")
    public BookDTO getBookById(@PathVariable("bookId") Long bookId) {
        return bookService.getBookById(bookId);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createBook(@RequestBody Book book) {
        bookService.createBook(book);
        return ResponseEntity.ok("Successfully! The book has been created.");
    }

    @PutMapping("/update/{bookId}")
    public ResponseEntity<String> updateBook(@PathVariable("bookId") Long bookId, @RequestBody Book book) {
        bookService.updateBook(bookId, book);
        return ResponseEntity.ok("Successfully! The book has been updated.");
    }

    @DeleteMapping("/delete/{bookId}")
    public ResponseEntity<String> deleteBook(@PathVariable("bookId") Long bookId) {
        bookService.deleteBook(bookId);
        return ResponseEntity.ok("Successfully! The book, author and translator have been removed.");
    }
}
