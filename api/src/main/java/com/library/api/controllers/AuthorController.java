package com.library.api.controllers;

import com.library.api.dto.AuthorDTO;
import com.library.api.models.Author;
import com.library.api.services.AuthorService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/authors")
@CrossOrigin
public class AuthorController {
    private final AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping
    public List<AuthorDTO> getAllAuthors() {
        return authorService.getAllAuthors();
    }

    @GetMapping("/{authorId}")
    public AuthorDTO getAuthorById(@PathVariable("authorId") Long authorId) {
        return authorService.getAuthorById(authorId);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createAuthor(@RequestBody Author author) {
        authorService.createAuthor(author);
        return ResponseEntity.ok("Successfully! The author has been created.");
    }

    @PutMapping("/update/{authorId}")
    public ResponseEntity<String> updateBook(@PathVariable("authorId") Long authorId, @RequestBody Author author) {
        authorService.updateAuthor(authorId, author);
        return ResponseEntity.ok("Successfully! The author has been updated.");
    }

    @DeleteMapping("/delete/{authorId}")
    public ResponseEntity<String> deleteAuthor(@PathVariable("authorId") Long authorId) {
        authorService.deleteAuthor(authorId);
        return ResponseEntity.ok("Successfully! The author has been removed.");
    }
}
